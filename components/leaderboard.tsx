"use client"

import { useEffect, useState } from "react"

type Leader = {
  code: string
  name: string | null
  invites: number
}

export default function Leaderboard() {
  const [leaders, setLeaders] = useState<Leader[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/referrals/top", { cache: "no-store" })
        const data = await res.json()
        setLeaders(Array.isArray(data?.leaders) ? data.leaders : [])
      } catch {
        setLeaders([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <div className="max-w-xl mx-auto mt-10 p-[1px] rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
      <div className="rounded-2xl bg-black/25 border border-white/10 p-5 text-left">
        <h3 className="text-white font-semibold mb-3">🏆 Top Referrals</h3>

        {loading ? (
          <p className="text-white/70 text-sm">Loading leaderboard…</p>
        ) : leaders.length === 0 ? (
          <p className="text-white/70 text-sm">No leaderboard data yet.</p>
        ) : (
          <ol className="space-y-2">
            {leaders.map((l, idx) => (
              <li
                key={l.code}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2"
              >
                <div className="flex items-center gap-3">
                  <span className="text-white/70 text-sm w-6">{idx + 1}.</span>
                  <div>
                    <p className="text-white text-sm font-medium">
                      {l.name || "Anonymous"}
                    </p>
                    <p className="text-white/60 text-xs">Code: {l.code}</p>
                  </div>
                </div>
                <span className="text-white font-semibold text-sm">{l.invites}</span>
              </li>
            ))}
          </ol>
        )}

        <p className="text-white/55 text-xs mt-3">
          Tip: Share your referral link to climb the leaderboard.
        </p>
      </div>
    </div>
  )
}