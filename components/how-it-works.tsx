import React from "react";
import { Compass, Sparkles, TrendingUp, ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Discover",
    sub: "Find verified activities",
    desc: "Browse curated programs, campus tasks, creative campaigns, and learning tracks tailored to your skills.",
    icon: Compass,
  },
  {
    num: "02",
    title: "Participate",
    sub: "Take action & submit",
    desc: "Complete digital challenges, engage in brand campaigns, stream creator releases, and attend hub sessions.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Earn & Grow",
    sub: "Unlock rewards & skills",
    desc: "Accumulate Rewaiq Coins, convert earnings to real value, and gain verified industry portfolio credentials.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-[#0A1B3C] border-b border-slate-200 dark:border-white/10 transition-colors" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] font-mono">Simple & Verified</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3C] dark:text-white uppercase mt-2 mb-3">
            How Rewaiq Works
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            A three-step progression from initial discovery to measurable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D204A] p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#0A1B3C] dark:text-[#D9A93A]">{s.num}</span>
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-[#D9A93A] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1B3C] dark:text-white uppercase mb-1">{s.title}</h3>
                  <div className="text-xs font-bold text-[#D9A93A] uppercase tracking-wider mb-3">{s.sub}</div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}