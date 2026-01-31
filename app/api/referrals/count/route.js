import { NextResponse } from "next/server"
import sql from "@/lib/db"

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const code = (searchParams.get("code") || "").trim().toUpperCase()
    if (!code) return NextResponse.json({ error: "code is required" }, { status: 400 })

    const rows = await sql`
      select count(*)::int as count
      from public.waitlist
      where referred_by = ${code}
    `
    return NextResponse.json({ ok: true, code, count: rows[0].count }, { status: 200 })
  } catch (err) {
    console.error("Referral count error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}