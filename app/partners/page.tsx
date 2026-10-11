"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Handshake, Megaphone, Laptop, Sprout, ArrowRight, X, CheckCircle2, Send, Building2 } from "lucide-react";

const partnerPillars = [
  {
    title: "Partner with Rewaiq",
    desc: "Collaborate on youth development initiatives, nationwide student challenges, and talent pipelines.",
    icon: Handshake,
    action: "Strategic Partnership",
  },
  {
    title: "Run a Campaign",
    desc: "Launch verified tasks, marketing challenges, and beta product tests with active young people.",
    icon: Megaphone,
    action: "Brand Campaign",
  },
  {
    title: "Work With Our Team",
    desc: "Engage our software development team to build production web platforms and enterprise digital tools.",
    icon: Laptop,
    action: "Software Services",
  },
  {
    title: "Support Youth Development",
    desc: "Sponsor learning equipment, coding scholarships, and digital training for young people at the Hub.",
    icon: Sprout,
    action: "Sponsorship & CSR",
  },
];

export default function PartnersPage() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    partnershipType: "Brand Campaign",
    budgetTimeline: "",
    details: "",
  });

  const handleOpenForm = (type: string) => {
    setFormData((prev) => ({ ...prev, partnershipType: type }));
    setSelectedAction(type);
    setIsSubmitted(false);
  };

  const handleClose = () => {
    setSelectedAction(null);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`B2B Partnership Inquiry: ${formData.companyName} (${formData.partnershipType})`);
    const mailtoBody = encodeURIComponent(
      `Company / Brand: ${formData.companyName}\nContact Person: ${formData.contactPerson}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPartnership Category: ${formData.partnershipType}\nEstimated Timeline / Budget: ${formData.budgetTimeline}\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:info@rewaiq.com.ng?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />

      {/* Hero */}
      <section className="py-20 lg:py-28 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9A93A]/30 bg-[#D9A93A]/10 px-4 py-1.5 text-xs font-bold text-[#D9A93A] uppercase mb-4">
              <Handshake className="w-4 h-4" />
              BUSINESSES &amp; ORGANIZATIONS
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold uppercase text-[#0A1B3C] dark:text-white mb-6 leading-tight">
              Need young talent, digital skills <br />
              <span className="text-[#D9A93A]">or fresh ideas?</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Rewaiq helps businesses, institutions, and brands connect with emerging talent and run verified digital campaigns with real youth participants.
            </p>
            <button
              type="button"
              onClick={() => handleOpenForm("Strategic Partnership")}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A1B3C] dark:bg-[#D9A93A] px-8 py-4 text-sm font-bold text-white dark:text-[#060F22] hover:bg-[#0F2657] dark:hover:bg-[#F0C860] transition-all shadow-md active:scale-95"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4 B2B Cards */}
      <section className="py-20 bg-slate-50 dark:bg-[#0D204A]/40 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-7 shadow-sm flex flex-col justify-between hover:border-[#D9A93A] transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#0A1B3C] text-white flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-[#D9A93A]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0A1B3C] dark:text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleOpenForm(p.action)}
                    className="mt-6 text-xs font-bold text-[#0A1B3C] dark:text-[#D9A93A] flex items-center gap-1.5 hover:underline"
                  >
                    <span>{p.action}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL PARTNER INTAKE FORM */}
      {selectedAction && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#D9A93A] bg-[#D9A93A]/10 px-2.5 py-0.5 rounded">
                  B2B Partnership Intake
                </span>
                <h3 className="text-xl font-bold text-[#0A1B3C] dark:text-white mt-1">
                  {formData.partnershipType}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-[#0A1B3C] dark:text-white">Inquiry Transmitted!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Your inquiry email was generated for <strong>info@rewaiq.com.ng</strong>. The partnerships lead will respond within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-xl bg-[#D9A93A] px-6 py-2.5 text-xs font-bold text-[#060F22] hover:bg-[#F0C860]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sterling Ventures"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Alabi"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. partnerships@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +234 803 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Category
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.partnershipType}
                      className="w-full rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#060F22] px-3.5 py-2 text-xs font-semibold text-[#D9A93A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Target Timeline / Scope
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Q4 Launch / 1 Month"
                      value={formData.budgetTimeline}
                      onChange={(e) => setFormData({ ...formData, budgetTimeline: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Describe your campaign or collaboration goals
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us what you want to achieve or the kind of student/youth demographic you want to reach..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A93A] py-3.5 text-xs font-bold uppercase tracking-wider text-[#060F22] hover:bg-[#F0C860] shadow-md transition-all active:scale-[0.99] mt-2"
                >
                  <span>Submit Partnership Proposal</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}