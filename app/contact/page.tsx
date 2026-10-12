"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@rewaiq.com.ng?subject=${encodeURIComponent("Contact Inquiry: " + formData.name)}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />

      <section className="py-20 lg:py-28 border-b border-[#E2E8F0] dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] font-mono">GET IN TOUCH</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0A1B3C] dark:text-white mt-2 mb-6 uppercase">
              Contact Rewaiq
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Have questions about our programs, tasks, campaigns, or the physical hub in Aba? We'd love to hear from you.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF4E3] dark:bg-white/10 flex items-center justify-center text-[#D9A93A]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">General Inquiries</span>
                  <a href="mailto:info@rewaiq.com.ng" className="font-semibold hover:text-[#D9A93A]">info@rewaiq.com.ng</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF4E3] dark:bg-white/10 flex items-center justify-center text-[#D9A93A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Hub Facility</span>
                  <span className="font-semibold">1 Yellow Avenue, Aba, Abia State</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-[#0D204A] p-8 sm:p-10 shadow-lg">
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold text-[#0A1B3C] dark:text-white">Message Prepared!</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">Your email client has been opened to dispatch your message.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Solomon Ikedi"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-[#D9A93A] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. hello@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-[#D9A93A] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-white dark:bg-[#0A1B3C] px-4 py-3 text-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-[#D9A93A] outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#D9A93A] py-3.5 text-xs font-bold uppercase tracking-wider text-[#0A1B3C] hover:bg-[#F0C860] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}