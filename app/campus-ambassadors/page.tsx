"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { GraduationCap, Award, Users, TrendingUp, CheckCircle2, ArrowRight, Send, Sparkles } from "lucide-react";

const pillars = [
  {
    num: "01",
    title: "Connect",
    desc: "Introduce students and campus creators to Rewaiq's earning and growth platform.",
  },
  {
    num: "02",
    title: "Promote",
    desc: "Share verified opportunities, student challenges, brand campaigns, and learning programs.",
  },
  {
    num: "03",
    title: "Build Community",
    desc: "Organize conversations, workshops, and peer activities across departments and student bodies.",
  },
  {
    num: "04",
    title: "Grow",
    desc: "Develop leadership credentials, digital marketing acumen, and direct access to Rewaiq leaders.",
  },
];

const perks = [
  "Direct monthly performance bonuses & coin rewards",
  "Official Rewaiq merchandise & campus representative credentials",
  "Priority access to tech internships and partner company opportunities",
  "Direct mentorship from the Rewaiq product and executive team",
  "Letter of recommendation and LinkedIn verification upon cohort completion",
];

export default function CampusAmbassadorsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    institution: "",
    departmentLevel: "",
    socialLinks: "",
    reason: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`CAP Application: ${formData.fullName} - ${formData.institution}`);
    const mailtoBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInstitution: ${formData.institution}\nDepartment & Level: ${formData.departmentLevel}\nSocial Profile/Handle: ${formData.socialLinks}\nWhy join:\n${formData.reason}`
    );
    window.location.href = `mailto:info@rewaiq.com.ng?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />

      {/* Hero with Open Now Tag */}
      <section className="relative py-20 lg:py-24 overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-extrabold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                APPLICATIONS OPEN NOW • 2026 COHORT
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500 dark:text-[#F0C860] uppercase">
                <GraduationCap className="w-3.5 h-3.5 text-[#D9A93A]" />
                REWAIQ CAP
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 uppercase text-[#0A1B3C] dark:text-white leading-[1.12]">
              Become a Rewaiq <br />
              <span className="text-[#D9A93A]">Campus Ambassador.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Represent Rewaiq on your tertiary campus, connect students to verified opportunities, grow your network, and build executive leadership experience.
            </p>

            <a
              href="#apply-form"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D9A93A] px-8 py-4 text-sm font-bold text-[#060F22] hover:bg-[#F0C860] transition-all shadow-md active:scale-95"
            >
              <span>Apply Now (Open)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 bg-slate-50 dark:bg-[#0D204A]/40 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A]">Role & Impact</span>
            <h2 className="text-3xl font-extrabold mt-2 text-[#0A1B3C] dark:text-white">What Ambassadors Do</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div
                key={p.num}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-6 shadow-sm hover:border-[#D9A93A] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0A1B3C] text-[#D9A93A] font-mono font-extrabold text-lg flex items-center justify-center mb-4">
                  {p.num}
                </div>
                <h3 className="text-lg font-bold text-[#0A1B3C] dark:text-white mb-2 uppercase">{p.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-form" className="py-20 bg-white dark:bg-[#0A1B3C] border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              ACCEPTING APPLICATIONS NOW
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3C] dark:text-white uppercase mb-2">
              Apply for Rewaiq CAP
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Fill out your details below to submit your candidacy for the upcoming campus cohort.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[#0A1B3C] dark:text-white mb-2">Application Transmitted!</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Your email client was triggered with your application data directed to info@rewaiq.com.ng. Our team will review your application and contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D204A] p-8 sm:p-10 shadow-lg space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ebuka Okafor"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ebuka@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 812 345 6789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Tertiary Institution *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UNN, FUTO, Nekede, ABSU, UNILAG"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Department & Current Level *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Computer Science, 300L"
                    value={formData.departmentLevel}
                    onChange={(e) => setFormData({ ...formData, departmentLevel: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                    Social Media Profile / Handle (X, IG, or LinkedIn)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. @ebuka_dev"
                    value={formData.socialLinks}
                    onChange={(e) => setFormData({ ...formData, socialLinks: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
                  Why do you want to be a Rewaiq Campus Ambassador? *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your campus reach, leadership experience, or why you're passionate about connecting students to opportunities..."
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A93A] py-4 text-sm font-bold uppercase tracking-wider text-[#060F22] hover:bg-[#F0C860] shadow-md transition-all active:scale-[0.99]"
              >
                <span>Submit Ambassador Application</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-slate-500 dark:text-slate-400">
                Applications reviewed on a rolling basis. All submissions receive direct confirmation via email.
              </p>
            </form>
          )}

        </div>
      </section>

      {/* Perks / Benefits */}
      <section className="py-20 bg-slate-50 dark:bg-[#0D204A]/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A]">Exclusive Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-6 text-[#0A1B3C] dark:text-white">
              Why Join the Ambassador Network?
            </h2>
            <div className="space-y-4">
              {perks.map((perk) => (
                <div key={perk} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 dark:text-slate-300">{perk}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 to-[#0A1B3C] text-white p-8 lg:p-10 shadow-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D9A93A] uppercase mb-3">
                <Award className="w-4 h-4 text-[#D9A93A]" />
                Cohort Eligibility
              </div>
              <h3 className="text-2xl font-bold mb-4">Who Can Apply?</h3>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed mb-6">
                <li>&bull; Registered students at accredited Nigerian universities, polytechnics, or colleges</li>
                <li>&bull; Active community organizers, creators, or student club representatives</li>
                <li>&bull; Passionate about digital technology, career growth, and youth empowerment</li>
              </ul>
              <a
                href="#apply-form"
                className="w-full text-center block rounded-xl bg-[#D9A93A] py-3.5 text-xs font-bold uppercase tracking-wider text-[#060F22] hover:bg-[#F0C860] transition-colors"
              >
                Go To Application Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}