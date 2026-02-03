export const dynamic = "force-dynamic"

async function getTop5() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/referrals/top`, { cache: "no-store" })
  return res.json()
}

async function getTop10() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/leaderboard`, { cache: "no-store" })
  return res.json()
}

export default async function AdminLeaderboardPage() {
  const [top5, top10] = await Promise.all([getTop5(), getTop10()])

  return (
    <main>
      <h1 className="text-3xl font-bold">Leaderboard</h1>
      <p className="text-white/70 mt-2">Performance view for referrals & invites.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Top 5 Referrers</h2>
          <div className="mt-4 space-y-3">
            {(top5?.top || []).map((u: any, i: number) => (
              <div key={u.referralCode} className="flex items-center justify-between rounded-2xl bg-black/20 p-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{u.fullName || "Unknown"}</p>
                    <p className="text-xs text-white/60">{u.referralCode}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold">{u.invites} invites</p>
              </div>
            ))}
            {(!top5?.top || top5.top.length === 0) && <p className="text-white/60 text-sm mt-4">No referrals yet.</p>}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Top 10 Leaderboard</h2>
          <div className="mt-4 space-y-3">
            {(Array.isArray(top10) ? top10 : []).map((u: any, i: number) => (
              <div key={u.referral_code || i} className="flex items-center justify-between rounded-2xl bg-black/20 p-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{u.full_name || "Unknown"}</p>
                    <p className="text-xs text-white/60">{u.referral_code}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold">{u.invite_count} invites</p>
              </div>
            ))}
            {(!Array.isArray(top10) || top10.length === 0) && <p className="text-white/60 text-sm mt-4">No data.</p>}
          </div>
        </section>
      </div>
    </main>
  )
}