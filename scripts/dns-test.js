import dns from "node:dns/promises"

async function run() {
  const host = "db.popydcbxkcgrhedfsjns.supabase.co"
  try {
    console.log("resolve4:", await dns.resolve4(host))
  } catch (e) {
    console.log("resolve4 failed:", e.code, e.message)
  }

  try {
    console.log("resolve6:", await dns.resolve6(host))
  } catch (e) {
    console.log("resolve6 failed:", e.code, e.message)
  }
}

run()