import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-[#050510] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-gradient-to-br from-[#4F7FFF]/20 to-[#8B5CF6]/20 p-[1px] hover:shadow-[0_0_15px_rgba(79,127,255,0.3)] transition-all">
                <Image
                  src="/images/rewaiq-20logo.jpg"
                  alt="Rewaiq Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover rounded-[7px] relative z-10"
                />
              </div>
              <div className="flex flex-col gap-0">
                <span className="text-lg font-bold text-white tracking-tight">Rewaiq</span>
                <span className="text-[7px] font-medium tracking-[0.15em] text-white/30 uppercase">
                  Technologies Ltd
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-xs">
              Africa's leading digital earning ecosystem. Empowering creators and businesses through transparency and
              innovation.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#4F7FFF]/20 flex items-center justify-center transition-colors group"
              >
                <Facebook className="w-5 h-5 text-white/60 group-hover:text-[#4F7FFF] transition-colors" />
              </a>
              <a
                href="https://twitter.com/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#4F7FFF]/20 flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-white/60 group-hover:text-[#4F7FFF] transition-colors" />
              </a>
              <a
                href="https://instagram.com/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#4F7FFF]/20 flex items-center justify-center transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white/60 group-hover:text-[#4F7FFF] transition-colors" />
              </a>
              <a
                href="https://linkedin.com/company/rewaiq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#4F7FFF]/20 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-white/60 group-hover:text-[#4F7FFF] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link href="#features" className="text-sm text-white/60 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="/careers" className="text-sm text-white/60 hover:text-white transition-colors">
                Careers
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <div className="flex flex-col gap-3">
              <Link href="/videos" className="text-sm text-white/60 hover:text-white transition-colors">
                Videos
              </Link>
              <Link href="#faq" className="text-sm text-white/60 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/support" className="text-sm text-white/60 hover:text-white transition-colors">
                Support
              </Link>
              <Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-white/40">
              © {currentYear} REWAIQ is a subsidiary of Rewaiq Technologies Ltd. All rights reserved.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F7FFF]/10 border border-[#4F7FFF]/20">
                <span className="text-[9px] font-bold tracking-wider text-[#4F7FFF]">RC 9137882</span>
              </div>
              <div className="h-3 w-px bg-white/10" />
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#4F7FFF] animate-pulse" />
                <span className="text-[9px] font-black text-[#4F7FFF]/60 tracking-widest uppercase">2026 Era</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-white/40">
            Engineered by <span className="text-[#4F7FFF] font-semibold">Rewaiq Hub</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
