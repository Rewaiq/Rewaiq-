import crypto from "crypto"

const SECRET = process.env.ADMIN_SECRET || "dev_secret_change_me"

export function signAdminToken(payload: { email: string; exp: number }) {
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url")
  const sig = crypto.createHmac("sha256", SECRET).update(body).digest("base64url")
  return `${body}.${sig}`
}

export function verifyAdminToken(token: string) {
  const [body, sig] = token.split(".")
  if (!body || !sig) return null

  const expected = crypto.createHmac("sha256", SECRET).update(body).digest("base64url")
  if (expected !== sig) return null

  const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as {
    email: string
    exp: number
  }

  if (!payload?.email || !payload?.exp) return null
  if (Date.now() > payload.exp) return null

  return payload
}

export function getAllowlist() {
  const raw = process.env.ADMIN_ALLOWLIST || ""
  return raw
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean)
}