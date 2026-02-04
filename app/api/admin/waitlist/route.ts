import { NextResponse } from "next/server"
import sql from "@/lib/db"
export const dynamic = "force-dynamic"
export const revalidate = 0


function toInt(v: string | null, fallback: number) {
  const n = Number(v)
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const q = (url.searchParams.get("q") || "").trim()
    const page = toInt(url.searchParams.get("page"), 1)
    const pageSize = Math.min(toInt(url.searchParams.get("pageSize"), 20), 100)
    const offset = (page - 1) * pageSize

    const like = `%${q}%`

    // total count
    const totalRes = (await sql`
      SELECT COUNT(*)::int as total
      FROM public.waitlist
      WHERE
        ${q === ""} OR
        full_name ILIKE ${like} OR
        email ILIKE ${like} OR
        phone ILIKE ${like} OR
        referral_code ILIKE ${like} OR
        referred_by ILIKE ${like} OR
        country ILIKE ${like}
    `) as { total: number }[]

    const total = totalRes?.[0]?.total ?? 0

    // rows
    const rows = (await sql`
      SELECT
        id,
        full_name,
        email,
        phone,
        country,
        heard_from,
        referral_code,
        referred_by,
        created_at
      FROM public.waitlist
      WHERE
        ${q === ""} OR
        full_name ILIKE ${like} OR
        email ILIKE ${like} OR
        phone ILIKE ${like} OR
        referral_code ILIKE ${like} OR
        referred_by ILIKE ${like} OR
        country ILIKE ${like}
      ORDER BY created_at DESC NULLS LAST
      LIMIT ${pageSize} OFFSET ${offset}
    `) as {
        id: string
        full_name: string | null
        email: string | null
        phone: string | null
        country: string | null
        heard_from: string | null
        referral_code: string | null
        referred_by: string | null
        created_at: string | null
      }[]

    const rawBase = (process.env.NEXT_PUBLIC_SITE_URL || "https://rewaiq.com.ng").trim()

// ensure it starts with http(s)
const base =
  /^https?:\/\//i.test(rawBase) ? rawBase : `https://${rawBase.replace(/^\/+/, "")}`

return NextResponse.json(
  {
    ok: true,
    waitlist: rows,
    total,
    page,
    pageSize,
  },
  { status: 200 }
)
  } catch (err) {
    console.error("Admin waitlist error:", err)
    return NextResponse.json(
      { ok: false, error: "Server error", code: (err as any)?.code || "UNKNOWN" },
      { status: 500 }
    )
  }
}