import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = { title: "Terms of Service | Rewaiq Technologies" };

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-[#0A1B3C] dark:text-white uppercase mb-4">Terms of Service</h1>
        <p className="text-xs text-slate-500 mb-8">Last Updated: October 2026</p>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>Welcome to Rewaiq Technologies Ltd. By accessing or using our website, applications, or campus programs, you agree to comply with these terms.</p>
          <h2 className="text-base font-bold text-[#0A1B3C] dark:text-white mt-4">1. Eligibility</h2>
          <p>Users must provide accurate information when registering for tasks, creator campaigns, or the Campus Ambassador Program.</p>
          <h2 className="text-base font-bold text-[#0A1B3C] dark:text-white mt-4">2. Task Verification &amp; Rewards</h2>
          <p>All platform tasks and coin rewards are subject to anti-fraud review to preserve integrity for brands and youth participants.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}