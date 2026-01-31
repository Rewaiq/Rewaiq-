import postgres from "postgres"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing. Add it to .env and restart the server.")
}

const sql = postgres(process.env.DATABASE_URL, {
  ssl: "require",
})

export default sql