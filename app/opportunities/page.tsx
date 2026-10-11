import Header from "@/components/header";
import Footer from "@/components/footer";
import { Compass, Coins, Calendar, ArrowRight, Tag } from "lucide-react";

export const metadata = {
  title: "Opportunities Board | Rewaiq Technologies",
  description: "Browse live opportunities, verified student tasks, brand campaigns, and learning gigs on Rewaiq.",
};

const listings = [
  {
    title: "Fintech User Experience Review",
    category: "Brand Task",
    reward: "+500 Coins",
    cadence: "Open to Students &bull; 6 mins",
    desc: "Test and review an onboarding workflow for a verified fintech partner.",
  },
  {
    title: "Ogene Vibes EP — Single Premiere",
    category: "Stream Campaign",
    reward: "+120 Coins/play",
    cadence: "Music Discovery &bull; Active",
    desc: "Stream and provide feedback on the latest release by emerging Nigerian creator Chidi Blaze.",
  },
  {
    title: "Aba Innovation Hub Web Track",
    category: "Tech Program",
    reward: "Certified Milestone",
    cadence: "Aba Physical Cohort &bull; Weekly",
    desc: "Join hands-on software development training at 1 Yellow Avenue, Aba.",
  },
  {
    title: "Campus Ambassador Cohort 2",
    category: "Leadership",
    reward: "Monthly Stipend &amp; Merch",
    cadence: "Tertiary Institutions &bull; Rolling",
    desc: "Lead student engagement and opportunity dissemination on your tertiary campus.",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />

      <section className="py-20 lg:py-24 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A93A]/30 bg-[#D9A93A]/10 px-3.5 py-1 text-xs font-bold text-[#D9A93A] uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              LIVE DISCOVERY
            </div>
            <h1 className="text-4xl font-extrabold uppercase text-[#0A1B3C] dark:text-white mb-4">
              Explore Opportunities
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Discover verified digital tasks, music campaigns, learning tracks, and campus leadership openings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listings.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-6 shadow-sm flex flex-col justify-between hover:border-[#D9A93A] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D9A93A] bg-[#D9A93A]/10 px-2.5 py-1 rounded">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                      {item.reward}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-[#0A1B3C] dark:text-white">{item.title}</h3>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-3" dangerouslySetInnerHTML={{ __html: item.cadence }} />
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{item.desc}</p>
                </div>

                <a
                  href="https://app.rewaiq.com.ng"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A1B3C] dark:bg-white/10 py-3 text-xs font-bold text-white hover:bg-[#D9A93A] hover:text-[#060F22] transition-colors"
                >
                  <span>Participate on App</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}