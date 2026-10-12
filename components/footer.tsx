"use client";

import React from "react";
import Link from "next/link";
import { 
  Building2, 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "X (Twitter)", href: "https://x.com/rewaiq", label: "X" },
    { name: "Instagram", href: "https://instagram.com/rewaiq", label: "IG" },
    { name: "LinkedIn", href: "https://linkedin.com/company/rewaiq", label: "IN" },
    { name: "Facebook", href: "https://facebook.com/rewaiq", label: "FB" },
    { name: "YouTube", href: "https://youtube.com/@rewaiq", label: "YT" },
    { name: "WhatsApp Community", href: "https://chat.whatsapp.com/rewaiq", label: "WA" },
  ];

  return (
    <footer className="border-t border-[#E2E8F0] dark:border-white/10 bg-slate-50 dark:bg-[#061024] text-slate-700 dark:text-slate-300 transition-colors">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1B3C] dark:bg-[#D9A93A] font-extrabold text-[#D9A93A] dark:text-[#061024] shadow-md">
                <span className="text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-[#0A1B3C] dark:text-white leading-none">
                  rewaiq
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-500 dark:text-[#F0C860] uppercase mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
              Connecting young people, creators, students, and brands to opportunities to discover, participate, earn, and grow.
            </p>

            {/* Social Media Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:border-[#D9A93A] hover:text-[#D9A93A] transition-all shadow-sm"
                  aria-label={s.name}
                >
                  {s.label} &bull; {s.name.split(" ")[0]}
                </a>
              ))}
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
              <p className="flex items-center gap-1.5 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                RC: 9137882 &bull; NITDA Startup Label &bull; SMEDAN
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1B3C] dark:text-white mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/opportunities" className="hover:text-[#D9A93A] transition">Opportunities</Link></li>
              <li><Link href="/artists" className="hover:text-[#D9A93A] transition">Artists &amp; Creators</Link></li>
              <li><Link href="/campus-ambassadors" className="hover:text-[#D9A93A] transition">Rewaiq CAP</Link></li>
              <li><Link href="/hub" className="hover:text-[#D9A93A] transition">Innovation Hub</Link></li>
              <li><Link href="/partners" className="hover:text-[#D9A93A] transition">For Brands &amp; SMEs</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1B3C] dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/about" className="hover:text-[#D9A93A] transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#D9A93A] transition">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-[#D9A93A] transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#D9A93A] transition">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Hub Location & Direct Dispatch */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1B3C] dark:text-white mb-4">
              Innovation Hub
            </h4>
            <div className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D9A93A] shrink-0 mt-0.5" />
                <span>1 Yellow Avenue, Aba, Abia State, Nigeria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D9A93A] shrink-0" />
                <a href="mailto:info@rewaiq.com.ng" className="hover:text-[#D9A93A] transition font-semibold">
                  info@rewaiq.com.ng
                </a>
              </div>
            </div>

            <div className="mt-5 p-3.5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A93A] block mb-1">
                Web &amp; Mobile Access
              </span>
              <a 
                href="https://app.rewaiq.com.ng"
                className="text-xs font-bold text-[#0A1B3C] dark:text-white hover:text-[#D9A93A] inline-flex items-center gap-1.5"
              >
                <span>Launch App Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Dynamic Copyright Line */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {currentYear} Rewaiq Technologies Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[11px]">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/contact" className="hover:underline">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}