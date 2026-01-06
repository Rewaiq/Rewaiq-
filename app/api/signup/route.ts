import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // In production, you'd save this to a database and send an email notification
    console.log("[v0] New signup:", email)

    // Send notification email (you can integrate with Resend, SendGrid, etc.)
    // For now, just log it
    console.log(`[v0] Notification: New project viewer signup - ${email}`)

    return NextResponse.json({ success: true, message: "Signup successful" })
  } catch (error) {
    console.error("[v0] Signup error:", error)
    return NextResponse.json({ error: "Signup failed" }, { status: 500 })
  }
}
