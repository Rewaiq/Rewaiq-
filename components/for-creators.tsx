"use client"

export function ForCreators() {
  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0f0f2a] to-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">FOR CREATORS, ARTISTS & BRANDS</p>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Grow Your Audience. Get Real Engagement.
          </h2>

          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Rewaiq helps creators and brands reach real African users, not bots — and turn engagement into measurable results.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Creators */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/50 to-pink-500/30">
            <div className="p-8 rounded-2xl bg-[#0a0a1a]">
              <h3 className="text-xl font-bold text-white mb-5">For Artists & Creators</h3>

              <ul className="space-y-3 text-white/80 text-sm">
                <li>• Promote music and videos with verified engagement</li>
                <li>• Build loyal fans and listening communities</li>
                <li>• Get transparent analytics on real users</li>
                <li>• Monetize attention through Rewaiq campaigns</li>
              </ul>
            </div>
          </div>

          {/* Brands */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-blue-500/50 to-cyan-500/30">
            <div className="p-8 rounded-2xl bg-[#0a0a1a]">
              <h3 className="text-xl font-bold text-white mb-5">For Businesses & Brands</h3>

              <ul className="space-y-3 text-white/80 text-sm">
                <li>• Run engagement-driven campaigns</li>
                <li>• Gain followers, traffic, and conversions</li>
                <li>• Launch micro-campaigns with African youth</li>
                <li>• Track real user actions and outcomes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToWaitlist}
            className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 
            text-white font-semibold rounded-full transition-all shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-[1px]"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  )
}
