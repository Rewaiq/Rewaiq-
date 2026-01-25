"use client"

import { Button } from "@/components/ui/button"
import { useMemo, useState } from "react"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    waitlistSection?.scrollIntoView({ behavior: "smooth" })
  }

  // Optional: basic share link (no backend). You can later replace with real referral links.
  const shareLink = useMemo(() => {
    if (typeof window === "undefined") return "https://rewaiq.com.ng"
    return window.location.origin
  }, [])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // silent fail
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#1a1040] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2a1060]/40 to-transparent pointer-events-none" />

      {/* Soft glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[#4F7FFF]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-64 right-[-200px] w-[700px] h-[700px] rounded-full bg-[#8B5CF6]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8">
          <span className="text-sm text-white/80">
            Online platform • Supported by a physical Tech Hub
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-5">
          Discover.
          <span className="block bg-gradient-to-r from-[#4F7FFF] via-[#6B8FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Engage. Earn.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Rewaiq connects African youth, creators, and brands through verified digital engagement — turning
          discovery into rewards you can redeem or reinvest.
        </p>

        {/* 3-step micro explainer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-8">
          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            1) Discover campaigns
          </div>
          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            2) Engage (music, video, brands)
          </div>
          <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
            3) Earn coins → redeem/reinvest
          </div>
        </div>

        {/* Hub clarification */}
        <p className="text-sm text-white/55 max-w-2xl mx-auto mb-8">
          The Rewaiq Tech Hub supports onboarding, access, and skills training (web development, design,
          digital marketing, etc.) — but earning happens on the platform.
        </p>

        {/* CTA row */}
        <div className="flex flex-col items-center gap-4">
          <Button
            size="lg"
            className="bg-[#3b5bdb] hover:bg-[#364fc7] text-white rounded-full px-12 py-7 text-lg font-medium shadow-xl shadow-blue-500/20 transition-all hover:scale-105 animate-[pulse_2.4s_ease-in-out_infinite]"
            onClick={scrollToWaitlist}
          >
            Join Waitlist
          </Button>

          <p className="text-xs text-white/45">
            No “get-rich-quick” promises — clear rules, verified engagement, transparent rewards.
          </p>
        </div>

        {/* Referral / viral loop (UI only — wire later) */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 md:p-6 text-left">
            <div className="absolute inset-0 bg-gradient-to-r from-[#4F7FFF]/10 via-transparent to-[#8B5CF6]/10 pointer-events-none" />
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-white font-semibold">Get early access faster</p>
                  <p className="text-white/65 text-sm mt-1">
                    Invite <span className="text-white">5 friends</span> to join the waitlist and unlock a priority badge
                    at launch.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="secondary"
                    className="rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10"
                    onClick={handleCopyLink}
                  >
                    {copied ? "Copied ✅" : "Copy invite link"}
                  </Button>
                  <Button
                    type="button"
                    className="rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/10"
                    onClick={() => {
                      const text = `Rewaiq waitlist is live. Join here: ${shareLink}`
                      const url = `https://wa.me/?text=${encodeURIComponent(text)}`
                      window.open(url, "_blank", "noopener,noreferrer")
                    }}
                  >
                    Share on WhatsApp
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-xs text-white/70 px-3 py-1 rounded-full border border-white/10 bg-white/5"
                  >
                    Invite {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="text-[11px] text-white/45 mt-3">
            Note: Referral tracking will be enabled at launch (this is a preview).
          </p>
        </div>
      </div>
    </section>
  )
}
