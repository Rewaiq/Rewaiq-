"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useMemo, useState } from "react"
import Leaderboard from "@/components/leaderboard"
import { AFRICAN_COUNTRIES } from "@/lib/africa"

const ROLE_OPTIONS = [
  { id: "user", label: "User (Earn)" },
  { id: "creator", label: "Content Creator" },
  { id: "artist", label: "Artist / Music" },
  { id: "brand", label: "Business / Brand" },
]

const HEARD_FROM_OPTIONS = [
  "WhatsApp",
  "Instagram",
  "Facebook",
  "TikTok",
  "X (Twitter)",
  "LinkedIn",
  "Friend / Referral",
  "Event",
  "Google Search",
  "Other",
]

export function LaunchCTA() {
  // ✅ GEO states (as you requested)
  const [isAfricaUser, setIsAfricaUser] = useState<boolean | null>(null)
  const [geoDetectedCountry, setGeoDetectedCountry] = useState<string | null>(null)
  const [overrideCountry, setOverrideCountry] = useState(false)

  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [country, setCountry] = useState<string>(AFRICAN_COUNTRIES[0] || "Nigeria")
  const [heardFrom, setHeardFrom] = useState("WhatsApp")
  const [consent, setConsent] = useState(false)

  const [roles, setRoles] = useState<string[]>(["user"])

  // newsletter-only toggle
  const [outsideAfrica, setOutsideAfrica] = useState(false)

  // referral input + url
  const [manualReferral, setManualReferral] = useState("")
  const [referredByFromUrl, setReferredByFromUrl] = useState<string | null>(null)

  // post-submit
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  const [referralCode, setReferralCode] = useState<string | null>(null)
  const [inviteCount, setInviteCount] = useState<number>(0)

  // read ?ref=
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const ref = params.get("ref")
    if (ref) setReferredByFromUrl(ref.trim().toUpperCase())
  }, [])

  // ✅ GEO detection (best-effort) using /api/geo
  useEffect(() => {
    async function detect() {
      try {
        const res = await fetch("/api/geo", { cache: "no-store" })
        const data = await res.json()

        if (data?.country) {
          setGeoDetectedCountry(data.country)
          // only auto-set if user hasn't overridden
          setCountry((prev) => (overrideCountry ? prev : data.country))
        }

        setIsAfricaUser(Boolean(data?.isAfrica))
      } catch {
        setIsAfricaUser(true) // NEVER block user
      }
    }

    detect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [overrideCountry])

  // if outsideAfrica toggled, lock country
  useEffect(() => {
    if (outsideAfrica) {
      setCountry("Outside Africa")
    } else {
      // if we have detected and user didn't override, use it
      if (geoDetectedCountry && !overrideCountry) setCountry(geoDetectedCountry)
      else if (!AFRICAN_COUNTRIES.includes(country as any)) setCountry("Nigeria")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outsideAfrica])

  const referredByFinal = useMemo(() => {
    const m = manualReferral.trim().toUpperCase()
    return m || referredByFromUrl || null
  }, [manualReferral, referredByFromUrl])

  const referralLink = useMemo(() => {
    if (!referralCode) return null
    return `https://rewaiq.com.ng/?ref=${referralCode}`
  }, [referralCode])

  const copyLink = async () => {
    if (!referralLink) return
    try {
      await navigator.clipboard.writeText(referralLink)
      setMessage("Referral link copied ✅")
      setTimeout(() => setMessage(null), 3000)
    } catch {
      window.prompt("Copy this link:", referralLink)
    }
  }

  const toggleRole = (id: string) => {
    setRoles((prev) => {
      const exists = prev.includes(id)
      let next = exists ? prev.filter((r) => r !== id) : [...prev, id]
      if (next.length === 0) next = ["user"]
      return next
    })
  }

  const fetchInviteCount = async (code: string) => {
    try {
      const res = await fetch(`/api/referrals/count?code=${encodeURIComponent(code)}`, { cache: "no-store" })
      const data = await res.json()
      if (res.ok) setInviteCount(Number(data.count || 0))
    } catch {
      // ignore
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    // required checks (client-side)
    if (!fullName.trim()) {
      setLoading(false)
      setMessage("Full name is required.")
      return
    }
    if (!phone.trim()) {
      setLoading(false)
      setMessage("Phone number is required.")
      return
    }
    if (!consent) {
      setLoading(false)
      setMessage("Please tick consent to receive updates.")
      return
    }

    // Africa-only unless outsideAfrica toggle
    if (!outsideAfrica && !AFRICAN_COUNTRIES.includes(country as any)) {
      setLoading(false)
      setMessage("For now, waitlist is limited to African countries.")
      return
    }

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          fullName,
          phone,
          country: outsideAfrica ? "Outside Africa" : country,
          heardFrom,
          consent: true,
          roles,
          referredBy: referredByFinal,
          outsideAfrica,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || "Failed")

      setSubmitted(true)
      setReferralCode(data.referralCode || null)

      // gamification count
      if (data.referralCode) fetchInviteCount(data.referralCode)

      setTimeout(() => setSubmitted(false), 2500)
    } catch (err: any) {
      setMessage(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const progress = Math.min(inviteCount, 5)
  const remaining = Math.max(5 - inviteCount, 0)

  return (
    <section id="waitlist" className="relative py-16 md:py-20 px-6 bg-[#070713] overflow-hidden">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#4F7FFF]/20 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-[#8B5CF6]/20 blur-[110px]" />

      <div className="container mx-auto max-w-5xl relative">
        <div className="relative rounded-[2.8rem] p-[1px] bg-gradient-to-r from-[#4F7FFF]/60 via-[#8B5CF6]/40 to-[#22d3ee]/40">
          <div className="relative rounded-[2.75rem] bg-gradient-to-b from-white/8 to-white/5 backdrop-blur-xl border border-white/10 px-6 sm:px-10 py-12 md:py-16 text-center overflow-hidden">

            {/* ✅ Smart Banner */}
            {isAfricaUser === false && (
              <div className="mb-6 p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30 text-yellow-200 text-sm">
                🌍 Looks like you’re outside Africa.
                <br /><br />
                We’re expanding globally — join our early expansion list and we’ll notify you once Rewaiq launches in your region.
              </div>
            )}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-white/80 text-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-[#4F7FFF] shadow-[0_0_14px_rgba(79,127,255,0.7)]" />
              Waitlist is live • Discover • Engage • Earn
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join the Rewaiq Waitlist</h2>

            <p className="text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
              Get early access to verified tasks, real engagement campaigns, and rewards built for Africa’s creators,
              students, users, brands & artists.
              {referredByFromUrl ? (
                <span className="block text-sm mt-2 text-white/70">
                  You opened a referral link: <b className="text-white">{referredByFromUrl}</b>
                </span>
              ) : null}
            </p>

            {/* roles */}
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
              <p className="text-xs text-white/55 mt-2">You can select more than one.</p>
            </div>

            {/* Outside Africa toggle */}
            <div className="max-w-xl mx-auto mb-4 text-left">
              <label className="flex items-start gap-2 text-left text-white/85 text-sm px-2">
                <input
                  type="checkbox"
                  checked={outsideAfrica}
                  onChange={(e) => setOutsideAfrica(e.target.checked)}
                  className="mt-1 accent-white"
                />
                <span>
                  I’m outside Africa — send me newsletter updates only (we’ll notify you when we expand).
                </span>
              </label>
            </div>

            {/* country override toggle */}
            {!outsideAfrica && (
              <div className="max-w-xl mx-auto mb-4 text-left">
                <label className="flex items-start gap-2 text-left text-white/75 text-xs px-2">
                  <input
                    type="checkbox"
                    checked={overrideCountry}
                    onChange={(e) => setOverrideCountry(e.target.checked)}
                    className="mt-1 accent-white"
                  />
                  <span>
                    My country is not correct (detected: <b className="text-white">{geoDetectedCountry || "unknown"}</b>) — let me choose manually.
                  </span>
                </label>
              </div>
            )}

            {/* form */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-3">
              <Input
                placeholder="Full name *"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="bg-white text-gray-900 rounded-full px-6 py-6 text-base border-none"
              />

              <Input
                placeholder="Phone number (WhatsApp) *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-white text-gray-900 rounded-full px-6 py-6 text-base border-none"
              />

              {/* Africa-only dropdown */}
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required={!outsideAfrica}
                disabled={outsideAfrica || (!overrideCountry && Boolean(geoDetectedCountry))}
                className={[
                  "bg-white text-gray-900 rounded-full px-6 py-4 text-base border-none w-full",
                  outsideAfrica ? "opacity-60 cursor-not-allowed" : "",
                ].join(" ")}
              >
                {!outsideAfrica ? (
                  AFRICAN_COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))
                ) : (
                  <option value="Outside Africa">Outside Africa</option>
                )}
              </select>

              {/* heard_from dropdown */}
              <select
                value={heardFrom}
                onChange={(e) => setHeardFrom(e.target.value)}
                required
                className="bg-white text-gray-900 rounded-full px-6 py-4 text-base border-none"
              >
                {HEARD_FROM_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <Input
                type="email"
                placeholder="Email address *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 rounded-full px-6 py-6 text-base border-none"
              />

              {/* referral input */}
              <Input
                placeholder="Referral code (optional)"
                value={manualReferral}
                onChange={(e) => setManualReferral(e.target.value)}
                className="bg-white text-gray-900 rounded-full px-6 py-6 text-base border-none"
              />

              <label className="flex items-start gap-2 text-left text-white/85 text-sm px-2">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 accent-white"
                />
                <span>
                  I agree to receive updates & newsletters from Rewaiq. <span className="text-white/60">(Required)</span>
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

              {message ? <p className="text-sm text-white mt-2">{message}</p> : null}
            </form>

            {/* referral + gamification */}
            {referralLink ? (
              <div className="max-w-xl mx-auto mt-8 p-[1px] rounded-2xl bg-gradient-to-r from-white/20 to-white/10">
                <div className="rounded-2xl bg-black/25 border border-white/10 p-5 text-left">
                  <p className="text-white font-semibold mb-2">Your referral link</p>

                  <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                    <div className="w-full bg-white/10 text-white/90 rounded-full px-4 py-3 text-sm break-all border border-white/10">
                      {referralLink}
                    </div>
                    <Button type="button" onClick={copyLink} className="rounded-full bg-white text-[#3b5bdb] hover:bg-white/90">
                      Copy
                    </Button>
                  </div>

                  <div className="mt-5">
                    <p className="text-white/90 text-sm font-semibold">🎁 Invite 5 friends to unlock Founding perks</p>
                    <div className="mt-2 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6]"
                        style={{ width: `${(progress / 5) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-white/70 mt-2">
                      {inviteCount} / 5 invites • {remaining === 0 ? "Unlocked ✅" : `${remaining} more to unlock`}
                    </p>
                    <Button
                      type="button"
                      onClick={() => referralCode && fetchInviteCount(referralCode)}
                      className="mt-3 rounded-full bg-white/10 text-white hover:bg-white/15"
                    >
                      Refresh invite count
                    </Button>
                  </div>

                  <p className="text-xs text-white/65 mt-4">
                    Share on WhatsApp/IG. We track invites automatically via referral code.
                  </p>
                </div>
              </div>
            ) : null}

            {/* ✅ Leaderboard */}
            <Leaderboard />

            {/* Blinking Follow links */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <p className="text-xs text-white/60">
                <span className="inline-block animate-pulse text-white/90 font-semibold">Follow us</span>{" "}
                on social media:
              </p>
              <div className="flex flex-wrap justify-center gap-3 text-sm">
                <a
                  href="https://www.instagram.com/teamrewaiq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40 animate-pulse"
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

            {/* privacy */}
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
