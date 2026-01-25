"use client"

import { useCallback } from "react"
import { Music, Video, ShoppingBag, BookOpen, Users, Gift } from "lucide-react"

export function PlatformFeatures() {
  const scrollToWaitlist = useCallback(() => {
    const el = document.getElementById("waitlist")
    el?.scrollIntoView({ behavior: "smooth" })
  }, [])

  const features = [
    {
      icon: Music,
      title: "Music Promotion Rewards",
      description: "Creators run campaigns → users discover & engage → rewards are earned.",
      color: "from-pink-500/50 to-rose-500/30",
      glow: "group-hover:shadow-pink-500/20",
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      borderHover: "group-hover:border-pink-500/60",
    },
    {
      icon: Video,
      title: "Video Engagement Tasks",
      description: "Engage with short or long videos (watch, react, share) and earn rewards.",
      color: "from-red-500/50 to-orange-500/30",
      glow: "group-hover:shadow-red-500/20",
      iconColor: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      borderHover: "group-hover:border-red-500/60",
    },
    {
      icon: ShoppingBag,
      title: "Affiliate & Brand Tasks",
      description: "Promote products/pages, drive actions, and earn commissions or coins.",
      color: "from-green-500/50 to-emerald-500/30",
      glow: "group-hover:shadow-green-500/20",
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      borderHover: "group-hover:border-green-500/60",
    },
    {
      icon: BookOpen,
      title: "Skills & Training (Tech Hub)",
      description: "Learn digital skills (web dev, design, marketing, etc.) with onboarding support.",
      color: "from-blue-500/50 to-cyan-500/30",
      glow: "group-hover:shadow-blue-500/20",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      borderHover: "group-hover:border-blue-500/60",
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "Collaborate, join challenges, and grow with other creators and users.",
      color: "from-purple-500/50 to-violet-500/30",
      glow: "group-hover:shadow-purple-500/20",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      borderHover: "group-hover:border-purple-500/60",
    },
    {
      icon: Gift,
      title: "Bonuses & Rewards",
      description: "Unlock badges, streak bonuses, early access, and community rewards.",
      color: "from-amber-500/50 to-yellow-500/30",
      glow: "group-hover:shadow-amber-500/20",
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      borderHover: "group-hover:border-amber-500/60",
    },
  ]

  return (
    <section id="features" className="py-24 px-6 bg-[#0f0f2a]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">PLATFORM FEATURES</p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Discover. Engage. Earn.
          </h2>

          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            One ecosystem for creators, brands, and users — powered by verified tasks and transparent rewards.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={scrollToWaitlist}
              className="rounded-full px-7 py-3 font-semibold bg-[#3b5bdb] text-white
              hover:bg-[#364fc7] transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-[1px]"
            >
              Join the Waitlist
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-[1px] rounded-2xl bg-gradient-to-br ${feature.color}
              transition-all duration-300 hover:opacity-95`}
            >
              <div
                className={`relative p-6 rounded-2xl bg-[#0a0a1a] h-full
                transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl ${feature.glow}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bgColor} border ${feature.borderColor} ${feature.borderHover}
                  flex items-center justify-center mb-5 transition-all duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>

                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>

                {/* small hover hint */}
                <div className="mt-5 text-xs text-white/35 opacity-0 group-hover:opacity-100 transition-opacity">
                  Tap to explore more →
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom mini-trust line */}
        <p className="text-center text-xs text-white/40 mt-10">
          Tasks are verified. Rewards are transparent. No exaggerated earning claims.
        </p>
      </div>
    </section>
  )
}
