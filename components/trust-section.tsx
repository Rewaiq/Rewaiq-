import React from "react";

const credentials = [
  {
    title: "CAC Registered",
    subtitle: "RC: 9137882",
    description: "Corporate Affairs Commission Federal Republic of Nigeria",
  },
  {
    title: "NITDA Startup Label",
    subtitle: "Nigeria Startup Act",
    description: "Recognized national technology startup entity",
  },
  {
    title: "SMEDAN Registered",
    subtitle: "MSME National Database",
    description: "Small and Medium Enterprises Development Agency",
  },
  {
    title: "3MTT Partner",
    subtitle: "Federal Ministry of Comm & Tech",
    description: "Supporting digital skills and 3 Million Tech Talents",
  },
  {
    title: "African Impact Challenge",
    subtitle: "Builder Track Alum",
    description: "Pan-African technological innovation initiative",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-white/10 bg-[#0F2657] py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] mb-1">
            Institutional Trust & Accreditations
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-white">
            Built in Nigeria. Growing through opportunity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {credentials.map((cred) => (
            <div
              key={cred.title}
              className="flex flex-col justify-center rounded-2xl border border-white/10 bg-[#0A1B3C]/60 p-4 text-center hover:border-[#D9A93A]/40 transition-colors"
            >
              <div className="text-sm font-bold text-white mb-1">{cred.title}</div>
              <div className="text-xs font-semibold text-[#D9A93A] mb-1">{cred.subtitle}</div>
              <p className="text-[11px] text-slate-400 leading-tight">{cred.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}