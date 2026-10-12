import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Building2, Users, Rocket, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Rewaiq Technologies",
  description: "Learn about Rewaiq Technologies Ltd, our mission to connect youth to opportunities, and our physical innovation hub in Aba.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-[#E2E8F0] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D9A93A]/30 bg-[#FAF4E3] dark:bg-[#D9A93A]/10 px-4 py-1.5 text-xs font-bold text-[#D9A93A] uppercase mb-4">
              <Building2 className="w-4 h-4 text-[#D9A93A]" />
              ABOUT REWAIQ TECHNOLOGIES
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-[#0A1B3C] dark:text-white mb-6 leading-tight">
              Talent is everywhere. <br />
              <span className="text-[#D9A93A]">Opportunity is not.</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Rewaiq Technologies Ltd (RC: 9137882) is a technology enterprise connecting young people, creators, students, and businesses across Nigeria to verified opportunities to discover, participate, earn, and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8FAFC] dark:bg-[#0D204A]/40 border-b border-[#E2E8F0] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#0D204A] p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0A1B3C] dark:text-white mb-3">Our Mission</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              To build accessible digital pathways and physical infrastructure that empower African youth with practical technology skills, verifiable tasks, and direct income opportunities.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#0D204A] p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-[#0A1B3C] dark:text-white mb-3">Institutional Trust</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Formally registered with the Corporate Affairs Commission (CAC), recognized under the Nigeria Startup Act with the NITDA Startup Label, and enrolled with SMEDAN.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}