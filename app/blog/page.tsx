import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import { Button } from "@/components/ui/button"

export default function UpdatesPage() {
  const socials = [
    {
      name: "Instagram",
      handle: "@teamrewaiq",
      href: "https://www.instagram.com/teamrewaiq",
      note: "Behind-the-scenes, announcements, community highlights",
    },
    {
      name: "Facebook",
      handle: "teamrewaiq",
      href: "https://www.facebook.com/teamrewaiq",
      note: "Community broadcasts and updates",
    },
    {
      name: "X (Twitter)",
      handle: "@rewaiq",
      href: "https://x.com/rewaiq",
      note: "Product updates, founder posts, feature drops",
    },
    {
      name: "LinkedIn",
      handle: "Rewaiq",
      href: "https://www.linkedin.com/company/rewaiq/",
      note: "Partnerships, company updates, ecosystem growth",
    },
  ]

  const updates = [
    {
      title: "Waitlist is Live",
      excerpt:
        "Join early access to Rewaiq as we roll out in phases across Africa.",
      tag: "Launch",
    },
    {
      title: "Invite & Unlock",
      excerpt:
        "Share your referral link. Invite 5 friends to unlock founding perks as we grow.",
      tag: "Gamification",
    },
    {
      title: "Rewaiq Hub",
      excerpt:
        "A workspace for innovation and talent development — online & offline — fully part of Rewaiq.",
      tag: "Hub",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />

      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          {/* Title (same vibe as About) */}
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Updates & Social
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-14 max-w-3xl mx-auto">
            We’re not publishing blog articles yet. For now, follow our official channels for announcements,
            community drops, product updates, and launch news.
          </p>

          {/* Quick updates cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {updates.map((u) => (
              <div key={u.title} className="p-6 rounded-2xl bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {u.tag}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{u.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{u.excerpt}</p>
              </div>
            ))}
          </div>

          {/* Social links */}
          <section className="mb-14">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Follow Rewaiq</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stay close to the movement. We post updates consistently and share progress publicly.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{s.handle}</p>
                    </div>
                    <span className="text-primary font-medium">Open</span>
                  </div>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{s.note}</p>
                </a>
              ))}
            </div>
          </section>

          {/* CTAs (Waitlist + Hub) */}
          <section className="pt-4">
            <div className="bg-gradient-to-br from-[#4F7FFF]/10 to-[#8B5CF6]/10 border border-[#4F7FFF]/20 rounded-2xl p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Ready to Join Rewaiq?
              </h2>
              <p className="text-muted-foreground mb-7 max-w-2xl mx-auto leading-relaxed">
                Join the waitlist for early access — or explore Rewaiq Hub (our innovation workspace) to see what we’re
                building long-term.
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <Button asChild className="rounded-full bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] text-white">
                  <a href="/#waitlist">Join Waitlist</a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full bg-transparent border-border"
                >
                  <a href="/hub">Visit Rewaiq Hub</a>
                </Button>
              </div>

              <p className="mt-6 text-xs text-muted-foreground">
                Rewaiq Technologies Ltd • RC 9137882
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  )
}