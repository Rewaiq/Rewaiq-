import { cookies } from "next/headers"
import crypto from "crypto"

const COOKIE_NAME = "rwq_admin"
const MAX_AGE_SECONDS = 60 * 60 * 24 * 7 // 7 days

function base64url(input: Buffer | string) {
  const b = Buffer.isBuffer(input) ? input : Buffer.from(input)
  return b
    .toString("base64")
    .replaceAll("=", "")
    .replaceAll("+", "-")
    .replaceAll("/", "_")
}

function base64urlToBuffer(str: string) {
  const pad = 4 - (str.length % 4 || 4)
  const s = str.replaceAll("-", "+").replaceAll("_", "/") + "=".repeat(pad)
  return Buffer.from(s, "base64")
}

function sign(data: string, secret: string) {
  return base64url(crypto.createHmac("sha256", secret).update(data).digest())
}

export type AdminSession = {
  email: string
  iat: number
  exp: number
}

export function createAdminToken(email: string) {
  const secret = process.env.ADMIN_SECRET
  if (!secret) throw new Error("ADMIN_SECRET is missing")

  const now = Math.floor(Date.now() / 1000)
  const payload: AdminSession = {
    email,
    iat: now,
    exp: now + MAX_AGE_SECONDS,
  }

  const payloadB64 = base64url(JSON.stringify(payload))
  const signature = sign(payloadB64, secret)
  return `${payloadB64}.${signature}`
}

export function verifyAdminToken(token: string | undefined | null): AdminSession | null {
  if (!token) return null
  const secret = process.env.ADMIN_SECRET
  if (!secret) return null

  const parts = token.split(".")
  if (parts.length !== 2) return null

  const [payloadB64, sig] = parts
  const expected = sign(payloadB64, secret)
  if (sig !== expected) return null

  try {
    const payload = JSON.parse(base64urlToBuffer(payloadB64).toString("utf8")) as AdminSession
    const now = Math.floor(Date.now() / 1000)
    if (!payload?.email || !payload?.exp) return null
    if (payload.exp < now) return null
    return payload
  } catch {
    return null
  }
}

export async function setAdminCookie(token: string): Promise<void> {
  const c = (await cookies()) as any
  c.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  })
}

export async function clearAdminCookie(): Promise<void> {
  const c = (await cookies()) as any
  c.set(COOKIE_NAME, "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  })
}

export async function getAdminFromCookies(): Promise<AdminSession | null> {
  const token = ((await cookies()) as any).get(COOKIE_NAME)?.value
  return verifyAdminToken(token)
}

export async function assertAdminOrThrow() {
  const admin = await getAdminFromCookies()
  if (!admin) throw new Error("UNAUTHORIZED")
  return admin
}

export function isAllowedAdminEmail(email: string) {
  const allowed = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean)

  return allowed.length ? allowed.includes(email.toLowerCase()) : false
}