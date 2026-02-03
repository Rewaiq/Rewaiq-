import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <p className="text-xl text-muted-foreground text-center mb-16">
            The rules that keep the community safe and fair.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Operator</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rewaiq is operated by <b className="text-foreground">Rewaiq Technologies Ltd</b> (RC: 9137882).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Eligibility</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You agree to provide accurate information and use the platform responsibly. We may limit access to
                certain regions during phased rollout.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Fair Use & Abuse Prevention</h2>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                <li>No fraud, bots, fake engagement, or manipulation of rewards/referrals.</li>
                <li>No harassment, impersonation, or harmful content.</li>
                <li>We may suspend accounts or revoke rewards when abuse is detected.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Waitlist & Early Access</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Joining the waitlist does not guarantee immediate access. We may prioritize based on rollout strategy,
                verification, and capacity.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Changes</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We may update these terms as Rewaiq evolves. Continued use means you accept updated terms.
              </p>
            </section>

            <section className="pt-12">
              <div className="bg-gradient-to-br from-[#4F7FFF]/10 to-[#8B5CF6]/10 border border-[#4F7FFF]/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Need Help?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If you have questions, reach out — we’re building a trust-first ecosystem.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:opacity-90 text-white rounded-full px-8 py-3 font-medium shadow-lg shadow-primary/20"
                    href="/contact"
                  >
                    Contact Us
                  </Link>

                  <Link
                    className="border border-border bg-transparent hover:bg-muted text-foreground rounded-full px-8 py-3 font-medium"
                    href="/privacy"
                  >
                    Read Privacy Policy
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