"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SupportWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const handleSend = () => {
    if (message.trim()) {
      // In production, this would send to your support system
      console.log("Support message:", message)
      setMessage("")
      alert("Thank you! Our team will get back to you soon.")
      setIsOpen(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#4F7FFF] to-[#8B5CF6] shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Support"
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>

      {/* Support chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-card border border-border rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4">
          <div className="p-4 border-b border-border bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Rewaiq Support</h3>
                <p className="text-white/80 text-xs">We're here to help</p>
              </div>
            </div>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-background/50">
            <div className="bg-muted/50 rounded-lg p-3 mb-4">
              <p className="text-sm text-foreground leading-relaxed">
                👋 Hi there! How can we help you today? Feel free to ask any questions about Rewaiq.
              </p>
            </div>
          </div>

          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] hover:opacity-90"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
