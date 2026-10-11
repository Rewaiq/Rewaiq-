import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";
import HowItWorks from "@/components/how-it-works";
import PlatformBento from "@/components/platform-bento";
import CreatorSection from "@/components/creator-section";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, Compass, Sparkles, Building2, Layers } from "lucide-react";

export default function Home() {
  const pathways = [
    {
      role: "Students",
      action: "Discover opportunities",
      href: "/opportunities",
      desc: "Find programs, campus tasks and activities designed to help you grow.",
      icon: Compass,
    },
    {
      role: "Creators & Artists",
      action: "Showcase talent",
      href: "/artists",
      desc: "Build visibility, participate in campaigns and access monetization channels.",
      icon: Sparkles,
    },
    {
      role: "Young People",
      action: "Earn & participate",
      href: "/opportunities",
      desc: "Complete verified activities, learn digital skills and unlock rewards.",
      icon: Layers,
    },
    {
      role: "Brands & SMEs",
      action: "Reach emerging talent",
      href: "/partners",
      desc: "Engage youth communities, launch campaigns and recruit digital skills.",
      icon: Building2,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#0A1B3C]">
      <Header />
      <Hero />
      <TrustSection />
      
      <section className="bg-[#0A1B3C] py-20" id="opportunities">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A]">Opportunity First</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              One platform. More ways to move forward.
            </h2>
            <p className="text-sm text-slate-300">
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
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0D204A] p-6 hover:border-[#D9A93A] hover:-translate-y-1 transition-all"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-[#D9A93A]/10 border border-[#D9A93A]/20 flex items-center justify-center text-[#D9A93A] mb-4 group-hover:bg-[#D9A93A] group-hover:text-[#060F22] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#D9A93A] mb-1">{p.role}</h3>
                    <div className="text-xs font-semibold text-slate-200 mb-2">{p.action}</div>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
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

      <section className="bg-[#0F2657] py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A]">Rewaiq CAP</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              Become a Rewaiq Campus Ambassador
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Represent Rewaiq on your tertiary campus, connect students to verified opportunities, and develop practical leadership experience.
            </p>
          </div>
          <Link
            href="/campus-ambassadors"
            className="inline-flex items-center gap-2 rounded-xl bg-[#D9A93A] px-8 py-3.5 text-sm font-bold text-[#060F22] hover:bg-[#F0C860] transition-all shrink-0"
          >
            <span>Become an Ambassador</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#0A1B3C] py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 rounded-3xl border border-white/10 bg-[#0D204A] p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A]">Aba Innovation Hub</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              From the digital world to the real world.
            </h2>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              The Rewaiq Innovation Hub in Aba gives young people a physical space for digital skills training, software development, dedicated workspace, and community mentorship.
            </p>
          </div>
          <Link
            href="/hub"
            className="inline-flex items-center gap-2 rounded-xl border border-[#D9A93A] bg-[#D9A93A]/10 px-6 py-3.5 text-sm font-bold text-[#F0C860] hover:bg-[#D9A93A] hover:text-[#060F22] transition-all shrink-0"
          >
            <span>Visit the Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0A1B3C] to-[#060F22] py-24 text-center border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Your next opportunity could start here.
          </h2>
          <p className="text-base text-slate-300 mb-8 max-w-xl mx-auto">
            Discover what you can do with Rewaiq.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.rewaiq.com.ng"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A93A] px-8 py-3.5 text-sm font-bold text-[#060F22] hover:bg-[#F0C860] transition-all"
            >
              <span>Join Rewaiq</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/opportunities"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-all"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}