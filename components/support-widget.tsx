"use client";

import React, { useState } from "react";
import { MessageSquare, X, Send, Mail, MessageCircle, HelpCircle, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How do Rewaiq Coins work?",
    a: "You earn Rewaiq Coins by completing verified brand tasks, participating in stream campaigns, or referral milestones. Coins can be redeemed directly toward monetary value or perks on the web app.",
  },
  {
    q: "When will the early waitlist open up?",
    a: "We are currently rolling out invitations in staged cohorts. Check your registered email for direct onboarding access.",
  },
  {
    q: "How do I enroll in Hub courses?",
    a: "Head to the Hub page (/hub) and select your track (Frontend, Backend, UI/UX, AI, Data, or VA). Fill the intake drawer to be scheduled for the upcoming cohort.",
  },
];

export default function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "faq">("chat");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:info@rewaiq.com.ng?subject=${encodeURIComponent("In-App Help Desk: " + formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nIssue:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Popup Window */}
      {isOpen && (
        <div className="mb-4 w-[360px] sm:w-[390px] rounded-3xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#0D204A] shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="bg-[#0A1B3C] p-4 text-white flex items-center justify-between border-b border-[#D9A93A]/30">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#D9A93A] text-[#0A1B3C] flex items-center justify-center font-extrabold text-sm shadow">
                R
              </div>
              <div>
                <h4 className="text-sm font-bold text-white leading-tight">Rewaiq Support Desk</h4>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online &bull; Instant Help
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white transition"
              aria-label="Close support modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="grid grid-cols-2 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] text-xs font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("chat")}
              className={`py-3 text-center transition-colors ${
                activeTab === "chat"
                  ? "text-[#D9A93A] border-b-2 border-[#D9A93A] bg-white dark:bg-[#0D204A]"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`py-3 text-center transition-colors ${
                activeTab === "faq"
                  ? "text-[#D9A93A] border-b-2 border-[#D9A93A] bg-white dark:bg-[#0D204A]"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-white"
              }`}
            >
              Quick FAQs
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-5 max-h-[420px] overflow-y-auto text-slate-800 dark:text-white">
            
            {activeTab === "chat" ? (
              <div>
                {/* Fast Channel Links */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <a
                    href="mailto:info@rewaiq.com.ng?subject=In-App%20Support%20Request"
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] text-[11px] font-semibold hover:border-[#D9A93A] transition"
                  >
                    <Mail className="w-4 h-4 text-[#D9A93A]" />
                    <span>Email Support</span>
                  </a>
                  <a
                    href="https://wa.me/2348000000000?text=Hello%20Rewaiq%20Team%2C%20I%20need%20help%20with%20the%20platform."
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] text-[11px] font-semibold hover:border-emerald-500 transition"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-500" />
                    <span>WhatsApp Help</span>
                  </a>
                </div>

                {/* Direct Message Form */}
                {sent ? (
                  <div className="py-6 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <h5 className="text-sm font-bold">Ticket Created</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-300">
                      We've routed your inquiry to info@rewaiq.com.ng. An agent will respond promptly.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="text-xs text-[#D9A93A] font-bold underline mt-2 inline-block"
                    >
                      Send another note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSendMessage} className="space-y-3">
                    <p className="text-xs text-slate-500 dark:text-slate-300 mb-2">
                      Leave us a direct note and we'll reply right to your inbox:
                    </p>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#D9A93A] outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#D9A93A] outline-none"
                    />
                    <textarea
                      rows={3}
                      required
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs focus:ring-2 focus:ring-[#D9A93A] outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-[#D9A93A] py-2.5 text-xs font-bold uppercase tracking-wider text-[#060F22] hover:bg-[#F0C860] flex items-center justify-center gap-1.5 transition active:scale-[0.99]"
                    >
                      <span>Send Ticket</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            ) : (
              /* FAQ Accordion */
              <div className="space-y-2.5">
                {faqs.map((f, idx) => (
                  <div
                    key={f.q}
                    className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-3 text-left text-xs font-bold flex items-center justify-between gap-2"
                    >
                      <span>{f.q}</span>
                      {expandedFaq === idx ? (
                        <ChevronUp className="w-3.5 h-3.5 text-[#D9A93A] shrink-0" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-3 pb-3 text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/50 dark:border-white/5 pt-2">
                        {f.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

          </div>

          <div className="bg-slate-100 dark:bg-[#060F22] px-4 py-2 text-center text-[10px] text-slate-400 border-t border-slate-200 dark:border-white/5">
            Rewaiq Technologies Ltd &bull; info@rewaiq.com.ng
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle in-app support desk"
        className="flex items-center gap-2.5 rounded-full bg-[#D9A93A] hover:bg-[#F0C860] text-[#060F22] px-5 py-3.5 shadow-2xl shadow-[#D9A93A]/30 font-extrabold text-xs uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 border-2 border-white/20"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4 text-[#060F22]" />
            <span>Close Help</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-4 h-4 text-[#060F22]" />
            <span>Need Help?</span>
          </>
        )}
      </button>

    </div>
  );
}