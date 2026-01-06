export function WhyPerfect() {
  const features = [
    {
      title: "You Get Discovered Faster",
      description:
        'Because people browse by category, your work is shown to the exact audience that cares about your type of creativity not mixed into random "general feed".',
    },
    {
      title: "You Don't Need A Big Follower Base",
      description:
        "Visibility doesn't depend on popularity. A new creator can still rank and get eyes on their content. Reach is based on your content, not your popularity",
    },
    {
      title: "Your Work Is Presented Professionally",
      description:
        "The platform layout is clean so if someone views your page, it looks like a portfolio, not like a social media timeline. Your page looks like a real portfolio not like a cluttered personal feed.",
    },
    {
      title: "Less Competition For Attention",
      description:
        'Because people browse by category, your work is shown to the exact audience that cares about your type of creativity not mixed into random "general feed".',
    },
    {
      title: "One Place To Organise All Your Work",
      description:
        "Instead of posting 1 thing on IG, another on TikTok, another on Behance you can keep everything in one clean, central space.",
    },
    {
      title: "You Can Attract Potential Clients",
      description:
        "The goal isn't to chase vanity metrics. It's to connect you with people who might want to partner, buy, hire, or commission.",
    },
  ]

  return (
    <section id="features" className="py-24 px-6 bg-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why We Are Perfect For Creators</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Our Platform Is Being Built To Give Creatives Clearer Visibility, Easier Publishing, And A Cleaner Space To
            Express Their Work. We Focus On Discovery, Not Noise So Your Content Can Actually Stand Out And Be Seen By
            The Right Audience.
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
