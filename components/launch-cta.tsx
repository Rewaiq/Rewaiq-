"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useMemo, useState } from "react"

const ROLE_OPTIONS = [
  { id: "user", label: "User (Earn)" },
  { id: "creator", label: "Content Creator" },
  { id: "artist", label: "Artist / Music" },
  { id: "brand", label: "Business / Brand" },
]

export function LaunchCTA() {
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [roles, setRoles] = useState<string[]>(["user"])
  const [heardFrom, setHeardFrom] = useState("")
  const [consent, setConsent] = useState(false)

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const [referralCode, setReferralCode] = useState<string | null>(null)
  const [referredBy, setReferredBy] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get("ref")
    if (ref) setReferredBy(ref.toUpperCase())
  }, [])

  const referralLink = useMemo(() => {
    if (!referralCode) return null
    return `https://rewaiq.com.ng/?ref=${referralCode}`
  }, [referralCode])

  const toggleRole = (id: string) => {
    setRoles((prev) => {
      const exists = prev.includes(id)
      let next = exists ? prev.filter((r) => r !== id) : [...prev, id]
      if (next.length === 0) next = ["user"]
      return next
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          fullName,
          roles,
          heardFrom,
          consent,
          referredBy,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        setMessage(data?.message || "Something went wrong.")
        setSubmitted(false)
        setLoading(false)
        return
      }

      setReferralCode(data.referralCode)
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => setSubmitted(false), 2500)
    } catch {
      setMessage("Network error. Try again.")
      setLoading(false)
    }
  }

  const copyLink = async () => {
    if (!referralLink) return
    await navigator.clipboard.writeText(referralLink)
    setMessage("Referral link copied ✅")
    setTimeout(() => setMessage(null), 2000)
  }

  return (
    <section id="waitlist" className="relative py-16 md:py-20 px-6 bg-[#070713] overflow-hidden">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#4F7FFF]/20 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,127,255,0.12),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.14),transparent_40%)]" />

      <div className="container mx-auto max-w-5xl relative">
        {/* Premium card wrapper */}
        <div className="relative rounded-[2.8rem] p-[1px] bg-gradient-to-r from-[#4F7FFF]/60 via-[#8B5CF6]/40 to-[#22d3ee]/40">
          <div className="relative rounded-[2.75rem] bg-gradient-to-b from-white/8 to-white/5 backdrop-blur-xl border border-white/10 px-6 sm:px-10 py-12 md:py-16 text-center overflow-hidden">
            {/* shimmer line */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" />

            {/* top badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 text-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-[#4F7FFF] shadow-[0_0_14px_rgba(79,127,255,0.7)]" />
              Waitlist is live • Discover • Engage • Earn
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              Join the Rewaiq Waitlist
            </h2>

            <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
              Be first to access verified tasks, real engagement campaigns, and rewards built for Africa’s creators,
              students, users, and brands.
              {referredBy ? (
                <span className="block text-sm mt-2 text-white/70">
                  Invited with code: <b className="text-white">{referredBy}</b>
                </span>
              ) : null}
            </p>

            {/* Roles */}
            <div className="max-w-2xl mx-auto mb-6">
              <p className="text-white/75 text-sm mb-3">I’m joining as:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {ROLE_OPTIONS.map((r) => {
                  const active = roles.includes(r.id)
                  return (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => toggleRole(r.id)}
                      className={[
                        "px-4 py-2 rounded-full text-sm border transition-all duration-200",
                        active
                          ? "bg-white text-[#3b5bdb] border-white shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_10px_30px_rgba(79,127,255,0.25)]"
                          : "bg-white/5 text-white border-white/15 hover:bg-white/10 hover:border-white/25",
                      ].join(" ")}
                    >
                      {r.label}
                    </button>
                  )
                })}
              </div>

              <p className="text-xs text-white/55 mt-2">
                You can select more than one (e.g., Artist + Creator).
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-3">
              <Input
                placeholder="Full name (optional)"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-white text-gray-900 rounded-full px-6 py-6 text-base border-none focus-visible:ring-2 focus-visible:ring-[#4F7FFF]"
              />

              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 rounded-full px-6 py-6 text-base border-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              />

              <Input
                placeholder="How did you hear about us? (WhatsApp, IG, Friend...)"
                value={heardFrom}
                onChange={(e) => setHeardFrom(e.target.value)}
                className="bg-white text-gray-900 rounded-full px-6 py-6 text-base border-none focus-visible:ring-2 focus-visible:ring-[#22d3ee]"
              />

              {/* Consent */}
              <label className="flex items-start gap-2 text-left text-white/85 text-sm px-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 accent-white"
                />
                <span>
                  I agree to receive updates & newsletters from Rewaiq.{" "}
                  <span className="text-white/60">(Unsubscribe anytime.)</span>
                </span>
              </label>

              <Button
                type="submit"
                disabled={loading}
                className={[
                  "rounded-full py-6 text-lg font-semibold transition-all",
                  "bg-gradient-to-r from-[#4F7FFF] via-[#6B8FFF] to-[#8B5CF6]",
                  "hover:brightness-110 active:scale-[0.99]",
                  "shadow-[0_12px_40px_rgba(79,127,255,0.25)]",
                ].join(" ")}
              >
                {loading ? "Joining..." : submitted ? "✓ Joined!" : "Join Waitlist"}
              </Button>

              <p className="text-sm text-white/80 mt-1">
                🎁 Invite <b className="text-white">5 friends</b> to unlock a Founding Member badge + bonuses.
              </p>

              {message ? <p className="text-sm text-white mt-2">{message}</p> : null}
            </form>

            {/* Referral card */}
            {referralLink ? (
              <div className="max-w-xl mx-auto mt-8 p-[1px] rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                <div className="rounded-2xl bg-black/25 border border-white/10 p-5">
                  <p className="text-white font-semibold mb-2">Your referral link</p>
                  <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                    <div className="w-full bg-white/10 text-white/90 rounded-full px-4 py-3 text-sm break-all border border-white/10">
                      {referralLink}
                    </div>
                    <Button
                      type="button"
                      onClick={copyLink}
                      className="rounded-full bg-white text-[#3b5bdb] hover:bg-white/90"
                    >
                      Copy
                    </Button>
                  </div>
                  <p className="text-xs text-white/65 mt-2">
                    Share on WhatsApp/IG. We track invites automatically.
                  </p>
                </div>
              </div>
            ) : null}

            {/* Social follow row (optional) */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <p className="text-xs text-white/60">Follow us & watch updates:</p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <a
                  href="https://www.instagram.com/teamrewaiq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
                >
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/teamrewaiq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
                >
                  Facebook
                </a>
                <a
                  href="https://x.com/rewaiq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
                >
                  X
                </a>
                <a
                  href="https://www.linkedin.com/company/rewaiq/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Privacy links (optional) */}
            <div className="mt-8 text-xs text-white/55">
              By joining, you agree to our{" "}
              <a href="/privacy" className="text-white/75 hover:text-white underline underline-offset-4">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-white/75 hover:text-white underline underline-offset-4">
                Terms
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
