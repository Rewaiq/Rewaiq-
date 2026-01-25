"use client"

import { Music, TrendingUp, Users, Award, Zap, Target, BadgeCheck, Building2 } from "lucide-react"

export function WhatMakesUnique() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="unique" className="py-16 md:py-24 px-4 relative bg-[#070716]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            What Makes <span className="text-[#4F7FFF]">Rewaiq</span> Unique
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto">
            Verified engagement that benefits users, creators, and brands — supported by a physical Tech Hub.
          </p>
        </div>

        {/* 3 Core Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {/* Creators */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4F7FFF]/25 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-[#4F7FFF]/35 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#4F7FFF]/70 group-hover:shadow-2xl group-hover:shadow-[#4F7FFF]/20">
              <div className="mb-4 w-12 h-12 rounded-lg bg-[#4F7FFF]/15 flex items-center justify-center">
                <Music className="w-6 h-6 text-[#4F7FFF]" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Creators & Artists</h3>
              <p className="text-white/60 mb-4">Get real engagement — not bots.</p>

              <ul className="space-y-2 text-sm md:text-base text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-[#4F7FFF] mt-1">✓</span>
                  <span>Verified streams, views & actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F7FFF] mt-1">✓</span>
                  <span>Clear reporting & analytics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#4F7FFF] mt-1">✓</span>
                  <span>Affordable campaigns vs ads</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Users */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-green-500/35 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-green-400/70 group-hover:shadow-2xl group-hover:shadow-green-500/20">
              <div className="mb-4 w-12 h-12 rounded-lg bg-green-500/15 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Users</h3>
              <p className="text-white/60 mb-4">Earn from simple online tasks.</p>

              <ul className="space-y-2 text-sm md:text-base text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Complete tasks + submit proof</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Earn coins → convert to cash</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Bonuses, streaks, rewards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Brands */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/25 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-orange-500/35 rounded-2xl p-6 md:p-8 h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:border-orange-400/70 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
              <div className="mb-4 w-12 h-12 rounded-lg bg-orange-500/15 flex items-center justify-center">
                <Users className="w-6 h-6 text-orange-400" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">Brands & Businesses</h3>
              <p className="text-white/60 mb-4">Drive measurable engagement.</p>

              <ul className="space-y-2 text-sm md:text-base text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Follower growth & visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Campaign-based actions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>Real users, not inflated stats</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stream & Earn */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#4F7FFF]/25 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300" />
          <div className="relative bg-white/5 backdrop-blur-sm border-2 border-[#4F7FFF]/35 rounded-3xl p-8 md:p-12 transition-all duration-300 group-hover:border-[#4F7FFF]/65 group-hover:shadow-2xl group-hover:shadow-[#4F7FFF]/15">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-7 h-7 text-[#4F7FFF]" />
              <h3 className="text-2xl md:text-4xl font-bold text-center text-white">
                Unique Feature: <span className="text-[#4F7FFF]">Stream & Earn</span>
              </h3>
              <Zap className="w-7 h-7 text-yellow-400" />
            </div>

            <p className="text-center text-white/65 mb-2">
              Users earn rewards from <span className="text-white font-semibold">verified music discovery</span> and engagement.
            </p>
            <p className="text-center text-xs text-white/45 mb-8">
              Rewaiq is <span className="text-white/70 font-semibold">not</span> a streaming app — we reward verified engagement that supports creators across platforms.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:border-[#4F7FFF]/40 transition-all">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
                  <Music className="w-5 h-5 text-[#4F7FFF]" />
                  Artists
                </h4>
                <ul className="space-y-2 text-sm text-white/75">
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7FFF] mt-1">✓</span>
                    <span>Discovery + feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#4F7FFF] mt-1">✓</span>
                    <span>Transparent reporting</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6 hover:border-green-400/40 transition-all">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
                  <Target className="w-5 h-5 text-green-400" />
                  Users
                </h4>
                <ul className="space-y-2 text-sm text-white/75">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Earn while discovering music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>Streaks + bonuses</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center mt-10 gap-3">
              <button
                onClick={scrollToWaitlist}
                className="px-10 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb]
                hover:from-[#4070ff] hover:to-[#364fc7] transition-all duration-300 hover:scale-[1.03]
                shadow-xl shadow-blue-500/20"
              >
                Join the Waitlist
              </button>
              <p className="text-xs text-white/45 flex items-center gap-2">
                <BadgeCheck className="w-4 h-4" />
                Early access + priority onboarding when we launch
              </p>
            </div>
          </div>
        </div>

        {/* Tech Hub callout */}
        <div className="mt-10 max-w-4xl mx-auto text-center text-white/60 text-sm">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
            <Building2 className="w-4 h-4" />
            Tech Hub supports onboarding & skills training — earning happens online on the platform.
          </span>
        </div>
      </div>
    </section>
  )
}
