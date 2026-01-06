"use client"

import { useEffect, useRef } from "react"

export function GlitterBackground() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Create glitter particles
    const particleCount = 50
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "glitter-particle"
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`
      particle.style.animationDelay = `${Math.random() * 3}s`
      particle.style.animationDuration = `${2 + Math.random() * 4}s`
      canvasRef.current.appendChild(particle)
    }
  }, [])

  return <div ref={canvasRef} className="glitter-bg" />
}
