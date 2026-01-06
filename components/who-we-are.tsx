import { Eye, Target, Heart, Lightbulb, Shield, Users } from "lucide-react"

export function WhoWeAre() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear rewards, honest communication, and fair processes.",
    },
    {
      icon: Users,
      title: "Community First",
      description: "We are building an ecosystem where everyone supports and grows together.",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description:
        "We believe every young African deserves the chance to earn from creativity and digital participation.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Rewaiq uses modern technology to create new ways to earn, engage, and influence.",
    },
    {
      icon: Eye,
      title: "Authenticity",
      description: "Real people. Real opportunities. Real impact across Africa.",
    },
  ]

  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a1a]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-4">REWAIQ — Empowering Africa's Digital Generation</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Who We Are</h2>
          <p className="text-white/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Rewaiq is more than a platform — it's a movement. We are building Africa's digital earning future, where
            creators, students, small businesses, and everyday users can turn engagement into opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/20">
            <div className="p-8 rounded-2xl bg-[#0f0f2a] h-full">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                To become Africa's leading digital earning ecosystem, where every engagement creates value, every
                creator finds opportunity, and every user can earn, learn, and grow. We envision a future where Africa's
                digital generation builds sustainable income streams powered by technology and creativity.
              </p>
            </div>
          </div>

          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-purple-500/50 via-fuchsia-500/30 to-pink-500/20">
            <div className="p-8 rounded-2xl bg-[#0f0f2a] h-full">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-white/70 leading-relaxed">
                To democratize digital earning by connecting African youth with brands, creators, tasks, learning
                opportunities, and digital engagement campaigns. Rewaiq empowers users to earn from simple, meaningful
                actions — while helping creators and businesses grow their visibility.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-10">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <div key={index} className="p-[1px] rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/20">
                <div className="p-5 rounded-xl bg-[#0f0f2a] h-full text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-xs text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden max-w-4xl mx-auto">
          <img
            src="/two-diverse-men-laughing-podcast-studio-microphone.jpg"
            alt="Creators collaborating in studio"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}
