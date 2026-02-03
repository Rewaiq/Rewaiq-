import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <p className="text-xl text-muted-foreground text-center mb-16">
            How we collect, use, and protect your data.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rewaiq is operated by <b className="text-foreground">Rewaiq Technologies Ltd</b> (RC: 9137882). We build
                an ecosystem that helps creators, students, and users discover opportunities and earn through authentic
                engagement.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">What We Collect</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Account & Contact Info",
                    body: "Name, email, phone number, country, and basic signup details (e.g. waitlist).",
                  },
                  {
                    title: "Referral & Growth Data",
                    body: "Referral codes, invite counts, and attribution (how you heard about us).",
                  },
                  {
                    title: "Usage & Analytics",
                    body: "Basic interaction data to improve the experience and prevent abuse.",
                  },
                  {
                    title: "Support Messages",
                    body: "Messages you send us via WhatsApp, email, or forms so we can help you.",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 rounded-xl bg-card border border-border">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">How We Use Data</h2>
              <ul className="space-y-3 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                <li>To provide updates, newsletters, and waitlist notifications (with your consent).</li>
                <li>To improve performance, detect abuse/fraud, and ensure fair participation.</li>
                <li>To understand demand by region (especially Africa-first rollout).</li>
                <li>To respond to your support requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Data Sharing</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We do not sell your personal data. We may use trusted service providers (e.g., email delivery, database,
                analytics) only to operate Rewaiq securely and reliably.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Your Choices</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You can opt out of newsletters anytime. You can also request access, correction, or deletion of your
                data by contacting our support.
              </p>
            </section>

            <section className="pt-12">
              <div className="bg-gradient-to-br from-[#4F7FFF]/10 to-[#8B5CF6]/10 border border-[#4F7FFF]/20 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Questions?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  If anything is unclear, reach out. We’re building trust-first.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:opacity-90 text-white rounded-full px-8 py-3 font-medium shadow-lg shadow-primary/20"
                    href="/contact"
                  >
                    Contact Support
                  </Link>

                  <Link
                    className="border border-border bg-transparent hover:bg-muted text-foreground rounded-full px-8 py-3 font-medium"
                    href="/#waitlist"
                  >
                    Join Waitlist
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