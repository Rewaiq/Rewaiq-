export function ForCreators() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">FOR CREATORS & ARTISTS</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Upload Your Work, Build Your Audience, Earn Real Money
          </h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Rewaiq gives you the platform to showcase your talent and get rewarded for your creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/50 to-pink-500/30">
            <div className="p-8 rounded-2xl bg-[#0a0a1a]">
              <h3 className="text-2xl font-bold text-white mb-6">What You Can Do</h3>
              <ul className="space-y-4">
                {[
                  "Upload songs or videos to promote",
                  "Gain real fans and followers",
                  "Boost their visibility",
                  "Earn more from their audience",
                  "Run engagement campaigns",
                  "Build a loyal community",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✔</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/50 to-cyan-500/30">
            <div className="p-8 rounded-2xl bg-[#0a0a1a]">
              <h3 className="text-2xl font-bold text-white mb-6">For Businesses</h3>
              <ul className="space-y-4">
                {[
                  "Promote pages",
                  "Run engagement-driven ads",
                  "Gain followers",
                  "Increase conversions",
                  "Reach active digital users",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl">✔</span>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="/upload"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70"
          >
            Get Early Access - Coming Soon
          </a>
        </div>
      </div>
    </section>
  )
}
