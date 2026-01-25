"use client"

import { Gift, Star, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Giveaways() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  const rewards = [
    {
      icon: Star,
      title: "Referral Rewards",
      desc: "Invite friends and unlock early perks at launch.",
      color: "text-cyan-400",
      bg: "from-cyan-500/50 to-blue-500/30",
    },
    {
      icon: Gift,
      title: "Founding Member Badge",
      desc: "Get a badge + early access benefits as a first user.",
      color: "text-purple-400",
      bg: "from-purple-500/50 to-violet-500/30",
    },
    {
      icon: Award,
      title: "Launch Task Bonuses",
      desc: "Early users get bonus multipliers on verified tasks.",
      color: "text-amber-400",
      bg: "from-amber-500/50 to-yellow-500/30",
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#0f0f2a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-cyan-400 font-medium mb-4">FOUNDING MEMBER REWARDS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Join Early. Unlock Rewards.</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Early supporters get perks at launch — designed to reward consistency, not hype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rewards.map((r, i) => (
            <div
              key={i}
              className={`group relative p-[1px] rounded-2xl bg-gradient-to-br ${r.bg} transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="p-7 rounded-2xl bg-[#0a0a1a] h-full">
                <r.icon className={`w-12 h-12 ${r.color} mb-4`} />
                <h3 className="text-white font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:from-[#4070ff] hover:to-[#364fc7] text-white rounded-full px-10 py-6 text-base font-medium shadow-lg shadow-blue-500/20"
          >
            Join the Waitlist
          </Button>

          <p className="text-xs text-white/45 mt-3">
            Rewards activate after launch. Clear rules + verified tasks — no fake promises.
          </p>
        </div>
      </div>
    </section>
  )
}