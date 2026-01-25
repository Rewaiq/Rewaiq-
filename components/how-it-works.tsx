"use client"

import { Search, MousePointerClick, Coins, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description:
        "Find verified campaigns and tasks from creators (music/video), brands, and the Rewaiq community — matched to your interests.",
    },
    {
      icon: MousePointerClick,
      title: "Engage",
      description:
        "Do simple actions like stream/listen, watch, follow, like, comment, share, or join creator/brand challenges — with clear rules and verification.",
    },
    {
      icon: Coins,
      title: "Earn",
      description:
        "Get Rewaiq Coins for completed engagement. Redeem when available, or reinvest coins to boost your own content and visibility on the platform.",
    },
  ]

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    waitlistSection?.scrollIntoView({ behavior: "smooth" })
  }

  // Optional: put a YouTube/Vimeo ID here later (or pass via props)
  const YOUTUBE_ID = "" // e.g. "EKyirtVHsK0"

  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0f0f2a]">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">How Rewaiq Works</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Rewaiq helps African users discover opportunities, complete verified engagement, and earn rewards — while
            creators and brands get real audience action (not bots).
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/45 via-blue-500/25 to-purple-500/20 hover:from-cyan-400/65 hover:via-blue-500/45 hover:to-purple-500/35 transition-all duration-300"
            >
              <div className="relative p-8 rounded-2xl bg-[#0a0a1a] h-full">
                <div className="absolute top-4 right-4 text-5xl font-bold text-white/5">{index + 1}</div>

                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-400/15 to-blue-500/15 border border-cyan-400/25 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-cyan-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>

                {/* Micro trust line */}
                {index === 1 && (
                  <p className="text-xs text-white/40 mt-4">
                    No exaggerated claims — tasks have rules, and rewards are based on verified completion.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Video / Demo */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">See Rewaiq In Action</h3>
          <p className="text-white/60">
            Quick walkthrough of the platform experience (preview — MVP in progress).
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden aspect-video max-w-5xl mx-auto border border-white/10 bg-black/20">
          {YOUTUBE_ID ? (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
              title="Rewaiq Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <img
                src="/african-content-creator-speaking-into-microphone-p.jpg"
                alt="Rewaiq platform preview"
                className="w-full h-full object-cover opacity-95"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/35">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl">
                    <Play className="w-8 h-8 text-[#e53935] fill-[#e53935] ml-1" />
                  </div>
                  <p className="text-sm text-white/80">Demo video coming soon</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            onClick={scrollToWaitlist}
            className="bg-[#3b5bdb] hover:bg-[#364fc7] text-white rounded-full px-10 py-6 text-base font-medium shadow-xl shadow-blue-500/20"
          >
            Join Waitlist
          </Button>
          <p className="text-xs text-white/45 mt-3">
            Be first to access the platform and creator/brand campaigns at launch.
          </p>
        </div>
      </div>
    </section>
  )
}
