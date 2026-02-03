"use client"

import { useEffect, useMemo, useState } from "react"

type Row = {
  id: string
  full_name: string | null
  email: string | null
  phone: string | null
  country: string | null
  heard_from: string | null
  referral_code: string | null
  referred_by: string | null
  created_at: string | null
}

type ApiResp = {
  ok: boolean
  page: number
  pageSize: number
  total: number
  pages: number
  rows: Row[]
  error?: string
}

export default function AdminWaitlistPage() {
  const [q, setQ] = useState("")
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ApiResp | null>(null)
  const [err, setErr] = useState<string | null>(null)

  const canPrev = useMemo(() => page > 1, [page])
  const canNext = useMemo(() => (data ? page < data.pages : false), [page, data])

  const load = async () => {
    setLoading(true)
    setErr(null)
    try {
      const url = `/api/admin/waitlist?q=${encodeURIComponent(q)}&page=${page}&pageSize=${pageSize}`
      const res = await fetch(url, { cache: "no-store" })
      const json = (await res.json()) as ApiResp
      if (!res.ok || !json.ok) throw new Error(json.error || "Failed to load")
      setData(json)
    } catch (e: any) {
      setErr(e?.message || "Failed to load")
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  // load on changes (simple debounce)
  useEffect(() => {
    const t = setTimeout(() => load(), 250)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, page, pageSize])

  return (
    <main className="min-h-screen bg-[#070713] text-white px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">Waitlist</h1>
            <p className="text-white/70 mt-2 text-sm">
              Search by name, email, phone, referral code, referred_by, or country.
            </p>
          </div>

          <a
            href="/admin"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-2 hover:bg-white/10"
          >
            Back to Admin
          </a>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <input
            value={q}
            onChange={(e) => {
              setPage(1)
              setQ(e.target.value)
            }}
            placeholder="Search…"
            className="rounded-full bg-white text-gray-900 px-5 py-3 border-none outline-none md:col-span-2"
          />

          <div className="flex gap-2 items-center justify-end">
            <select
              value={pageSize}
              onChange={(e) => {
                setPage(1)
                setPageSize(Number(e.target.value))
              }}
              className="rounded-full bg-white text-gray-900 px-4 py-3 border-none outline-none"
            >
              {[10, 20, 50, 100].map((n) => (
                <option key={n} value={n}>
                  {n} / page
                </option>
              ))}
            </select>

            <button
              onClick={() => load()}
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 hover:bg-white/10"
            >
              Refresh
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-white/70">
          <div>
            {loading ? "Loading…" : data ? `${data.total} total` : "—"}
            {data ? ` • Page ${data.page} of ${data.pages}` : ""}
          </div>

          <div className="flex gap-2">
            <button
              disabled={!canPrev || loading}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 disabled:opacity-40"
            >
              Prev
            </button>
            <button
              disabled={!canNext || loading}
              onClick={() => setPage((p) => p + 1)}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>

        {err ? (
          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-red-100">
            {err}
          </div>
        ) : null}

        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full text-left text-sm">
            <thead className="text-white/80">
              <tr className="border-b border-white/10">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Country</th>
                <th className="p-3">Heard From</th>
                <th className="p-3">Referral Code</th>
                <th className="p-3">Referred By</th>
                <th className="p-3">Created</th>
              </tr>
            </thead>

            <tbody className="text-white/75">
              {(data?.rows || []).map((r) => (
                <tr key={r.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-3 whitespace-nowrap">{r.full_name || "—"}</td>
                  <td className="p-3 whitespace-nowrap">{r.email || "—"}</td>
                  <td className="p-3 whitespace-nowrap">{r.phone || "—"}</td>
                  <td className="p-3 whitespace-nowrap">{r.country || "—"}</td>
                  <td className="p-3 whitespace-nowrap">{r.heard_from || "—"}</td>
                  <td className="p-3 whitespace-nowrap font-mono">{r.referral_code || "—"}</td>
                  <td className="p-3 whitespace-nowrap font-mono">{r.referred_by || "—"}</td>
                  <td className="p-3 whitespace-nowrap">
                    {r.created_at ? new Date(r.created_at).toLocaleString() : "—"}
                  </td>
                </tr>
              ))}

              {!loading && data && data.rows.length === 0 ? (
                <tr>
                  <td className="p-6 text-center text-white/60" colSpan={8}>
                    No results.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}