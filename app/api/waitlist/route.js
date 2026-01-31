import { NextResponse } from "next/server"
import sql from "@/lib/db"
import { AFRICA_SET } from "@/lib/africa"

// referral code generator (no confusing chars)
function makeReferralCode(len = 8) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  let out = ""
  for (let i = 0; i < len; i++) out += chars[Math.floor(Math.random() * chars.length)]
  return "RW" + out // prefix
}

export async function POST(req) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })

    // required fields
    const emailRaw = body.email
    const fullNameRaw = body.fullName
    const phoneRaw = body.phone
    const heardFromRaw = body.heardFrom
    const consentRaw = body.consent

    if (!emailRaw || typeof emailRaw !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }
    if (!fullNameRaw || typeof fullNameRaw !== "string" || !fullNameRaw.trim()) {
      return NextResponse.json({ error: "Full name is required" }, { status: 400 })
    }
    if (!phoneRaw || typeof phoneRaw !== "string" || !phoneRaw.trim()) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
    }
    if (!heardFromRaw || typeof heardFromRaw !== "string" || !heardFromRaw.trim()) {
      return NextResponse.json({ error: "How you heard about us is required" }, { status: 400 })
    }
    if (consentRaw !== true) {
      return NextResponse.json({ error: "Consent is required" }, { status: 400 })
    }

    const email = emailRaw.trim().toLowerCase()
    if (!email.includes("@")) return NextResponse.json({ error: "Invalid email" }, { status: 400 })

    const fullName = fullNameRaw.trim()
    const phone = phoneRaw.trim()
    const heardFrom = heardFromRaw.trim()

    // optional fields
    const rolesRaw = body.roles
    const roles =
      Array.isArray(rolesRaw) ? rolesRaw.filter(Boolean).map(String) :
      typeof rolesRaw === "string" && rolesRaw.trim() ? [rolesRaw.trim()] :
      ["user"]

    const outsideAfrica = Boolean(body.outsideAfrica)

    const countryRaw = typeof body.country === "string" ? body.country.trim() : ""
    const country = outsideAfrica ? "Outside Africa" : countryRaw

    // Africa gating (only if not outsideAfrica)
    if (!outsideAfrica) {
      if (!country || !AFRICA_SET.has(country)) {
        return NextResponse.json({ error: "For now, waitlist is limited to African countries." }, { status: 400 })
      }
    }

    // referral validation (optional)
    const referredByRaw = typeof body.referredBy === "string" ? body.referredBy.trim().toUpperCase() : ""
    let referredBy = referredByRaw || null

    if (referredBy) {
      const refRows = await sql`
        SELECT id FROM public.waitlist
        WHERE referral_code = ${referredBy}
        LIMIT 1
      `
      if (refRows.length === 0) {
        return NextResponse.json({ error: "Invalid referral code" }, { status: 400 })
      }
    }

    // generate new referral_code (avoid collision)
    let referralCode = makeReferralCode()
    for (let i = 0; i < 5; i++) {
      const existing = await sql`
        SELECT id FROM public.waitlist
        WHERE referral_code = ${referralCode}
        LIMIT 1
      `
      if (existing.length === 0) break
      referralCode = makeReferralCode()
    }

    // upsert by email
    const rows = await sql`
      INSERT INTO public.waitlist (
        email,
        full_name,
        phone,
        country,
        heard_from,
        consent,
        referral_code,
        referred_by,
        created_at
      )
      VALUES (
        ${email},
        ${fullName},
        ${phone},
        ${country},
        ${heardFrom},
        ${true},
        ${referralCode},
        ${referredBy},
        NOW()
      )
      ON CONFLICT (email)
      DO UPDATE SET
        full_name = EXCLUDED.full_name,
        phone = EXCLUDED.phone,
        country = EXCLUDED.country,
        heard_from = EXCLUDED.heard_from,
        consent = EXCLUDED.consent,
        referred_by = COALESCE(EXCLUDED.referred_by, public.waitlist.referred_by)
      RETURNING
        id,
        email,
        full_name,
        phone,
        country,
        heard_from,
        consent,
        referral_code,
        referred_by,
        created_at
    `

    const saved = rows[0]

    return NextResponse.json(
      {
        ok: true,
        waitlist: saved,
        referralCode: saved.referral_code,
        referralLink: `${process.env.NEXT_PUBLIC_SITE_URL || "https://rewaiq.com.ng"}/?ref=${saved.referral_code}`,
      },
      { status: 200 }
    )
  } catch (err) {
    console.error("Waitlist POST error:", err)
    return NextResponse.json(
      { error: "Server error", code: err?.code || "UNKNOWN" },
      { status: 500 }
    )
  }
}