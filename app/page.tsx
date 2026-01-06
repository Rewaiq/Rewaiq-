import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { HowItWorks } from "@/components/how-it-works"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatMakesUnique } from "@/components/what-makes-unique"
import { PlatformFeatures } from "@/components/platform-features"
import { ForCreators } from "@/components/for-creators"
import { EarnCoins } from "@/components/earn-coins"
import { LearningHub } from "@/components/learning-hub"
import { Giveaways } from "@/components/giveaways"
import { WhyPerfect } from "@/components/why-perfect"
import { WeeklyPosts } from "@/components/weekly-posts"
import { BlogSection } from "@/components/blog-section"
import { FounderVideo } from "@/components/founder-video"
import { LaunchCTA } from "@/components/launch-cta"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Rewaiq3D } from "@/components/rewaiq-3d"
import { GlitterBackground } from "@/components/glitter-background"
import { SupportWidget } from "@/components/support-widget"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <GlitterBackground />
      <div className="relative z-10">
        <Header />
        <section className="pt-20">
          <Rewaiq3D />
        </section>
        <Hero />
        <Stats />
        <HowItWorks />
        <WhoWeAre />
        <WhatMakesUnique />
        <PlatformFeatures />
        <ForCreators />
        <EarnCoins />
        <LearningHub />
        <Giveaways />
        <WhyPerfect />
        <WeeklyPosts />
        <BlogSection />
        <FounderVideo />
        <LaunchCTA />
        <FAQ />
        <Footer />
      </div>
      <SupportWidget />
      <ThemeToggle />
    </main>
  )
}
