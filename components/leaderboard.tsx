"use client"

import { useEffect, useState } from "react"

type Row = {
  referralCode: string
  fullName: string
  invites: number | string
}

export default function Leaderboard() {
  const [rows, setRows] = useState<Row[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    async function load() {
      try {
        const res = await fetch("/api/referrals/top", { cache: "no-store" })
        const data = await res.json()
        if (!mounted) return

        if (res.ok && data?.top) {
          setRows(
            (data.top as Row[]).map((r) => ({
              ...r,
              invites: Number(r.invites || 0),
            }))
          )
        } else {
          setRows([])
        }
      } catch {
        if (mounted) setRows([])
      } finally {
        if (mounted) setLoading(false)
      }
    }

    load()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="max-w-xl mx-auto mt-10 p-[1px] rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
      <div className="rounded-2xl bg-black/25 border border-white/10 p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-white font-semibold">🏆 Top Referrers</p>
          <p className="text-xs text-white/60">Top 5</p>
        </div>

        {loading ? (
          <p className="text-sm text-white/70 mt-4">Loading leaderboard…</p>
        ) : rows.length === 0 ? (
          <p className="text-sm text-white/70 mt-4">
            No referrals yet. Be the first to invite friends 😄
          </p>
        ) : (
          <div className="mt-4 grid gap-2">
            {rows.map((r, idx) => (
              <div
                key={r.referralCode}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-sm text-white/85">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">
                      {r.fullName || "Anonymous"}
                    </p>
                    <p className="text-xs text-white/60">
                      Code: <span className="text-white/80">{r.referralCode}</span>
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm text-white font-semibold">{Number(r.invites)}</p>
                  <p className="text-xs text-white/60">invites</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-white/60 mt-4">
          Tip: Share your referral link on WhatsApp groups to climb the leaderboard 🚀
        </p>
      </div>
    </div>
  )
}
