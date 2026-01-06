import { Gift, Award, Users, Star } from "lucide-react"

export function Giveaways() {
  return (
    <section className="py-24 px-6 bg-[#0f0f2a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">COMMUNITY REWARDS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Giveaways & Community Rewards</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            We believe in rewarding our community. Enjoy exciting bonuses, giveaways, and exclusive perks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Gift, title: "Weekly Giveaways", color: "text-pink-400", bg: "from-pink-500/50 to-rose-500/30" },
            { icon: Award, title: "Task Bonuses", color: "text-amber-400", bg: "from-amber-500/50 to-yellow-500/30" },
            {
              icon: Users,
              title: "Creator Spotlight",
              color: "text-purple-400",
              bg: "from-purple-500/50 to-violet-500/30",
            },
            { icon: Star, title: "Referral Rewards", color: "text-cyan-400", bg: "from-cyan-500/50 to-blue-500/30" },
          ].map((reward, i) => (
            <div
              key={i}
              className={`relative p-[1px] rounded-xl bg-gradient-to-br ${reward.bg} hover:scale-105 transition-transform duration-300`}
            >
              <div className="p-6 rounded-xl bg-[#0a0a1a] text-center">
                <reward.icon className={`w-12 h-12 ${reward.color} mx-auto mb-4`} />
                <h3 className="text-white font-semibold text-lg">{reward.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
          <p className="text-white/80 text-lg">
            Plus: <span className="text-cyan-400 font-semibold">Early Access Badges</span> for our founding members!
          </p>
        </div>
      </div>
    </section>
  )
}
