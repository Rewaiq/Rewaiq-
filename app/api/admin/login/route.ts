import { NextResponse } from "next/server"
import { isAllowlistedEmail, signAdminToken } from "@/lib/admin-auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 })
    }

    // Check allowlist
    if (!isAllowlistedEmail(email)) {
      return NextResponse.json({ error: "Not authorized" }, { status: 403 })
    }

    // Check password
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }

    // Generate admin token
    const token = signAdminToken(email)

    return NextResponse.json({ ok: true, token })
  } catch (err) {
    console.error("Admin login error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}