import { Music, Video, ShoppingBag, BookOpen, Users, Gift } from "lucide-react"

export function PlatformFeatures() {
  const features = [
    {
      icon: Music,
      title: "Music Promotion Rewards",
      description: "Artists upload their music → Users stream & engage → Everyone earns.",
      color: "from-pink-500/50 to-rose-500/30",
      iconColor: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
    },
    {
      icon: Video,
      title: "Video Engagement",
      description: "Watch, react, and share short-form or long-form content for rewards.",
      color: "from-red-500/50 to-orange-500/30",
      iconColor: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
    },
    {
      icon: ShoppingBag,
      title: "Affiliate Tasks",
      description: "Promote top African products & get paid commissions.",
      color: "from-green-500/50 to-emerald-500/30",
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
    },
    {
      icon: BookOpen,
      title: "Learn & Earn Programs",
      description: "Take short courses, attend mini-workshops, and earn while learning new digital skills.",
      color: "from-blue-500/50 to-cyan-500/30",
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Users,
      title: "Community Growth",
      description: "Engage with other creators, collaborate, and share insights to level up.",
      color: "from-purple-500/50 to-violet-500/30",
      iconColor: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Members unlock badges, bonuses, and early access to campaigns.",
      color: "from-amber-500/50 to-yellow-500/30",
      iconColor: "text-amber-400",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
    },
  ]

  return (
    <section className="py-24 px-6 bg-[#0f0f2a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">PLATFORM FEATURES</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything You Need To Earn, Learn, And Grow
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            All in one ecosystem — designed for Africa's digital generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-[1px] rounded-2xl bg-gradient-to-br ${feature.color} hover:opacity-90 transition-all duration-300`}
            >
              <div className="relative p-6 rounded-2xl bg-[#0a0a1a] h-full">
                <div
                  className={`w-12 h-12 rounded-xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center mb-5`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>

                <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
