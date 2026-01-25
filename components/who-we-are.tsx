"use client"

import { Eye, Target, Shield, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhoWeAre() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    waitlistSection?.scrollIntoView({ behavior: "smooth" })
  }

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear rules, verified tasks, and honest rewards.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Built for African youth, creators, and businesses to grow together.",
    },
    {
      icon: Lightbulb,
      title: "Progress",
      description: "We reward consistency and real digital participation — not hype.",
    },
    {
      icon: Eye,
      title: "Authenticity",
      description: "Real users. Real engagement. Real outcomes.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-24 px-6 bg-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cyan-400 font-medium mb-3">About Rewaiq</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">Platform-first. Hub-supported.</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Rewaiq is an online platform where people complete verified engagement tasks (streaming, video actions,
            brand campaigns, and creator promotions) to earn coins that can be converted to cash. Our physical Tech Hub
            supports onboarding, access, and digital skills training.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              onClick={scrollToWaitlist}
              className="bg-[#3b5bdb] hover:bg-[#364fc7] text-white rounded-full px-8"
            >
              Get Early Access
            </Button>
            <span className="text-xs text-white/50">Join the waitlist — no hype, just clarity.</span>
          </div>
        </div>

        {/* Vision + Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 md:mb-16">
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/20">
            <div className="p-7 md:p-8 rounded-2xl bg-[#0f0f2a] h-full">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Vision</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Build Africa’s most trusted engagement-to-earn ecosystem — where participation creates value and young
                people can discover, engage, and earn sustainably.
              </p>
            </div>
          </div>

          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/50 via-fuchsia-500/30 to-pink-500/20">
            <div className="p-7 md:p-8 rounded-2xl bg-[#0f0f2a] h-full">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Mission</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                Connect creators and brands to real users through structured campaigns and tasks — rewarding verified
                engagement, supporting creator growth, and building digital skills through our Tech Hub.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">What we stand for</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <div key={index} className="p-[1px] rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/20">
                <div className="p-5 rounded-xl bg-[#0f0f2a] h-full">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <img
            src="/two-diverse-men-laughing-podcast-studio-microphone.jpg"
            alt="Creators collaborating in studio"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
