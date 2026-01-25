"use client"

import { Coins, TrendingUp, Rocket, Wallet, ArrowRight } from "lucide-react"

export function EarnCoins() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  const steps = [
    {
      icon: Coins,
      title: "Complete Tasks",
      desc: "Stream, watch, or engage with content.",
      ring: "from-cyan-500/40 to-blue-500/20",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-300",
    },
    {
      icon: TrendingUp,
      title: "Earn Coins",
      desc: "Get rewarded with Rewaiq Coins.",
      ring: "from-blue-500/40 to-purple-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-300",
    },
    {
      icon: Wallet,
      title: "Convert to Cash",
      desc: "Withdraw to your bank/account (when live).",
      ring: "from-purple-500/40 to-pink-500/20",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-300",
    },
    {
      icon: Rocket,
      title: "Or Reinvest",
      desc: "Use coins to boost your content & campaigns.",
      ring: "from-pink-500/40 to-rose-500/20",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-300",
    },
  ]

  const uses = [
    "Boost your own pages",
    "Promote your videos",
    "Support your favorite creators",
    "Level up in the Rewaiq ecosystem",
  ]

  return (
    <section className="py-24 px-6 bg-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">REWARDS SYSTEM</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Earn Coins, Convert to Cash
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Transparent rewards for verified actions — and coins you can withdraw or reinvest in your growth.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group relative p-[1px] rounded-2xl bg-gradient-to-br ${step.ring}
                transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10`}
            >
              <div className="p-6 rounded-2xl bg-[#0f0f2a] text-center h-full border border-white/5">
                <div
                  className={`w-14 h-14 rounded-2xl ${step.iconBg} border border-white/10 flex items-center justify-center mx-auto mb-4
                    transition-transform duration-300 group-hover:scale-110`}
                >
                  <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>

                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Use coins */}
        <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-cyan-500/40 via-blue-500/25 to-purple-500/20">
          <div className="p-8 md:p-10 rounded-3xl bg-[#0f0f2a] border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-2 text-center">
              Use Your Coins To
            </h3>
            <p className="text-white/60 text-center mb-8">
              Grow faster on the platform — or cash out when you want.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {uses.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-[#0a0a1a] border border-white/5
                    transition-all duration-300 hover:border-cyan-400/30 hover:bg-white/[0.03]"
                >
                  <span className="text-green-400 text-xl">✔</span>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <button
                onClick={scrollToWaitlist}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full
                  bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb]
                  hover:from-[#4070ff] hover:to-[#364fc7]
                  text-white font-semibold shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02]"
              >
                Join the Waitlist <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-white/45 mt-3">
                Rewards are tied to verified actions — no “get-rich-quick” claims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
