import { Coins, TrendingUp, Gift, Rocket } from "lucide-react"

export function EarnCoins() {
  return (
    <section className="py-24 px-6 bg-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">REWARDS SYSTEM</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Earn Coins, Withdraw Cash</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Complete tasks, earn Rewaiq Coins, and convert them to real money
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: Coins, title: "Complete Tasks", desc: "Stream, watch, engage with content" },
            { icon: TrendingUp, title: "Earn Coins", desc: "Get rewarded with Rewaiq Coins" },
            { icon: Gift, title: "Convert to Cash", desc: "Withdraw real money to your account" },
            { icon: Rocket, title: "Or Reinvest", desc: "Use coins to boost your own content" },
          ].map((step, i) => (
            <div key={i} className="relative p-[1px] rounded-xl bg-gradient-to-br from-blue-500/50 to-purple-500/30">
              <div className="p-6 rounded-xl bg-[#0f0f2a] text-center">
                <step.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-white/60 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/50 to-blue-500/30">
          <div className="p-8 rounded-2xl bg-[#0f0f2a]">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Use Your Coins To:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Boost your own pages",
                "Promote your videos",
                "Support your favorite creators",
                "Level up in the Rewaiq ecosystem",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-[#0a0a1a]">
                  <span className="text-green-400 text-xl">✔</span>
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
