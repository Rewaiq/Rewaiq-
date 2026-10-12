import React from "react";
import { ShieldCheck, Award, CheckCircle2, Sparkles, Building2 } from "lucide-react";

const trustBadges = [
  {
    title: "CAC Registered",
    label: "Corporate Affairs Commission",
    sub: "Federal Republic of Nigeria",
    icon: ShieldCheck,
  },
  {
    title: "NITDA Startup Label",
    label: "Nigeria Startup Act",
    sub: "Recognized startup entity",
    icon: Award,
  },
  {
    title: "SMEDAN Registered",
    label: "Small & Medium Enterprises",
    sub: "Development Agency",
    icon: Building2,
  },

  {
    title: "African Impact Challenge",
    label: "Builder Track Alum",
    sub: "Pan-African innovation initiative",
    icon: Sparkles,
  },
];

export default function TrustSection() {
  return (
    <section className="border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#061024] py-8 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A]/60 p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-2.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0A1B3C] dark:text-white uppercase tracking-tight">{badge.title}</h4>
                  <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 mt-0.5">{badge.label}</p>
                </div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2">{badge.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}