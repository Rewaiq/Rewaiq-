export function Stats() {
  const stats = [
    { value: "600+", label: "Early Sign Up" },
    { value: "3M+", label: "pending rewards" },
    { value: "600+", label: "Partnering Brands" },
  ]

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#1a1040] to-[#0f0f2a]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-28">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  )
}
