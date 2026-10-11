import React from "react";

const steps = [
  {
    step: "01",
    title: "Discover",
    text: "Find opportunities, campaigns, tasks, communities and verified partners relevant to your goals.",
  },
  {
    step: "02",
    title: "Participate",
    text: "Complete tasks, showcase your skills, join creative campaigns and engage directly with opportunities.",
  },
  {
    step: "03",
    title: "Earn & Grow",
    text: "Earn coins and rewards, build practical experience, increase your visibility and unlock bigger doors.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0A1B3C] py-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] mb-2">Simple Process</h2>
        <p className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
          How Rewaiq Works
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-white/10 bg-[#0D204A] p-8 text-left relative overflow-hidden">
              <span className="text-5xl font-extrabold text-white/10 absolute right-4 top-2 select-none">
                {s.step}
              </span>
              <div className="text-[#D9A93A] font-bold text-lg mb-2">{s.step} - {s.title}</div>
              <p className="text-sm text-slate-300 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}