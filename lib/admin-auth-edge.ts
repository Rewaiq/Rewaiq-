const COOKIE_NAME = "rwq_admin"

function b64urlToUint8(str: string) {
  const pad = "=".repeat((4 - (str.length % 4 || 4)) % 4)
  const base64 = (str + pad).replaceAll("-", "+").replaceAll("_", "/")
  const raw = atob(base64)
  const arr = new Uint8Array(raw.length)
  for (let i = 0; i < raw.length; i++) arr[i] = raw.charCodeAt(i)
  return arr
}

function uint8ToB64url(arr: Uint8Array) {
  let s = ""
  for (let i = 0; i < arr.length; i++) s += String.fromCharCode(arr[i])
  return btoa(s).replaceAll("=", "").replaceAll("+", "-").replaceAll("/", "_")
}

async function hmacSHA256(data: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data))
  return uint8ToB64url(new Uint8Array(sig))
}

export async function verifyAdminCookieEdge(cookieValue: string | undefined | null) {
  if (!cookieValue) return false
  const secret = process.env.ADMIN_SECRET
  if (!secret) return false

  const [payloadB64, sig] = cookieValue.split(".")
  if (!payloadB64 || !sig) return false

  const expected = await hmacSHA256(payloadB64, secret)
  if (sig !== expected) return false

  try {
    const payloadStr = new TextDecoder().decode(b64urlToUint8(payloadB64))
    const payload = JSON.parse(payloadStr)
    const now = Math.floor(Date.now() / 1000)
    if (!payload?.email || !payload?.exp) return false
    if (payload.exp < now) return false
    return true
  } catch {
    return false
  }
}

export function getAdminCookieValue(req: Request) {
  const cookie = req.headers.get("cookie") || ""
  const match = cookie.split(";").map((x) => x.trim()).find((x) => x.startsWith(`${COOKIE_NAME}=`))
  return match ? match.split("=").slice(1).join("=") : null
}