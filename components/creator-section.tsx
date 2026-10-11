"use client";

import React from "react";
import Link from "next/link";
import { 
  Music, 
  Headphones, 
  Crosshair, 
  Disc3, 
  ArrowRight, 
  Mic2, 
  Play 
} from "lucide-react";

export default function CreatorSection() {
  return (
    <section id="artists" className="py-24 bg-[#0A1B3C] text-white relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-24 right-10 w-96 h-96 bg-[#D9A93A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-10 w-96 h-96 bg-[#0F2657] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column */}
        <div className="lg:col-span-7 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A93A]/20 text-[#F0C860] text-xs font-bold uppercase tracking-wider mb-6 border border-[#D9A93A]/40">
            <Music className="w-3.5 h-3.5 text-[#D9A93A]" />
            <span>FOR NIGERIAN ARTISTS & CREATORS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight uppercase">
            Are you an artist or creator?
          </h2>

          <p className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            &laquo;Your talent deserves more than likes. Rewaiq gives emerging artists and creators a place to get discovered, participate in opportunities and connect with an audience.&raquo;
          </p>

          {/* 3 Creator Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
              <Headphones className="w-5 h-5 text-[#D9A93A] mb-2" />
              <h4 className="text-sm font-bold text-white">Stream-to-Earn</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Listeners participate in campaign tasks; artists build verified reach.
              </p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
              <Crosshair className="w-5 h-5 text-[#D9A93A] mb-2" />
              <h4 className="text-sm font-bold text-white">Brand Collabs</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Connect with brands looking for original creative assets and young talent.
              </p>
            </div>

            <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700">
              <Disc3 className="w-5 h-5 text-[#D9A93A] mb-2" />
              <h4 className="text-sm font-bold text-white">Talent Showcases</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Direct visibility in front of active industry and community programs.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/artists"
              className="inline-flex items-center gap-3 bg-[#D9A93A] hover:bg-[#c4952e] text-[#0A1B3C] font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all"
            >
              <span>Join as an Artist / Creator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-xs text-slate-400">Join our growing creative roster.</span>
          </div>
        </div>

        {/* Right Column: Artist Profile Mockup Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-slate-900 rounded-3xl p-6 border-2 border-slate-700 shadow-2xl relative overflow-hidden">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-[#F0C860] font-bold">REWAIQ CREATOR PROFILE</span>
              <span className="text-[10px] bg-[#D9A93A] text-[#0A1B3C] font-extrabold px-2 py-0.5 rounded">
                FEATURED
              </span>
            </div>

            {/* Banner & Avatar */}
            <div className="relative mb-4">
              <div className="h-28 rounded-2xl bg-gradient-to-r from-purple-800 via-indigo-900 to-[#0F2657] flex items-end p-3">
                <span className="text-xs text-slate-300 font-mono">Genre: Afro-Fusion</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-[#D9A93A] border-4 border-slate-900 -mt-8 ml-4 flex items-center justify-center text-[#0A1B3C] font-extrabold shadow-lg">
                <Mic2 className="w-7 h-7 text-[#0A1B3C]" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="px-2">
              <h4 className="text-xl font-bold text-white">Somtochukwu (Somto)</h4>
              <p className="text-xs text-slate-400 mb-3">Recording Artist &amp; Songwriter &bull; Aba, Nigeria</p>

              {/* 3 Metrics */}
              <div className="grid grid-cols-3 gap-2 bg-slate-800/80 p-3 rounded-xl text-center mb-4">
                <div>
                  <p className="text-sm font-mono font-bold text-white">28.4k</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-tight">Rewaiq Streams</p>
                </div>
                <div>
                  <p className="text-sm font-mono font-bold text-[#D9A93A]">Verified</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-tight">Creator Status</p>
                </div>
                <div>
                  <p className="text-sm font-mono font-bold text-emerald-400">Active</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-tight">Campaigns</p>
                </div>
              </div>

              {/* Audio Snippet Player */}
              <div className="bg-slate-800 p-3 rounded-xl flex items-center gap-3">
                <button 
                  type="button"
                  aria-label="Play sample"
                  className="w-8 h-8 rounded-full bg-[#D9A93A] text-[#0A1B3C] flex items-center justify-center text-xs shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-[#0A1B3C] ml-0.5" />
                </button>
                <div className="flex-1">
                  <div className="flex justify-between text-[10px] text-slate-300 mb-1">
                    <span className="font-medium">New Dawn (Single)</span>
                    <span className="font-mono text-slate-400">2:44</span>
                  </div>
                  <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#D9A93A] h-full w-[45%]" />
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}