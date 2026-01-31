import { NextResponse } from "next/server"
import sql from "@/lib/db"

export async function GET() {
  try {
    // Top 10 inviters = people whose referral_code was used by others (referred_by)
    const rows = await sql`
      SELECT
        w.referral_code AS code,
        w.full_name AS name,
        COALESCE(COUNT(r.id), 0)::int AS invites
      FROM public.waitlist w
      LEFT JOIN public.waitlist r
        ON r.referred_by = w.referral_code
      WHERE w.referral_code IS NOT NULL
      GROUP BY w.referral_code, w.full_name
      ORDER BY invites DESC, MAX(w.created_at) DESC
      LIMIT 10
    `

    return NextResponse.json({ leaders: rows }, { status: 200 })
  } catch (err) {
    console.error("Top referrals error:", err)
    return NextResponse.json({ leaders: [], error: "Server error" }, { status: 500 })
  }
}