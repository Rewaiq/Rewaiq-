"use client"

import { useState, useEffect } from "react"

const MESSAGES = [
  "Turn Your Passion Into Profit",
  "Stream Music & Earn Real Money",
  "Watch Videos, Get Paid Daily",
  "Africa's Digital Earning Revolution",
  "Complete Tasks, Build Your Future",
  "Learn Skills, Unlock Opportunities",
  "Your Creativity Has Value",
  "Join 10,000+ African Earners",
]

export function TypewriterText() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(100)

  useEffect(() => {
    const currentMessage = MESSAGES[currentMessageIndex]

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentMessage.length) {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1))
          setTypingSpeed(100)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1))
          setTypingSpeed(50)
        } else {
          setIsDeleting(false)
          setCurrentMessageIndex((prev) => (prev + 1) % MESSAGES.length)
        }
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentMessageIndex, typingSpeed])

  return (
    <p className="text-primary font-bold text-xl md:text-2xl tracking-wide min-h-[2rem] flex items-center justify-center">
      {displayedText}
      <span className="inline-block w-0.5 h-6 md:h-7 bg-primary ml-1 animate-pulse" />
    </p>
  )
}
