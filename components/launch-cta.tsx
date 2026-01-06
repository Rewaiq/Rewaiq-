"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function LaunchCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist submission
    console.log("[v0] Waitlist submission:", email)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="waitlist" className="py-16 px-6 bg-[#0a0a1a]">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-[#3b5bdb] rounded-[2.5rem] px-8 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-balance">Don't Miss Our Launch Date!!</h2>
          <p className="text-white/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed mb-10">
            We're Still Putting The Final Pieces Together. While We Finish The Platform, You Can Join The Waitlist To
            Get Early Updates. You'll Be Notified When We Launch, And You'll Get The Chance To Create Your Profile And
            Upload Your Work Before The Main Public Rollout.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white text-gray-900 rounded-full px-6 py-6 text-base flex-1"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-white text-[#3b5bdb] hover:bg-white/90 rounded-full px-10 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              {submitted ? "✓ Joined!" : "Join Now"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
