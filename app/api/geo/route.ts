import { NextResponse } from "next/server"

const AFRICA_ISO = new Set([
  "NG","GH","KE","ZA","EG","TZ","UG","RW","SN","CI","CM","MA","TN","DZ"
])

const ISO_TO_NAME: Record<string,string> = {
  NG:"Nigeria",
  GH:"Ghana",
  KE:"Kenya",
  ZA:"South Africa",
  EG:"Egypt",
  TZ:"Tanzania",
  UG:"Uganda",
  RW:"Rwanda",
}

export async function GET(req: Request) {
  const headers = new Headers(req.headers)

  const iso =
    headers.get("x-vercel-ip-country") ||
    headers.get("cf-ipcountry") ||
    ""

  const code = iso.toUpperCase().trim()

  const country = ISO_TO_NAME[code] || null
  const isAfrica = AFRICA_ISO.has(code)

  return NextResponse.json({
    iso2: code || null,
    country,
    isAfrica
  })
}