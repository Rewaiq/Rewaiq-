import { cookies } from "next/headers"
import crypto from "crypto"

export const ADMIN_COOKIE_NAME = "rewaiq_admin"

/**
 * Read and normalize allowlist from env
 */
export function getAllowlist(): string[] {
  return (process.env.ADMIN_ALLOWLIST || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}

/**
 * Allowlist check
 */
export function isAllowlistedEmail(email: string) {
  const list = getAllowlist()
  return list.includes(email.trim().toLowerCase())
}

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
export async function getAdminFromCookie(): Promise<{ email: string; ts: number } | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value || null
  return verifyAdminToken(token)
}

/**
 * Use this inside any /api/admin/* route.
 */
export async function assertAdminOrThrow() {
  const admin = await getAdminFromCookie()
  if (!admin) throw new Error("UNAUTHORIZED")

  if (!isAllowlistedEmail(admin.email)) throw new Error("FORBIDDEN")

  return admin
}