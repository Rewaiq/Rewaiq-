import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = { title: "Privacy Policy | Rewaiq Technologies" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-extrabold text-[#0A1B3C] dark:text-white uppercase mb-4">Privacy Policy</h1>
        <p className="text-xs text-slate-500 mb-8">Last Updated: October 2026</p>
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>Rewaiq Technologies Ltd respects your privacy and is committed to protecting your personal data in accordance with the Nigeria Data Protection Act (NDPA).</p>
          <h2 className="text-base font-bold text-[#0A1B3C] dark:text-white mt-4">1. Data We Collect</h2>
          <p>We collect information you provide directly during account registration, hub inquiries, or ambassador applications.</p>
          <h2 className="text-base font-bold text-[#0A1B3C] dark:text-white mt-4">2. Contact</h2>
          <p>For data inquiries, contact info@rewaiq.com.ng.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}