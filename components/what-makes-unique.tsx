import { Music, TrendingUp, Users, Award, Target, Zap } from "lucide-react"

export function WhatMakesUnique() {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            What Makes <span className="text-primary">Rewaiq</span> Unique
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-pretty">
            Unlike traditional task apps or regular streaming platforms, we've built something revolutionary
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Artists Get Real Engagement */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-6 md:p-8 h-full">
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Music className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Artists & Creators Get Real Engagement</h3>
              <p className="text-muted-foreground mb-4">Not Bots, Real People</p>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Authentic streams from real users</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Audience growth with loyal fans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Analytics showing real human engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Affordable promotion compared to paid ads</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm font-medium text-primary">Why it's powerful:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Artists pay so much for paid ads that don't convert. Rewaiq gives actual listeners, not empty numbers.
                </p>
              </div>
            </div>
          </div>

          {/* Users Earn Money */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6 md:p-8 h-full">
              <div className="mb-4 w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Users Earn Money from Real Activities</h3>
              <p className="text-muted-foreground mb-4">Things You Already Do Daily</p>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">🎧</span>
                  <span>Listen to music</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">▶️</span>
                  <span>Watch short videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">❤️</span>
                  <span>Like, comment, follow and share</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📱</span>
                  <span>Engage with brand pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">🎓</span>
                  <span>Take learning tasks</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-sm font-medium text-green-500">Why it's powerful:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Anyone with a phone can start earning — no skills required. Turn engagement into real income.
                </p>
              </div>
            </div>
          </div>

          {/* Businesses Grow Faster */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6 md:p-8 h-full">
              <div className="mb-4 w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Businesses & Brands Grow Faster</h3>
              <p className="text-muted-foreground mb-4">Real User Engagement</p>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Page followers & visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Engagement & conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Short video views & awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Product promotions</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                <p className="text-sm font-medium text-orange-500">Why it's powerful:</p>
                <p className="text-sm text-muted-foreground mt-1">
                  All interactions come from real users, not bots. Authentic growth that converts.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stream & Earn Feature */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />
          <div className="relative bg-card/90 backdrop-blur-sm border-2 border-primary/40 rounded-3xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl md:text-4xl font-bold text-center">
                Unique Feature: <span className="text-primary">STREAM & EARN</span>
              </h3>
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>

            <p className="text-center text-lg text-muted-foreground mb-8">
              Users are rewarded per verified stream minute, depending on the creator's subscription tier
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Music className="w-5 h-5 text-primary" />
                  Benefits for Artists
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span>More discovery & fan feedback</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cost-effective promotion</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span>Transparent analytics</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span>Audience building & monetization</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span>Increased playlist chances</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-500" />
                  Benefits for Users
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Earn money while listening</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Explore new African music</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Support favorite creators</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Unlock exclusive bonuses</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Build listening streaks for extra rewards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
