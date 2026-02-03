import { NextResponse } from "next/server"
import { assertAdminOrThrow } from "@/lib/admin-auth"
import sql from "@/lib/db"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    // ✅ block non-admins
    assertAdminOrThrow()

    // export all waitlist rows (edit columns as you like)
    const rows = await sql`
      SELECT
        id,
        full_name,
        email,
        phone,
        country,
        heard_from,
        referred_by,
        referral_code,
        consent,
        roles,
        created_at
      FROM public.waitlist
      ORDER BY created_at DESC
      LIMIT 5000;
    `

    return NextResponse.json({ ok: true, rows }, { status: 200 })
  } catch (err: any) {
    const msg = err?.message || "Server error"

    if (msg === "UNAUTHORIZED") {
      return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 })
    }
    if (msg === "FORBIDDEN") {
      return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 })
    }

    console.error("Admin export error:", err)
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 })
  }
}