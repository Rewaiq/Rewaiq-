export function WhyPerfect() {
  const features = [
    {
      title: "Discover Content That Matters",
      description:
        "Users explore content by category and interest, so creators reach real fans who care—not random algorithm feeds.",
    },
    {
      title: "Earn From Real Engagement",
      description:
        "Users earn coins by streaming music, watching videos, engaging with brands, and completing verified digital tasks.",
    },
    {
      title: "Creators Get Real Fans, Not Bots",
      description:
        "Artists and creators gain authentic listeners, followers, and engagement backed by transparent analytics.",
    },
    {
      title: "Brands Get Active Digital Users",
      description:
        "Businesses launch campaigns, gain visibility, and convert attention into measurable engagement and leads.",
    },
    {
      title: "All-In-One Digital Ecosystem",
      description:
        "Learning, earning, creator discovery, and brand engagement—built into one unified African digital platform.",
    },
    {
      title: "Tech Hub for Training & Access",
      description:
        "Our physical Tech Hub supports onboarding, digital skills training, and access for users with limited devices or internet.",
    },
  ]

  return (
    <section id="features" className="py-24 px-6 bg-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Why Rewaiq Is Different
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Rewaiq combines discovery, engagement, and earning into one platform — supported by a physical Tech Hub for training and onboarding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/60 via-fuchsia-500/40 to-purple-600/30 hover:from-purple-500/80 hover:via-fuchsia-500/60 hover:to-purple-600/50 transition-all duration-300"
            >
              <div className="relative p-6 rounded-2xl bg-[#0a0a1a] h-full">
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
