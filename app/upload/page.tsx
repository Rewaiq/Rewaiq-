"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function UploadPage() {
  const [contentType, setContentType] = useState<"music" | "video" | "image" | "text">("video")
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tags, setTags] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle upload logic here
    alert("Upload feature coming soon! Join the waitlist to be notified when we launch.")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <span className="text-purple-400 font-semibold">COMING SOON</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Upload & Start Earning</h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              The future of content monetization in Africa is almost here. Get ready to upload your music, videos, and
              creative work to reach millions and earn real money.
            </p>
          </div>

          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 mb-12">
            <div className="p-12 md:p-16 rounded-3xl bg-[#0a0a1a] text-center">
              <Upload className="w-20 h-20 text-purple-400 mx-auto mb-8 animate-pulse" />

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be First To Upload When We Launch</h2>

              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Join our waitlist now and get exclusive early access to upload your content before the public launch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40 max-w-xs"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 rounded-full shadow-lg shadow-purple-500/30">
                  Get Early Access
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl mb-2">🎵</div>
                  <p className="text-white/80 font-medium">Upload Music</p>
                  <p className="text-white/50 text-sm">Share your tracks</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎬</div>
                  <p className="text-white/80 font-medium">Upload Videos</p>
                  <p className="text-white/50 text-sm">Showcase content</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <p className="text-white/80 font-medium">Start Earning</p>
                  <p className="text-white/50 text-sm">Get paid instantly</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Early Bird Bonus", desc: "Extra rewards for first 1000 creators", icon: "🎁" },
              { title: "Featured Placement", desc: "Get spotlighted on launch day", icon: "⭐" },
              { title: "Premium Tools", desc: "Advanced analytics & promotion", icon: "📊" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/50 text-sm">
              Expected launch: Q1 2025 • Be part of Africa's digital earning revolution
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
