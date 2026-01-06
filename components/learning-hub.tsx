import { BookOpen, Video, Award, TrendingUp } from "lucide-react"

export function LearningHub() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0a0a1a] to-[#0f0f2a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">LEARNING + EARNING</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Learn Digital Skills, Earn While You Grow</h2>
          <p className="text-white/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Rewaiq includes a Learning Hub where you can upskill and get paid at the same time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: BookOpen, title: "Take Micro-Courses", color: "from-blue-500/50 to-cyan-500/30" },
            { icon: Video, title: "Attend Webinars", color: "from-purple-500/50 to-pink-500/30" },
            { icon: Award, title: "Learn Digital Skills", color: "from-green-500/50 to-emerald-500/30" },
            { icon: TrendingUp, title: "Earn While Learning", color: "from-amber-500/50 to-orange-500/30" },
          ].map((item, i) => (
            <div key={i} className={`relative p-[1px] rounded-xl bg-gradient-to-br ${item.color}`}>
              <div className="p-6 rounded-xl bg-[#0a0a1a] text-center h-full flex flex-col items-center justify-center">
                <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
