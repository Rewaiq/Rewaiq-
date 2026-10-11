"use client";

import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { 
  Wifi, 
  Laptop, 
  Users, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Calendar,
  X,
  Send,
  Building2,
  Sparkles,
  Database,
  Palette,
  Bot,
  BarChart3,
  Headphones
} from "lucide-react";

const hubCourses = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Code2,
    badge: "Currently Open",
    desc: "HTML5, CSS3, Tailwind CSS, JavaScript, React.js & modern Next.js app building.",
    cadence: "Weekday & Weekend Cohorts",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Database,
    badge: "Currently Open",
    desc: "Node.js, Express, REST APIs, PostgreSQL databases, authentication & cloud deployments.",
    cadence: "Weekday & Weekend Cohorts",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    icon: Palette,
    badge: "Currently Open",
    desc: "User research, wireframing, high-fidelity prototypes in Figma, design systems & portfolio projects.",
    cadence: "Hands-on Practical",
  },
  {
    id: "ai-prompt",
    title: "AI Prompt Engineering",
    icon: Bot,
    badge: "Currently Open",
    desc: "Master LLMs, AI workflow automation, workplace productivity & building prompt chains.",
    cadence: "Intensive Track",
  },
  {
    id: "data-analysis",
    title: "Data Analysis",
    icon: BarChart3,
    badge: "Currently Open",
    desc: "Excel essentials, SQL queries, data cleaning, Python fundamentals & PowerBI dashboards.",
    cadence: "Project-Based Cohort",
  },
  {
    id: "virtual-assistant",
    title: "Virtual Assistant (VA)",
    icon: Headphones,
    badge: "Currently Open",
    desc: "Executive administrative support, remote calendar management, email handling, client CRM & freelance pitching.",
    cadence: "Remote Readiness Track",
  },
];

const hubFacilities = [
  {
    title: "High-Speed Internet & Uninterrupted Power",
    desc: "Consistent connectivity and standby solar/generator backup so you learn and build uninterrupted.",
    icon: Wifi,
  },
  {
    title: "Co-Working & Hot-Desks",
    desc: "Dedicated shared workstations, meeting corners, and collaborative spaces for remote workers.",
    icon: Laptop,
  },
  {
    title: "Practical Mentorship",
    desc: "Learn directly from active software engineers and industry practitioners.",
    icon: Users,
  },
];

export default function HubPage() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "Frontend Development",
    schedulePreference: "Weekday",
    notes: "",
  });

  const handleOpenModal = (courseTitle: string) => {
    setFormData((prev) => ({ ...prev, course: courseTitle }));
    setSelectedCourse(courseTitle);
    setIsSubmitted(false);
  };

  const handleClose = () => {
    setSelectedCourse(null);
    setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Hub Admission: ${formData.fullName} - ${formData.course}`);
    const mailtoBody = encodeURIComponent(
      `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSelected Course: ${formData.course}\nPreferred Schedule: ${formData.schedulePreference}\nGoals / Questions:\n${formData.notes}`
    );
    window.location.href = `mailto:rewaiqhub@rewaiq.com.ng?subject=${mailtoSubject}&body=${mailtoBody}`;
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors">
      <Header />

      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-16 pb-20 border-b border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ADMISSIONS CURRENTLY OPEN
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9A93A] uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                INNOVATION HUB
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1B3C] dark:text-white tracking-tight leading-tight mb-6">
              Learn practical digital skills. <br />
              <span className="text-[#D9A93A]">Build your tech future.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Hands-on training, reliable power, high-speed internet, and dedicated mentorship for young people, students, and aspiring remote professionals.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D9A93A] px-7 py-3.5 text-sm font-bold text-[#060F22] hover:bg-[#F0C860] transition-all shadow-md active:scale-95"
              >
                <span>View Available Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => handleOpenModal("Hub Co-Working Hot-Desk")}
                className="inline-flex items-center rounded-xl border border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#0A1B3C] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all"
              >
                Book Co-Working Desk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ACTIVE TECH TRACKS GRID */}
      <section className="py-20 bg-slate-50 dark:bg-[#0D204A]/30 border-b border-slate-200 dark:border-white/10" id="courses">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A] font-mono">
              ACTIVE TECH TRACKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1B3C] dark:text-white uppercase mt-2 mb-3">
              Explore Available Courses
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Select a specialized track to enroll in upcoming cohort intakes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubCourses.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-6 shadow-sm hover:border-[#D9A93A] transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#0A1B3C] dark:text-white mb-2">{c.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">{c.desc}</p>
                    <div className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#D9A93A]" />
                      {c.cadence}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleOpenModal(c.title)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/15 py-3 text-xs font-bold uppercase tracking-wider text-[#0A1B3C] dark:text-white hover:bg-[#D9A93A] hover:text-[#060F22] hover:border-[#D9A93A] transition-all shadow-sm"
                  >
                    <span>Enroll / Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="py-20 bg-white dark:bg-[#0A1B3C]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D9A93A]">Infrastructure</span>
            <h2 className="text-3xl font-extrabold text-[#0A1B3C] dark:text-white mt-1 mb-2">
              Built for serious builders & learners.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hubFacilities.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0D204A]/60 p-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0A1B3C] text-[#D9A93A] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0A1B3C] dark:text-white mb-1.5">{f.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL APPLICATION DRAWER */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0D204A] p-6 sm:p-8 shadow-2xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Currently Open
                </span>
                <h3 className="text-xl font-bold text-[#0A1B3C] dark:text-white mt-1">
                  {formData.course}
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
                <h4 className="text-lg font-bold text-[#0A1B3C] dark:text-white">Admission Request Transmitted!</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Your details have been pre-filled for <strong>rewaiqhub@rewaiq.com.ng</strong>. The admissions team will contact you regarding scheduling and fees.
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
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chinaza Umeh"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. chinaza@gmail.com"
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
                      placeholder="e.g. +234 812 345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Selected Course Track
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={formData.course}
                      className="w-full rounded-xl border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#060F22] px-3.5 py-2 text-xs font-semibold text-[#D9A93A]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Schedule Preference
                    </label>
                    <select
                      value={formData.schedulePreference}
                      onChange={(e) => setFormData({ ...formData, schedulePreference: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                    >
                      <option value="Weekday (Morning / Afternoon)">Weekday</option>
                      <option value="Weekend Flexible">Weekend</option>
                      <option value="Virtual / Remote">Virtual</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    What are your goals or prior experience?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly tell us why you want to learn this skill..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0A1B3C] px-3.5 py-2.5 text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#D9A93A]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9A93A] py-3.5 text-xs font-bold uppercase tracking-wider text-[#060F22] hover:bg-[#F0C860] shadow-md transition-all active:scale-[0.99] mt-2"
                >
                  <span>Submit Admission Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>

                <p className="text-center text-[10px] text-slate-500 dark:text-slate-400">
                  Admissions processed on a rolling basis. Dispatched to rewaiqhub@rewaiq.com.ng.
                </p>
              </form>
            )}

          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}