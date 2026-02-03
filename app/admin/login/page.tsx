"use client"

import { useMemo, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function AdminLoginPage() {
  const router = useRouter()
  const params = useSearchParams()
  const next = useMemo(() => params.get("next") || "/admin", [params])

  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    setLoading(true)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Login failed")
      router.push(next)
    } catch (err: any) {
      setMsg(err?.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#070713] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p className="text-white/70 text-sm mt-2">Enter admin password to continue.</p>

        <form onSubmit={submit} className="mt-6 grid gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full rounded-full bg-white text-gray-900 px-5 py-3 border-none outline-none"
            required
          />

          <button
            disabled={loading}
            className="rounded-full py-3 font-semibold bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] hover:brightness-110 disabled:opacity-60"
            type="submit"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {msg ? <p className="text-sm text-red-200">{msg}</p> : null}
        </form>
      </div>
    </main>
  )
}