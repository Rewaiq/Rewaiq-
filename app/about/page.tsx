import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import { SupportWidget } from "@/components/support-widget"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            About Rewaiq
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16">Discover. Earn. Influence.</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create the leading platform where African creators, students, and dreamers can discover content, earn
                meaningful income, and build lasting influence - all while staying true to their authentic selves and
                connecting with audiences that genuinely care about their work.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're creating Africa's Digital Earning Hub where engagement equals opportunity. Our mission is to
                empower creators by providing a fair, transparent platform that rewards genuine interaction, celebrates
                authentic creativity, and opens doors to financial freedom for every member of our community.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Empowerment</h3>
                  <p className="text-muted-foreground">
                    We believe in giving creators the tools and opportunities to build sustainable income streams
                    through authentic engagement.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Authenticity</h3>
                  <p className="text-muted-foreground">
                    Real connections matter. We prioritize genuine interactions over vanity metrics and algorithmic
                    noise.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Transparency</h3>
                  <p className="text-muted-foreground">
                    Clear earning structures, honest communication, and fair practices guide everything we do.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Community</h3>
                  <p className="text-muted-foreground">
                    Together we rise. We foster a supportive ecosystem where creators help each other succeed.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-card border border-border md:col-span-2">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation</h3>
                  <p className="text-muted-foreground">
                    We continuously evolve our platform to meet the changing needs of African creators and the global
                    creative economy.
                  </p>
                </div>
              </div>
            </section>

            <section className="pt-12">
              <div className="bg-gradient-to-br from-[#4F7FFF]/10 to-[#8B5CF6]/10 border border-[#4F7FFF]/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Join Our Journey</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  We're building something special for Africa's creative community. Be part of the movement that's
                  redefining how creators earn, grow, and succeed.
                </p>
                <button className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:from-[#4070ff] hover:to-[#364fc7] text-white rounded-full px-8 py-3 font-medium shadow-lg shadow-primary/20">
                  Join the Waitlist
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <SupportWidget />
    </main>
  )
}
