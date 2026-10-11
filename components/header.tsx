"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";

const navigationItems = [
  { name: "Discover", href: "/#pathways" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Platform", href: "/#platform" },
  { name: "Artists", href: "/artists" },
  { name: "Rewaiq CAP", href: "/campus-ambassadors" },
  { name: "Hub", href: "/hub" },
  { name: "Partners", href: "/partners" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-white/10 bg-white/95 dark:bg-[#0A1B3C]/95 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A1B3C] dark:bg-[#D9A93A] font-extrabold text-[#D9A93A] dark:text-[#061024] shadow-md group-hover:scale-105 transition-transform">
            <span className="text-xl tracking-tighter">R</span>
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

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold tracking-wider uppercase text-slate-600 dark:text-slate-300">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-[#0A1B3C] dark:hover:text-[#D9A93A] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-[#D9A93A] hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          <a
            href="https://app.rewaiq.com.ng/login"
            className="hidden sm:inline-flex text-xs font-extrabold uppercase tracking-wider text-[#0A1B3C] dark:text-slate-200 hover:text-[#0F2657] px-3 py-2 transition"
          >
            Sign In
          </a>
          <a
            href="https://app.rewaiq.com.ng"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A93A] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0A1B3C] shadow-md hover:bg-[#c4952e] transition-all transform active:scale-95"
          >
            <span>Join Rewaiq</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A1B3C] dark:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0A1B3C] border-b border-slate-200 dark:border-white/10 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4 font-bold text-sm uppercase tracking-wider text-slate-700 dark:text-slate-200">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 border-b border-slate-100 dark:border-white/5"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}