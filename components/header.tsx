"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { buildAttributedUrl, trackEvent } from "@/lib/analytics";

const navigationItems = [
  { name: "Discover", href: "/#pathways", event: "explore_opportunities_click" as const },
  { name: "How It Works", href: "/#how-it-works", event: null },
  { name: "Platform", href: "/#platform", event: null },
  { name: "Artists", href: "/artists", event: "artist_creator_click" as const },
  { name: "Rewaiq CAP", href: "/campus-ambassadors", event: "campus_ambassador_click" as const },
  { name: "Hub", href: "/hub", event: "hub_click" as const },
  { name: "Partners", href: "/partners", event: "partner_click" as const },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleJoinClick = () => {
    trackEvent("join_rewaiq_click", { location: "header_cta" });
    window.location.href = buildAttributedUrl("https://app.rewaiq.com.ng");
  };

  const handleSignInClick = () => {
    trackEvent("signin_click", { location: "header_nav" });
    window.location.href = buildAttributedUrl("https://app.rewaiq.com.ng/login");
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E2E8F0] dark:border-white/10 bg-white/95 dark:bg-[#0A1B3C]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 md:h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 md:px-12">
        
        {/* Brand Logo & Capitalized Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
          <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl overflow-hidden group-hover:scale-105 transition-transform">
            <img
              src="/logo.png"
              alt="Rewaiq Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0A1B3C] dark:text-white leading-none font-sans">
              Rewaiq
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-slate-500 dark:text-[#F0C860] uppercase mt-0.5">
              Technologies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                if (item.event) trackEvent(item.event, { nav_item: item.name });
              }}
              className="hover:text-[#0A1B3C] dark:hover:text-[#D9A93A] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-2 sm:gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-white/5 text-slate-600 dark:text-[#D9A93A] hover:bg-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <button
            type="button"
            onClick={handleSignInClick}
            className="hidden sm:inline-flex text-xs font-extrabold uppercase tracking-wider text-[#0A1B3C] dark:text-slate-200 hover:text-[#D9A93A] px-3 py-2 transition cursor-pointer"
          >
            Sign In
          </button>
          
          <button
            type="button"
            onClick={handleJoinClick}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-[#D9A93A] px-3.5 sm:px-5 py-2.5 sm:py-3 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0A1B3C] shadow-md hover:bg-[#c4952e] transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <span>Join Rewaiq</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A1B3C] dark:text-white"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0A1B3C] border-b border-[#E2E8F0] dark:border-white/10 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-200">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (item.event) trackEvent(item.event, { nav_item: item.name });
                }}
                className="py-1 border-b border-slate-100 dark:border-white/5"
              >
                {item.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleSignInClick();
              }}
              className="text-left py-2 text-xs font-bold uppercase text-[#D9A93A]"
            >
              Sign In to Your Account &rarr;
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}