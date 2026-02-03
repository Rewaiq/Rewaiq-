import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { password } = await req.json()

    const adminPassword = process.env.ADMIN_PASSWORD
    const adminToken = process.env.ADMIN_TOKEN

    if (!adminPassword || !adminToken) {
      return NextResponse.json(
        { ok: false, error: "Admin env vars missing" },
        { status: 500 }
      )
    }

    if (!password || password !== adminPassword) {
      return NextResponse.json({ ok: false, error: "Invalid password" }, { status: 401 })
    }

    const res = NextResponse.json({ ok: true })

    // HttpOnly cookie for admin auth
    res.cookies.set("rewaiq_admin", adminToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return res
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request" }, { status: 400 })
  }
}