import React from "react";
import { Compass, CheckSquare, Coins, Megaphone, UserCheck, Share2 } from "lucide-react";

const features = [
  {
    title: "Opportunities",
    desc: "Discover verified digital and physical opportunities from Rewaiq and partner organizations.",
    tag: "Core Engine",
    icon: Compass,
  },
  {
    title: "Verified Tasks",
    desc: "Engage with bite-sized tasks, digital actions, and validated learning milestones.",
    tag: "Action",
    icon: CheckSquare,
  },
  {
    title: "Rewards & Wallet",
    desc: "Earn platform coins and rewards for eligible activities, redeemable within our network.",
    tag: "Monetization",
    icon: Coins,
  },
  {
    title: "Brand Campaigns",
    desc: "Participate in campaigns created by SMEs, brands, and institutional partners.",
    tag: "Engagement",
    icon: Megaphone,
  },
  {
    title: "Dynamic Profiles",
    desc: "Showcase your real skills, verified portfolio items, and creative work in one link.",
    tag: "Identity",
    icon: UserCheck,
  },
  {
    title: "Community Referrals",
    desc: "Invite peers, build your squad, and earn referral bonuses as your circle grows.",
    tag: "Network",
    icon: Share2,
  },
];

export default function PlatformBento() {
  return (
    <section className="bg-[#0A1B3C] py-20 lg:py-28" id="platform">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A]">The Platform</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Everything starts with an opportunity.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A digital foundation built to connect young Nigerian talent with actionable pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-[#0D204A] p-6 flex flex-col justify-between hover:border-[#D9A93A]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D9A93A] bg-[#D9A93A]/10 px-2 py-0.5 rounded">
                      {f.tag}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#D9A93A]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}