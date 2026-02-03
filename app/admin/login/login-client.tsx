"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginClient() {
  const router = useRouter()
  const sp = useSearchParams()
  const next = sp.get("next") || "/admin"

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Login failed")

      router.push(next)
      router.refresh()
    } catch (err: any) {
      setError(err.message || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="mt-6 grid gap-3">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Team email"
        className="w-full rounded-full bg-white text-gray-900 px-5 py-3"
        required
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Admin password"
        type="password"
        className="w-full rounded-full bg-white text-gray-900 px-5 py-3"
        required
      />

      <button
        disabled={loading}
        className="rounded-full py-3 font-semibold bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] hover:brightness-110"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>

      {error ? <p className="text-sm text-red-300">{error}</p> : null}
    </form>
  )
}