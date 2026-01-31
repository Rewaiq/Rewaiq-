"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

type Pos = { x: number; y: number }

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // draggable position
  const [pos, setPos] = React.useState<Pos>({ x: 0, y: 0 })
  const dragging = React.useRef(false)
  const start = React.useRef({ x: 0, y: 0 })

  // auto-hide on scroll (optional but helps “blocking content”)
  const [hidden, setHidden] = React.useState(false)
  const hideTimer = React.useRef<number | null>(null)

  React.useEffect(() => {
    setMounted(true)

    const saved = localStorage.getItem("theme-toggle-pos")
    if (saved) {
      try {
        setPos(JSON.parse(saved))
      } catch {}
    } else {
      // default position: bottom-right
      setPos({ x: 0, y: 0 })
    }

    const onScroll = () => {
      setHidden(true)
      if (hideTimer.current) window.clearTimeout(hideTimer.current)
      hideTimer.current = window.setTimeout(() => setHidden(false), 700)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    // if dragging, ignore click
    if (dragging.current) return
    setTheme(isDark ? "light" : "dark")
  }

  const snapAndSave = (x: number, y: number) => {
    const w = window.innerWidth
    const h = window.innerHeight

    // button size (keep in sync with class below)
    const btn = 56 // px
    const pad = 16

    // clamp inside viewport
    const clampedX = clamp(x, -(w - btn - pad), 0)
    const clampedY = clamp(y, -(h - btn - pad), 0)

    // snap to nearest side (left/right)
    const distToRight = Math.abs(clampedX - 0)
    const distToLeft = Math.abs(clampedX - (-(w - btn - pad)))
    const snappedX = distToRight <= distToLeft ? 0 : (-(w - btn - pad))

    const final = { x: snappedX, y: clampedY }
    setPos(final)
    localStorage.setItem("theme-toggle-pos", JSON.stringify(final))
  }

  const onPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0) return
    ;(e.currentTarget as HTMLButtonElement).setPointerCapture(e.pointerId)
    dragging.current = false
    start.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (start.current.x === 0 && start.current.y === 0) return

    const nextX = e.clientX - start.current.x
    const nextY = e.clientY - start.current.y

    // once moved enough, consider it dragging
    if (!dragging.current) {
      const moved = Math.abs(nextX - pos.x) + Math.abs(nextY - pos.y)
      if (moved > 6) dragging.current = true
    }

    setPos({ x: nextX, y: nextY })
  }

  const onPointerUp = () => {
    // if user wasn’t dragging, it’s a click -> toggleTheme will handle
    if (dragging.current) {
      snapAndSave(pos.x, pos.y)
      // small delay so click doesn’t fire immediately after drag
      window.setTimeout(() => (dragging.current = false), 50)
    }
    start.current = { x: 0, y: 0 }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        cursor: dragging.current ? "grabbing" : "grab",
        opacity: hidden ? 0.25 : 1,
      }}
      className={[
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full",
        "bg-gradient-to-br from-[#4F7FFF] to-[#8B5CF6]",
        "hover:from-[#4070ff] hover:to-[#7B4CE6]",
        "text-white shadow-lg shadow-primary/30",
        "flex items-center justify-center transition-all",
        "hover:scale-110 active:scale-95",
        "touch-none select-none",
      ].join(" ")}
      aria-label="Toggle theme"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            !isDark ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
    </button>
  )
}
