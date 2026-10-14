"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [logoError, setLogoError] = useState(false);

  // Change this to your exact WhatsApp business number (country code + number without '+')
  const whatsappPhone = "2348123456789"; 
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Rewaiq Support, I'd like to make an inquiry.")}`;

  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com/rewaiq",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/team-rewaiq",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/rewaiq",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/rewaiq",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.67 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp Direct",
      href: "https://wa.me/2348158934171",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="border-t border-[#E2E8F0] dark:border-white/10 bg-slate-50 dark:bg-[#061024] text-slate-700 dark:text-slate-300 transition-colors">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 mb-4 group focus:outline-none">
              <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
                {!logoError ? (
                  <img
                    src="/logo.png"
                    alt="Rewaiq Logo"
                    className="w-full h-full object-contain"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-[#0A1B3C] dark:bg-[#D9A93A] flex items-center justify-center text-[#D9A93A] dark:text-[#061024] font-black text-xl">
                    R
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight text-[#0A1B3C] dark:text-white leading-none font-sans">
                  Rewaiq
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-500 dark:text-[#F0C860] uppercase mt-0.5">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
              Connecting young people, creators, students, and brands to opportunities to discover, participate, earn, and grow.
            </p>

            {/* Social Media Circular Icon Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:border-[#D9A93A] hover:text-[#D9A93A] hover:bg-slate-100 dark:hover:bg-white/10 transition-all shadow-sm"
                  aria-label={s.name}
                  title={s.name}
                >
                  {s.icon}
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
              <li>
                <Link href="/careers" className="hover:text-[#D9A93A] transition flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">
                    Hiring
                  </span>
                </Link>
              </li>
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