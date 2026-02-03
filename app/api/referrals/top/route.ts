import { NextResponse } from "next/server"
import sql from "@/lib/db"

export const dynamic = "force-dynamic" // ✅ disables static caching
export const revalidate = 0

export async function GET() {
  try {
    const rows = await sql`
      SELECT
        w.referral_code AS "referralCode",
        COALESCE(NULLIF(w.full_name, ''), 'Anonymous') AS "fullName",
        COUNT(c.id)::int AS "invites"
      FROM public.waitlist w
      JOIN public.waitlist c
        ON c.referred_by = w.referral_code
      WHERE w.referral_code IS NOT NULL
        AND w.referral_code <> ''
      GROUP BY w.referral_code, w.full_name
      ORDER BY COUNT(c.id) DESC, MIN(w.created_at) ASC
      LIMIT 5;
    `

    return NextResponse.json(
      { ok: true, top: rows },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    )
  } catch (err: any) {
    console.error("Top referrals error:", err)
    return NextResponse.json(
      { ok: false, error: "Server error", code: err?.code || "UNKNOWN" },
      { status: 500 }
    )
  }
}