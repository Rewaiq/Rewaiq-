import { NextResponse } from "next/server"
import { getAllowlist, signAdminToken } from "@/lib/admin-auth"

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD
    if (!ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, error: "ADMIN_PASSWORD not set" }, { status: 500 })
    }

    const allowlist = getAllowlist()
    const cleanEmail = String(email || "").trim().toLowerCase()

    if (!cleanEmail) return NextResponse.json({ ok: false, error: "Email required" }, { status: 400 })
    if (allowlist.length && !allowlist.includes(cleanEmail)) {
      return NextResponse.json({ ok: false, error: "Not authorized" }, { status: 403 })
    }
    if (String(password || "") !== ADMIN_PASSWORD) {
      return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 })
    }

    const token = signAdminToken({
      email: cleanEmail,
      exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
    })

    const res = NextResponse.json({ ok: true })
    res.cookies.set("rewaiq_admin", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 })
  }
}