"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const faqs = [
    {
      question: "What is Rewaiq?",
      answer:
        "Rewaiq is Africa's digital earning hub where creators, students, and dreamers can share their work, build an audience, and get discovered. It's a platform focused on helping creatives showcase their talents without fighting algorithms.",
    },
    {
      question: "How do I join the platform?",
      answer:
        "You can join by clicking the 'Join Waitlist' button. Once we launch, you'll be among the first to create your profile and start uploading your work.",
    },
    {
      question: "Is Rewaiq free to use?",
      answer:
        "Yes, Rewaiq will be free to join and use. We believe every creative should have access to a platform that showcases their work professionally.",
    },
    {
      question: "What type of content can I upload?",
      answer:
        "You can upload music, videos, art, fashion, writing, photography, and more. Our platform supports multiple creative categories to help you reach the right audience.",
    },
    {
      question: "How do I get discovered on Rewaiq?",
      answer:
        "Unlike traditional social media, discovery on Rewaiq is based on your content quality and category, not your follower count. People browse by category, so your work reaches those who actually care about your type of creativity.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 px-6 bg-[#0f0f2a]">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a1a]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white/60 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
