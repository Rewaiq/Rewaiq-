"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)

    // Apply theme immediately
    const html = document.documentElement
    if (initialTheme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }

    const savedPosition = localStorage.getItem("theme-toggle-position")
    if (savedPosition) {
      setPosition(JSON.parse(savedPosition))
    }
  }, [])

  const toggleTheme = () => {
    if (isDragging) return
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)

    const html = document.documentElement
    if (newTheme === "dark") {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return
    setIsDragging(false)
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    e.preventDefault()
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (dragStart.x === 0 && dragStart.y === 0) return
    setIsDragging(true)
    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y
    setPosition({ x: newX, y: newY })
  }

  const handleMouseUp = () => {
    if (isDragging) {
      localStorage.setItem("theme-toggle-position", JSON.stringify(position))
    }
    setDragStart({ x: 0, y: 0 })
    setTimeout(() => setIsDragging(false), 100)
  }

  useEffect(() => {
    if (dragStart.x !== 0 || dragStart.y !== 0) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [dragStart, position])

  if (!mounted) return null

  return (
    <button
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onClick={toggleTheme}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#4F7FFF] to-[#8B5CF6] hover:from-[#4070ff] hover:to-[#7B4CE6] text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <span className="absolute -top-10 right-0 bg-card border border-border px-3 py-1 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isDragging ? "Drag to move" : theme === "dark" ? "Light mode" : "Dark mode"}
      </span>
    </button>
  )
}
