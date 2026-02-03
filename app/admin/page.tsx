import Link from "next/link"

export default function AdminHome() {
  return (
    <main>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Admin</h1>

        <form action="/api/admin/logout" method="post">
          <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm hover:bg-white/10">
            Logout
          </button>
        </form>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link
          href="/admin/leaderboard"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
        >
          <h2 className="text-lg font-semibold">Leaderboard</h2>
          <p className="text-white/70 text-sm mt-1">Top 5 referrers + Top 10 leaderboard.</p>
        </Link>
      </div>
    </main>
  )
}