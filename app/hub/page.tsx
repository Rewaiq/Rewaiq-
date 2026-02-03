import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import { Button } from "@/components/ui/button"

export default function HubPage() {
  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-[#4F7FFF] shadow-[0_0_14px_rgba(79,127,255,0.7)]" />
            Rewaiq Hub • Innovation & Talent Development
          </div>

          {/* Title */}
          <h1 className="mt-6 text-balance text-4xl md:text-6xl font-bold text-foreground">
            Rewaiq Hub
          </h1>

          {/* Intro */}
          <p className="mt-5 max-w-3xl text-muted-foreground text-lg leading-relaxed">
            Located at <b className="text-foreground">Yellow Avenue</b>, Rewaiq Hub is the collaborative innovation space
            of <b className="text-foreground">Rewaiq Technologies Ltd</b>. It’s built to support learning, experimentation,
            and real-world product development. Fully aligned with the Rewaiq ecosystem.
          </p>

          {/* Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground">Build Talent</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                We help emerging builders grow from learning to execution through practical guidance and community.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground">Ship Real Projects</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Participants work on real-world projects aligned with Rewaiq’s broader mission and roadmap.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground">Create Opportunity</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Over time, high-performing participants can unlock deeper opportunities within the Rewaiq ecosystem.
              </p>
            </div>
          </div>

          {/* What we do */}
          <section className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground">What We Do</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Rewaiq Hub bridges the gap between learning and execution by creating an environment that encourages:
            </p>

            <ul className="mt-6 grid gap-3 md:grid-cols-2">
              {[
                "Talent development",
                "Product thinking",
                "Creative collaboration",
                "Technical growth",
                "Innovation-driven projects",
                "Real-world readiness",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-foreground">
                  <span className="mt-2 inline-block h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Online & Offline */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground">Online & Offline</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Rewaiq Hub operates physically and digitally. Enabling participation regardless of location while
                maintaining strong collaboration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-lg font-semibold text-foreground">Part of Rewaiq</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                The Hub is not a separate institution, it’s an arm of Rewaiq Technologies Ltd, aligned with Rewaiq’s
                platform and long-term vision.
              </p>
            </div>
          </div>

          {/* Contact */}
          <section className="mt-12 p-8 rounded-2xl bg-card border border-border">
            <h2 className="text-2xl font-bold text-foreground">Location & Contact</h2>

            <div className="mt-4 grid gap-3 text-muted-foreground">
              <p>
                📍 <b className="text-foreground">Yellow Avenue</b>
                <span className="text-muted-foreground/60"> • </span>
                Rewaiq Technologies Ltd
              </p>
              <p>
                📞{" "}
                <a className="underline underline-offset-4 hover:text-foreground" href="tel:08062370534">
                  08062370534
                </a>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <a href="/#waitlist">Join Waitlist</a>
              </Button>

              <Button asChild variant="outline" className="rounded-full">
                <a href="https://wa.me/2348062370534" target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              By contacting us, you agree to our{" "}
              <a href="/privacy" className="underline underline-offset-4 hover:text-foreground">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}