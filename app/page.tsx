import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";
import HowItWorks from "@/components/how-it-works";
import PlatformBento from "@/components/platform-bento";
import CreatorSection from "@/components/creator-section";
import AppDownloadBanner from "@/components/app-download-banner";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, Building2, Layers, CheckCircle2, Zap } from "lucide-react";

export default function Home() {
  const pathways = [
    {
      role: "Students",
      action: "Discover opportunities",
      href: "/opportunities",
      desc: "Find programs, campus tasks and activities designed to help you build experience and earn.",
      icon: Compass,
    },
    {
      role: "Creators & Artists",
      action: "Showcase talent",
      href: "/artists",
      desc: "Build visibility, distribute music, participate in campaigns and access monetization channels.",
      icon: Sparkles,
    },
    {
      role: "Young People",
      action: "Earn & participate",
      href: "/opportunities",
      desc: "Complete verified activities, acquire digital skills and convert rewards to real value.",
      icon: Layers,
    },
    {
      role: "Brands & SMEs",
      action: "Reach emerging talent",
      href: "/partners",
      desc: "Engage youth communities, launch campaigns and hire verified digital talent.",
      icon: Building2,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-900 dark:text-white transition-colors">
      
      {/* LIVE PLATFORM ANNOUNCEMENT BAR */}
      <div className="bg-[#0A1B3C] text-white border-b border-[#D9A93A]/30 px-4 py-2 text-center text-xs">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-2 font-medium">
          <span className="inline-flex items-center gap-1 bg-[#D9A93A] text-[#0A1B3C] px-2.5 py-0.5 rounded-full font-extrabold text-[10px] uppercase tracking-wider">
            <Zap className="w-3 h-3 fill-current" />
            NOW LIVE
          </span>
          <span className="text-slate-200">
            Rewaiq Web &amp; Mobile Platform is live. Explore verified tasks, earn rewards, and grow.
          </span>
          <a
            href="https://app.rewaiq.com.ng"
            className="text-[#F0C860] hover:text-white underline font-bold text-xs inline-flex items-center gap-1 ml-1"
          >
            <span>Launch App</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      <Header />
      <Hero />
      <TrustSection />

      {/* 4 User Pathways Section */}
      <section className="py-20 bg-slate-50 dark:bg-[#061024] border-b border-slate-200 dark:border-white/10 transition-colors" id="pathways">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] font-mono">Opportunity First</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3C] dark:text-white mt-2 mb-3">
              One platform. More ways to move forward.
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Connecting young talent and enterprises across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathways.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.role}
                  href={p.href}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-6 hover:border-[#D9A93A] hover:-translate-y-1 transition-all shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-4 group-hover:bg-[#D9A93A] group-hover:text-[#0A1B3C] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1B3C] dark:text-white group-hover:text-[#D9A93A] mb-1">{p.role}</h3>
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-200 mb-2">{p.action}</div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#D9A93A] group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks />
      <PlatformBento />
      <CreatorSection />

      {/* Campus Ambassador Program Callout */}
      <section className="bg-white dark:bg-[#0F2657] py-20 border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] font-mono">Rewaiq CAP</span>
            <h2 className="text-3xl font-extrabold text-[#0A1B3C] dark:text-white mt-2 mb-4">
              Become a Rewaiq Campus Ambassador
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Represent Rewaiq on your tertiary campus, connect students to verified opportunities, and develop practical leadership experience.
            </p>
          </div>
          <Link
            href="/campus-ambassadors"
            className="inline-flex items-center gap-2 rounded-xl bg-[#D9A93A] px-8 py-3.5 text-sm font-bold text-[#0A1B3C] hover:bg-[#F0C860] transition-all shrink-0 shadow-md"
          >
            <span>Apply Now (Open)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Hub Callout */}
      <section className="py-20 bg-slate-50 dark:bg-[#0A1B3C] border-t border-slate-200 dark:border-white/10 transition-colors">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] font-mono">Innovation Hub</span>
            <h2 className="text-3xl font-extrabold text-[#0A1B3C] dark:text-white mt-2 mb-4">
              From the digital world to the real world.
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              The Rewaiq Innovation Hub gives young people a dedicated physical space for software engineering, UI/UX, AI prompt training, co-working, and community mentorship.
            </p>
          </div>
          <Link
            href="/hub"
            className="inline-flex items-center gap-2 rounded-xl border border-[#D9A93A] bg-[#D9A93A]/10 px-6 py-3.5 text-sm font-bold text-[#D9A93A] hover:bg-[#D9A93A] hover:text-[#0A1B3C] transition-all shrink-0"
          >
            <span>Explore Hub Facilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FINAL LIVE CONVERSION CTA SECTION (REPLACED WAITLIST COUNTDOWN) */}
      <section className="bg-slate-900 dark:bg-[#060F22] text-white py-24 text-center border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D9A93A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A93A]/40 bg-[#D9A93A]/15 px-4 py-1.5 text-xs font-bold text-[#F0C860] uppercase mb-6">
            <Zap className="w-3.5 h-3.5 text-[#D9A93A] fill-current" />
            GET STARTED TODAY
          </div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 uppercase">
            Turn your potential into real progress.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Create your account in 2 minutes, explore verified campaigns, earn Rewaiq Coins, and build your digital footprint.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.rewaiq.com.ng"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A93A] px-9 py-4 text-sm font-bold uppercase tracking-wider text-[#0A1B3C] hover:bg-[#F0C860] shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Join Rewaiq Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/opportunities"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              <Compass className="w-4 h-4 text-[#D9A93A]" />
              <span>Explore Opportunities</span>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero fees to join. Instant access to live campaigns.</span>
          </div>
        </div>
      </section>

      <AppDownloadBanner />
      <Footer />
    </main>
  );
}