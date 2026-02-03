import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Contact Rewaiq
          </h1>

          <p className="text-xl text-muted-foreground text-center mb-16">
            Hub location + online support channels.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Rewaiq Hub</h2>
              <div className="p-6 rounded-xl bg-card border border-border">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  📍 <b className="text-foreground">Yellow Avenue</b> — Rewaiq Technologies Ltd (RC: 9137882)
                </p>
                <p className="text-muted-foreground mt-3">
                  Rewaiq Hub is part of the Rewaiq ecosystem — a workspace for learning, collaboration, and real-world
                  projects (online & offline).
                </p>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Link
                    className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:opacity-90 text-white rounded-full px-8 py-3 font-medium shadow-lg shadow-primary/20"
                    href="/hub"
                  >
                    Visit Hub Page
                  </Link>
                  <a
                    className="border border-border bg-transparent hover:bg-muted text-foreground rounded-full px-8 py-3 font-medium"
                    href="https://wa.me/2348062370534"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Online Support</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
                  <p className="text-muted-foreground mb-4">Call or message us directly.</p>
                  <a className="underline underline-offset-4 text-foreground" href="tel:08062370534">
                    08062370534
                  </a>
                </div>

                <div className="p-6 rounded-xl bg-card border border-border">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
                  <p className="text-muted-foreground mb-4">For formal inquiries or support.</p>
                  <a className="underline underline-offset-4 text-foreground" href="mailto:support@rewaiq.com.ng">
                    support@rewaiq.com.ng
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Please don’t share sensitive data (passwords, OTPs) through email/WhatsApp.
              </p>
            </section>

            <section className="pt-12">
              <div className="bg-gradient-to-br from-[#4F7FFF]/10 to-[#8B5CF6]/10 border border-[#4F7FFF]/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Join the movement</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Want early access? Join our waitlist to get notified when you’re eligible.
                </p>

                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:opacity-90 text-white rounded-full px-8 py-3 font-medium shadow-lg shadow-primary/20"
                    href="/#waitlist"
                  >
                    Join Waitlist
                  </Link>

                  <Link
                    className="border border-border bg-transparent hover:bg-muted text-foreground rounded-full px-8 py-3 font-medium"
                    href="/about"
                  >
                    Learn More About Rewaiq
                  </Link>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  Rewaiq Technologies Ltd (RC: 9137882)
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}