"use client"

import { useEffect, useMemo, useState } from "react"
import { MessageCircle, X, Send, Minus, Mail, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"

type QuickItem = {
  label: string
  answer: string
}

const QUICK_HELP: QuickItem[] = [
  {
    label: "How does Rewaiq work?",
    answer:
      "Rewaiq lets users, creators, and brands participate in verified engagement campaigns and earn rewards. Join the waitlist to get early access.",
  },
  {
    label: "When are you launching?",
    answer:
      "We’re rolling out in phases. Join the waitlist and follow our socials — we’ll notify you once your region is available.",
  },
  {
    label: "How do referrals work?",
    answer:
      "After you join, you’ll get a referral link. Share it with friends — your invite count increases as people join through your link.",
  },
  {
    label: "Need help with signup?",
    answer:
      "If signup fails, check your email format, internet connection, and try again. If it persists, contact support via WhatsApp or email below.",
  },
]

export function SupportWidget() {
  // ✅ one local switch to fully disable the widget without deleting code
  const ENABLED = true
  if (!ENABLED) return null

  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [log, setLog] = useState<{ from: "bot" | "you"; text: string }[]>([
    {
      from: "bot",
      text: "👋 Hi! I’m Rewaiq Support. Pick a quick topic below or type your question.",
    },
  ])

  // ✅ avoid blocking: push it slightly inward + safe bottom padding
  const FAB_CLASS =
    "fixed z-50 right-4 bottom-4 sm:right-6 sm:bottom-6"

  const PANEL_CLASS =
    "fixed z-50 right-4 bottom-20 sm:right-6 sm:bottom-24 w-[92vw] max-w-sm"

  // ✅ WhatsApp + Email (edit these)
  const SUPPORT_WHATSAPP = "2348168099351" // use your support number (no +)
  const SUPPORT_EMAIL = "support@rewaiq.com.ng"

  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      "Hi Rewaiq Support, I need help with: " + (message.trim() || "Waitlist / account")
    )
    return `https://wa.me/${SUPPORT_WHATSAPP}?text=${text}`
  }, [SUPPORT_WHATSAPP, message])

  const mailLink = useMemo(() => {
    const subject = encodeURIComponent("Rewaiq Support Request")
    const body = encodeURIComponent(
      `Hi Rewaiq Support,\n\nI need help with:\n${message.trim() || "[Describe your issue]"}\n\nThanks.`
    )
    return `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`
  }, [SUPPORT_EMAIL, message])

  const handleSend = () => {
    const text = message.trim()
    if (!text) return

    // add user message
    setLog((prev) => [...prev, { from: "you", text }])
    setMessage("")

    // lightweight “bot” response (you can replace later with real support system)
    const auto =
      "Thanks! If you want faster help, tap **WhatsApp Live Agent** below or email support. We’ll respond ASAP."
    setTimeout(() => {
      setLog((prev) => [...prev, { from: "bot", text: auto }])
    }, 300)
  }

  const quickReply = (item: QuickItem) => {
    setLog((prev) => [
      ...prev,
      { from: "you", text: item.label },
      { from: "bot", text: item.answer },
    ])
  }

  // optional: remember open state
  useEffect(() => {
    const saved = localStorage.getItem("rw_support_open")
    if (saved === "1") setIsOpen(true)
  }, [])
  useEffect(() => {
    localStorage.setItem("rw_support_open", isOpen ? "1" : "0")
  }, [isOpen])

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => {
          setIsOpen((v) => !v)
          setIsMinimized(false)
        }}
        className={`${FAB_CLASS} w-14 h-14 rounded-full bg-gradient-to-br from-[#4F7FFF] to-[#8B5CF6] shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform`}
        aria-label="Support"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className={`${PANEL_CLASS} bg-card border border-border rounded-2xl shadow-2xl overflow-hidden`}>
          {/* Header */}
          <div className="p-4 border-b border-border bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6]">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Rewaiq Support</h3>
                  <p className="text-white/80 text-xs">Quick help • WhatsApp • Email</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized((v) => !v)}
                  className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/20 flex items-center justify-center"
                  aria-label="Minimize"
                >
                  <Minus className="w-5 h-5 text-white" />
                </button>

                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/20 flex items-center justify-center"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Body */}
          {!isMinimized && (
            <>
              <div className="p-4 max-h-64 overflow-y-auto bg-background/50">
                {/* Quick help chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {QUICK_HELP.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => quickReply(item)}
                      className="text-xs px-3 py-2 rounded-full bg-muted/60 border border-border hover:bg-muted transition"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {/* Messages */}
                <div className="space-y-3">
                  {log.map((m, i) => (
                    <div
                      key={i}
                      className={[
                        "max-w-[90%] rounded-xl px-3 py-2 text-sm leading-relaxed",
                        m.from === "you"
                          ? "ml-auto bg-primary text-primary-foreground"
                          : "bg-muted/70 text-foreground",
                      ].join(" ")}
                    >
                      {m.text}
                    </div>
                  ))}
                </div>

                {/* Handoff buttons */}
                <div className="mt-4 grid gap-2">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm bg-green-600 text-white hover:opacity-90"
                  >
                    <PhoneCall className="w-4 h-4" />
                    WhatsApp Live Agent
                  </a>

                  <a
                    href={mailLink}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm bg-muted border border-border hover:bg-muted/70"
                  >
                    <Mail className="w-4 h-4" />
                    Email Support
                  </a>

                  <p className="text-xs text-foreground/70 text-center">
                    Live agent replies faster on WhatsApp.
                  </p>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 border-t border-border bg-card">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type your message…"
                    className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button onClick={handleSend} size="icon" className="hover:opacity-90">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </>
          )}

          {/* Minimized hint */}
          {isMinimized && (
            <div className="p-3 bg-card text-xs text-foreground/70">
              Minimized — tap <b>−</b> to reopen.
            </div>
          )}
        </div>
      )}
    </>
  )
}