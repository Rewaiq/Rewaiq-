import Header from "@/components/header";
import Footer from "@/components/footer";
import { Music, Headphones, Flame, Crosshair, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Rewaiq for Artists & Creators | Showcase, Stream & Monetize",
  description: "Rewaiq gives emerging artists and creators a place to get discovered, participate in sponsored campaigns, build an audience, and monetize.",
};

export default function ArtistsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A93A]/30 bg-[#D9A93A]/10 px-4 py-1.5 text-xs font-bold tracking-wider text-[#D9A93A] uppercase mb-6">
              <Music className="w-4 h-4 text-[#D9A93A]" />
              FOR NIGERIAN ARTISTS &amp; CREATORS
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 uppercase text-[#0A1B3C] dark:text-white leading-[1.12]">
              Your talent deserves <br />
              <span className="text-[#D9A93A]">more than likes.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Rewaiq connects independent musicians, digital creators, and designers with real audience engagement campaigns, verified streams, and paid sponsor partnerships.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.rewaiq.com.ng/register?type=artist"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A93A] px-8 py-4 text-sm font-bold text-[#060F22] hover:bg-[#F0C860] transition-all"
              >
                <span>Join Creator Roster</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@rewaiq.com.ng?subject=Artist%20Submission"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-8 py-4 text-sm font-semibold text-[#0A1B3C] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              >
                Submit Demo / EP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Creator Pillars */}
      <section className="py-20 bg-slate-50 dark:bg-[#0D204A]/40 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1B3C] dark:text-white">Stream-to-Earn</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Listeners discover and stream your releases as part of verified campaigns, giving your music active initial listener numbers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-4">
                <Crosshair className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1B3C] dark:text-white">Brand Sponsorships</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Brands launch marketing campaigns on Rewaiq seeking authentic young creators for user-generated content and soundtrack placements.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-7 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#0A1B3C] dark:text-white">Audience Conversion</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Direct links to Spotify, Apple Music, YouTube, and Audiomack convert Rewaiq task participants into long-term organic fans.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}