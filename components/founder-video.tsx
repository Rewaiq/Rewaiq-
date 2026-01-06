import { Play } from "lucide-react"

export function FounderVideo() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">From the Founder</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-3 mb-4">A Message to Africa</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear directly from our founder about the vision, mission, and future of Rewaiq
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-purple-600/20 aspect-video max-w-4xl mx-auto group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">Why We Built Rewaiq</h3>
            <p className="text-white/80 text-sm md:text-base">
              Empowering every African to earn, create, and thrive in the digital economy
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
