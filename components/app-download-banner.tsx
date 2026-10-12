"use client";

import React from "react";
import { Smartphone, Download, ArrowRight, CheckCircle2, Sparkles, Globe } from "lucide-react";

export default function AppDownloadBanner() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-[#061024] border-t border-slate-200 dark:border-white/10 text-slate-800 dark:text-white transition-colors" id="download">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl overflow-hidden border border-[#D9A93A]/30 bg-gradient-to-br from-[#0A1B3C] via-[#0F2657] to-[#0A1B3C] text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D9A93A]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A93A]/40 bg-[#D9A93A]/15 px-3.5 py-1 text-xs font-bold text-[#F0C860] uppercase mb-4">
                <Smartphone className="w-3.5 h-3.5 text-[#D9A93A]" />
                CROSS-PLATFORM ACCESS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-4">
                Access Rewaiq on any device. <br />
                <span className="text-[#D9A93A]">No heavy downloads needed.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
                The Rewaiq Web App (PWA) is lightweight, fast, and works seamlessly across Android, iOS, and desktop browsers. Install it directly to your home screen or launch it instantly.
              </p>

              {/* Instant Access Button */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a
                  href="https://app.rewaiq.com.ng"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#D9A93A] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#061024] hover:bg-[#F0C860] transition-all shadow-lg active:scale-95"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Web App (Instant)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Google Play & App Store Badges with Coming Soon */}
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 opacity-80 cursor-default">
                    <Download className="w-4 h-4 text-[#D9A93A]" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-wider text-slate-400">Google Play</div>
                      <div className="text-[10px] font-bold text-[#F0C860]">Coming Soon</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-slate-300 opacity-80 cursor-default">
                    <Download className="w-4 h-4 text-[#D9A93A]" />
                    <div className="text-left">
                      <div className="text-[9px] uppercase tracking-wider text-slate-400">App Store</div>
                      <div className="text-[10px] font-bold text-[#F0C860]">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Install PWA Benefit Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant home screen install (Add to Home)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Saves data and device storage space</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real-time wallet coin updates &amp; alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Works on Android, iPhone, Mac &amp; PC</span>
                </div>
              </div>
            </div>

            {/* Right Preview Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl border border-white/10 bg-[#061024]/80 p-5 w-full max-w-sm backdrop-blur">
                <div className="text-xs font-mono font-bold text-[#D9A93A] mb-2 uppercase">How to Install PWA</div>
                <ol className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D9A93A]/20 text-[#D9A93A] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                    <span>Open <strong>app.rewaiq.com.ng</strong> in Chrome or Safari.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D9A93A]/20 text-[#D9A93A] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                    <span>Tap browser menu (⋮ on Android or Share icon on iPhone).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-[#D9A93A]/20 text-[#D9A93A] flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                    <span>Select <strong>"Install App"</strong> or <strong>"Add to Home Screen"</strong>.</span>
                  </li>
                </ol>
                <div className="mt-4 pt-3 border-t border-white/10 text-center">
                  <span className="text-[10px] text-emerald-400 font-semibold">&bull; Fast &bull; Offline Capable &bull; Secure</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}