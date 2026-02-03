import { cookies } from "next/headers"
import crypto from "crypto"
import { cookies } from "next/headers"

const COOKIE_NAME = "rewaiq_admin"

/**
 * Create a signed token for admin sessions
 */
export function signAdminToken(payload: { email: string; ts: number }) {
  const secret = process.env.ADMIN_SECRET
  if (!secret) throw new Error("ADMIN_SECRET is missing")

  const data = JSON.stringify(payload)
  const b64 = Buffer.from(data).toString("base64url")

  const sig = crypto.createHmac("sha256", secret).update(b64).digest("base64url")
  return `${b64}.${sig}`
}

/**
 * Verify a signed admin token string
 */
export function verifyAdminToken(token: string | null): { email: string; ts: number } | null {
  if (!token) return null

  const secret = process.env.ADMIN_SECRET
  if (!secret) return null

  const [b64, sig] = token.split(".")
  if (!b64 || !sig) return null

  const expectedSig = crypto.createHmac("sha256", secret).update(b64).digest("base64url")
  if (sig !== expectedSig) return null

  try {
    const json = Buffer.from(b64, "base64url").toString("utf8")
    const payload = JSON.parse(json) as { email: string; ts: number }
    if (!payload?.email || !payload?.ts) return null
    return payload
  } catch {
    return null
  }
}

/**
 * Read token from cookies (server-side)
 */
export function getAdminFromCookie(): { email: string; ts: number } | null {
  const token = cookies().get(COOKIE_NAME)?.value || null
  return verifyAdminToken(token)
}

/**
 * Allowlist check
 */
export function isAllowlistedEmail(email: string) {
  const list = (process.env.ADMIN_ALLOWLIST || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

export async function assertAdminOrThrow() {
  const cookieStore = await cookies()
  const token = cookieStore.get("rewaiq_admin")?.value
  const expected = process.env.ADMIN_TOKEN

  if (!token || !expected || token !== expected) {
    const err = new Error("UNAUTHORIZED")
    throw err
  }
}
