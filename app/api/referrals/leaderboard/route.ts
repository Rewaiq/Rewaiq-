import { NextResponse } from "next/server"
import sql from "@/lib/db"

export async function GET() {
  try {
    const rows = await sql`
      select full_name, referral_code, invite_count
      from waitlist_leaderboard
      order by invite_count desc
      limit 10
    `

    return NextResponse.json(rows)
  } catch (err) {
    console.error("Leaderboard error:", err)
    return NextResponse.json(
      { error: "Failed to load leaderboard" },
      { status: 500 }
    )
  }
}