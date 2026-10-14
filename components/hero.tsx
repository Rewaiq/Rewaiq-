"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, CheckCircle2, Wifi, Battery, ListCheck, Music, Play, MapPin } from "lucide-react";
import { buildAttributedUrl, trackEvent } from "@/lib/analytics";

export default function Hero() {
  const handlePrimaryJoin = () => {
    trackEvent("join_rewaiq_click", { location: "hero_primary_cta" });
    window.location.href = buildAttributedUrl("https://app.rewaiq.com.ng");
  };

  const handleExploreClick = () => {
    trackEvent("explore_opportunities_click", { location: "hero_secondary_cta" });
  };

  return (
    <section className="relative bg-white dark:bg-[#0A1B3C] pt-8 md:pt-16 pb-16 md:pb-24 overflow-hidden border-b border-slate-100 dark:border-white/10 transition-colors">
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#D9A93A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#0A1B3C]/5 dark:bg-[#0F2657]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Value Prop & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1B3C] dark:bg-white/10 text-white dark:text-[#F0C860] text-xs font-extrabold tracking-widest uppercase mb-5 shadow-sm border border-[#D9A93A]/30">
            <span className="w-2 h-2 rounded-full bg-[#D9A93A]" />
            <span>DISCOVER • EARN • INFLUENCE</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[60px] leading-[1.1] font-extrabold text-[#0A1B3C] dark:text-white tracking-tight mb-5 uppercase">
            <span>TALENT IS </span><br className="hidden sm:inline" />
            <span>EVERYWHERE.</span><br />
            <span className="relative inline-block text-[#D9A93A]">
              OPPORTUNITY IS NOT.
              <svg 
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-3.5 text-[#D9A93A]" 
                viewBox="0 0 300 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path d="M2.5 9.5C80 2.5 220 2 297.5 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-7 font-normal">
            Rewaiq connects young people, creators, students and brands to opportunities to discover, participate, earn and grow.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
            <button
              type="button"
              onClick={handlePrimaryJoin}
              className="inline-flex items-center justify-center gap-2.5 bg-[#D9A93A] hover:bg-[#c4952e] text-[#0A1B3C] font-extrabold uppercase tracking-wider text-xs sm:text-sm px-7 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Join Rewaiq</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/opportunities"
              onClick={handleExploreClick}
              className="inline-flex items-center justify-center gap-2 bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-300 dark:border-white/20 text-[#0A1B3C] dark:text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm px-6 py-3.5 sm:py-4 rounded-xl transition-all"
            >
              <Compass className="w-4 h-4 text-[#D9A93A]" />
              <span>Explore Opportunities</span>
            </Link>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wide">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Built for young people. Built around opportunity.</span>
          </div>

          {/* Metric Badges */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/10 grid grid-cols-3 gap-4 w-full max-w-lg">
            <div>
              <p className="font-extrabold text-xl sm:text-2xl text-[#0A1B3C] dark:text-white font-mono">Digital</p>
              <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">Core Web &amp; Mobile</p>
            </div>
            <div>
              <p className="font-extrabold text-xl sm:text-2xl text-[#D9A93A] font-mono">Tasks &amp; Coins</p>
              <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">Earn from activity</p>
            </div>
            <div>
              <p className="font-extrabold text-xl sm:text-2xl text-[#0A1B3C] dark:text-white font-mono">Hub</p>
              <p className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 mt-0.5">Physical learning layer</p>
            </div>
          </div>

        </div>

        {/* Right Column: Platform Preview Frame */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#0F2657]/20 to-[#D9A93A]/20 rounded-3xl blur-2xl" />

          <div className="relative bg-[#0A1B3C] rounded-[28px] sm:rounded-[32px] p-4 sm:p-5 shadow-2xl border-4 border-slate-800 text-white max-w-[420px] mx-auto">
            
            {/* Phone Top Bar */}
            <div className="flex items-center justify-between px-3 py-2 mb-3 border-b border-slate-700/60 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="font-mono text-slate-300 font-semibold">rewaiq.com.ng</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-[10px] font-mono text-[#D9A93A] bg-[#D9A93A]/15 px-1.5 py-0.5 rounded font-bold">LIVE</span>
                <Wifi className="w-3 h-3" />
                <Battery className="w-3 h-3" />
              </div>
            </div>

            {/* User Profile Card */}
            <div className="bg-gradient-to-r from-[#0F2657] to-[#163a7a] p-3.5 sm:p-4 rounded-2xl border border-[#D9A93A]/30 mb-3 sm:mb-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#D9A93A]/20 border border-[#D9A93A] flex items-center justify-center text-[#F0C860] font-bold text-sm">
                    AO
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-tight">Amaka Okoro</h4>
                    <p className="text-[10px] text-[#F0C860]">Creator &amp; Student &bull; Verified</p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30 font-mono">Active</span>
              </div>

              {/* Wallet Card */}
              <div className="bg-[#0A1B3C]/80 rounded-xl p-2.5 flex items-center justify-between mt-2 border border-slate-700">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Rewaiq Wallet</span>
                  <span className="text-lg font-extrabold text-[#F0C860] font-mono">14,850 <span className="text-xs font-normal text-white">Coins</span></span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 font-semibold block">+₦14,850 value</span>
                  <span className="text-[9px] text-slate-400">Direct withdrawal</span>
                </div>
              </div>
            </div>

            {/* Task Item */}
            <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 mb-3">
              <div className="flex items-center justify-between text-[11px] mb-1.5">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <ListCheck className="w-3.5 h-3.5 text-[#D9A93A]" />
                  Verified Brand Task
                </span>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">+500 Coins</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-slate-100">Fintech User Experience Review</p>
                  <p className="text-[10px] text-slate-400">Open to Students &bull; 6 mins</p>
                </div>
                <button
                  type="button"
                  onClick={handlePrimaryJoin}
                  className="bg-[#D9A93A] text-[#0A1B3C] font-bold text-[10px] px-3 py-1.5 rounded-lg cursor-pointer"
                >
                  Participate
                </button>
              </div>
            </div>

            {/* Stream Campaign */}
            <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 mb-3">
              <div className="flex items-center justify-between text-[11px] mb-2">
                <span className="text-[#F0C860] font-bold flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-[#D9A93A]" />
                  Stream-to-Earn Campaign
                </span>
                <span className="text-[10px] bg-[#D9A93A]/20 text-[#F0C860] px-2 py-0.5 rounded font-mono">+120 Coins/play</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/80 p-2 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-700 to-[#0A1B3C] flex items-center justify-center text-white text-xs font-bold">
                  <Play className="w-3.5 h-3.5 fill-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-white truncate">Ogene Vibes EP &mdash; Premiere</p>
                  <p className="text-[10px] text-slate-400">Chidi Blaze</p>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">Live</span>
              </div>
            </div>

            {/* Hub Session */}
            <div className="bg-slate-900/90 rounded-2xl p-3 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-[#D9A93A] flex items-center justify-center text-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Innovation Hub Session</p>
                  <p className="text-[9px] text-slate-400">Web &amp; Tech Track Workshop</p>
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#F0C860] border border-[#D9A93A]/40 px-2 py-0.5 rounded">Enrolling</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}