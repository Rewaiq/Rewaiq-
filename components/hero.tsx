"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-8 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f2a] to-[#1a1040] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#2a1060]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-10">
          <span className="text-sm text-white/80">Africa's digital earning hub</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          <span className="block font-sans">Show The World What You</span>
          <span className="font-serif italic text-white text-5xl md:text-7xl lg:text-8xl">Create.</span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Music, Videos, Art, Fashion, Writing Share Your Work, Build An Audience,
          <br className="hidden md:block" />
          And Get Discovered.
        </p>

        <Button
          size="lg"
          className="bg-[#3b5bdb] hover:bg-[#364fc7] text-white rounded-full px-12 py-7 text-lg font-medium shadow-xl shadow-blue-500/20 transition-all hover:scale-105"
          onClick={() => {
            const waitlistSection = document.getElementById("waitlist")
            waitlistSection?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Join Waitlist
        </Button>
      </div>
    </section>
  )
}
