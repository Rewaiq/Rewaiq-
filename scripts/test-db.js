import "dotenv/config"
import postgres from "postgres"

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error("DATABASE_URL is missing. Put it in your .env file in the project root.")
}

const sql = postgres(connectionString, { ssl: "require" })

async function test() {
  const result = await sql`select now()`
  console.log("✅ Connected. Server time:", result[0].now)
  await sql.end()
}

test().catch((err) => {
  console.error("❌ DB connection failed:", err)
  process.exit(1)
})