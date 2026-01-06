"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { X } from "lucide-react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-visible">
            {/* Sparkle particles for New Year vibes */}
            <div className="absolute inset-0 animate-sparkle-1 pointer-events-none">
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#4F7FFF] rounded-full blur-[1px] shadow-[0_0_8px_#4F7FFF]" />
            </div>
            <div className="absolute inset-0 animate-sparkle-2 pointer-events-none">
              <div className="absolute -bottom-2 -left-1 w-1 h-1 bg-[#8B5CF6] rounded-full blur-[1px] shadow-[0_0_6px_#8B5CF6]" />
            </div>
            <div className="absolute inset-0 animate-sparkle-3 pointer-events-none">
              <div className="absolute top-2 -left-2 w-1.5 h-1.5 bg-white rounded-full blur-[1px] shadow-[0_0_8px_white]" />
            </div>

            {/* Logo with shimmer sweep */}
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-gradient-to-br from-[#4F7FFF]/20 to-[#8B5CF6]/20 p-[1px]">
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-[11px]" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer" />
              <Image
                src="/images/rewaiq-20logo.jpg"
                alt="Rewaiq Logo"
                width={48}
                height={48}
                className="relative z-10 w-full h-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0 leading-tight">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#4F7FFF] via-[#6B8FFF] to-[#8B5CF6] bg-clip-text text-transparent">
              Rewaiq
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-[7px] font-medium tracking-[0.1em] text-white/40 uppercase whitespace-nowrap">
                Technologies Ltd
              </span>
              <div className="h-2 w-px bg-white/20" />
              <span className="text-[7px] font-bold tracking-wider text-[#4F7FFF] animate-pulse-glow">RC 9137882</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/videos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Videos
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Careers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:from-[#4070ff] hover:to-[#364fc7] text-white rounded-full px-6 font-medium shadow-lg shadow-primary/20">
            Join Waitlist
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors relative"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <div className="relative w-7 h-7 flex flex-col items-center justify-center gap-[3px]">
                {/* Top bar - R E */}
                <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-[#4F7FFF] via-[#6B8FFF] to-[#8B5CF6] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute text-[6px] font-bold text-white tracking-wider">RE</span>
                </div>
                {/* Middle bar - WA */}
                <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-[#4F7FFF] via-[#6B8FFF] to-[#8B5CF6] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute text-[6px] font-bold text-white tracking-wider">WA</span>
                </div>
                {/* Bottom bar - IQ */}
                <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-[#4F7FFF] via-[#6B8FFF] to-[#8B5CF6] flex items-center justify-center relative overflow-hidden">
                  <span className="absolute text-[6px] font-bold text-white tracking-wider">IQ</span>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-white/5 animate-in slide-in-from-top">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/videos"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Videos
            </Link>
            <Link
              href="/careers"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Button className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:from-[#4070ff] hover:to-[#364fc7] text-white rounded-full px-6 font-medium shadow-lg shadow-primary/20 mt-2">
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
