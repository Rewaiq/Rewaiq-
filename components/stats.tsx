export function Stats() {
  const stats = [
    { value: "600+", label: "Waitlist Sign-ups" },
    { value: "Creators & Artists", label: "Early interest (pre-launch)" },
    { value: "Brands", label: "Partnership talks ongoing" },
  ]

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#1a1040] to-[#0f0f2a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="mt-10 text-center text-xs text-white/45 max-w-2xl mx-auto">
          Pre-launch indicators. Rewards activate during beta/launch under clear rules and verification.
        </p>
      </div>

      <div className="absolute bottom-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  )
}
