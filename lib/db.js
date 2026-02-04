import postgres from "postgres"

let _sql = null

function getDatabaseUrl() {
  const url = process.env.DATABASE_URL
  // Don’t throw at import time. Only throw when an API route tries to use DB.
  if (!url || typeof url !== "string" || !url.trim()) return null
  return url.trim()
}

export default function sql(strings, ...values) {
  const dbUrl = getDatabaseUrl()
  if (!dbUrl) {
    throw new Error("DATABASE_URL is missing. Add it in Netlify env vars and redeploy.")
  }

  if (!_sql) {
    _sql = postgres(dbUrl, { ssl: "require" })
  }

  // tagged-template passthrough
  return _sql(strings, ...values)
}
