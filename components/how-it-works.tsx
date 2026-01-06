import { Search, MousePointerClick, Coins, Play } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description:
        "Explore opportunities tailored for you — music promotion tasks, video engagement, creator challenges, affiliate offers, learning programs, and community tasks.",
    },
    {
      icon: MousePointerClick,
      title: "Engage",
      description:
        "Complete easy engagement tasks: stream songs, watch videos, follow pages, like, comment & share content, promote products, and take micro-courses. Every action contributes value.",
    },
    {
      icon: Coins,
      title: "Earn",
      description:
        "Earn Rewaiq Coins for every completed task. Coins can be converted to cash, used to promote your own content, saved for bonuses and rewards, or spent on premium features.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0f0f2a]">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How Rewaiq Works</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            A simple 3-step earning system designed for everyone. Whether you're a content creator in Lagos, a student
            in Nairobi, or an aspiring influencer in Accra — Rewaiq gives you the tools to grow in the digital economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/20 hover:from-cyan-400/70 hover:via-blue-500/50 hover:to-purple-500/40 transition-all duration-300"
            >
              <div className="relative p-8 rounded-2xl bg-[#0a0a1a] h-full">
                {/* Step number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5">{index + 1}</div>

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>

                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Demo Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-3">See Rewaiq In Action</h3>
          <p className="text-white/60">Watch how easy it is to start earning</p>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-video max-w-5xl mx-auto group cursor-pointer">
          <img
            src="/african-content-creator-speaking-into-microphone-p.jpg"
            alt="Video demo of Rewaiq platform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-[#e53935] fill-[#e53935] ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
