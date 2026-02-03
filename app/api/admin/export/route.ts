import { NextResponse } from "next/server"
import { assertAdminOrThrow } from "@/lib/admin-auth"
import sql from "@/lib/db"

export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET() {
  try {
    assertAdminOrThrow()

    const rows = await sql`
      SELECT
        id,
        created_at,
        full_name,
        email,
        phone,
        country,
        heard_from,
        roles,
        referral_code,
        referred_by
      FROM public.waitlist
      ORDER BY created_at DESC
      LIMIT 5000;
    `

    const header = [
      "id",
      "created_at",
      "full_name",
      "email",
      "phone",
      "country",
      "heard_from",
      "roles",
      "referral_code",
      "referred_by",
    ]

    const csv = [
      header.join(","),
      ...rows.map((r: any) =>
        header
          .map((k) => {
            const v = r[k]
            const s = v === null || v === undefined ? "" : String(v)
            const escaped = s.replaceAll('"', '""')
            return `"${escaped}"`
          })
          .join(",")
      ),
    ].join("\n")

    return new NextResponse(csv, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="rewaiq-waitlist.csv"`,
        "Cache-Control": "no-store",
      },
    })
  } catch (err: any) {
    const code = err?.message === "UNAUTHORIZED" ? 401 : 500
    return NextResponse.json({ ok: false, error: code === 401 ? "Unauthorized" : "Server error" }, { status: code })
  }
}