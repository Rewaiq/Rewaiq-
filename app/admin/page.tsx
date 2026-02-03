import Link from "next/link"

export default function AdminHomePage() {
  return (
    <main className="min-h-screen bg-[#070713] text-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Admin</h1>
            <p className="text-white/70 mt-2">Manage Rewaiq waitlist & referrals.</p>
          </div>

          <form action="/api/admin/logout" method="post">
            <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 hover:bg-white/10">
              Logout
            </button>
          </form>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Link
            href="/admin/waitlist"
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition"
          >
            <h2 className="text-xl font-semibold">Waitlist</h2>
            <p className="text-white/70 mt-2 text-sm">Search, paginate, export-ready view of signups.</p>
          </Link>

          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 opacity-70">
            <h2 className="text-xl font-semibold">Leaderboard</h2>
            <p className="text-white/70 mt-2 text-sm">Next: Top 5 + Top 10 referrals page.</p>
          </div>
        </div>
      </div>
    </main>
  )
}