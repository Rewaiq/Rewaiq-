"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FounderVideo() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl text-center">

        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          From the Founder
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
          A Message to Africa’s Digital Generation
        </h2>

        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Rewaiq is built to help Africans earn, discover opportunities, and grow in the digital economy.
        </p>

        {/* Founder Card */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto backdrop-blur">

          <div className="flex items-center gap-4">
            {/* Your Image */}
            <div className="w-16 h-16 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/images/ubani-founder.jpg"
                alt="Ubani Solomon Ikedi"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <p className="font-semibold text-foreground text-lg">
                Ubani Solomon Ikedi
              </p>
              <p className="text-sm text-muted-foreground">
                Founder, Rewaiq Technologies Ltd
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://www.linkedin.com/in/ubani-solomon-ikedi-438508256"
              target="_blank"
              className="text-primary text-sm hover:underline"
            >
              View LinkedIn
            </Link>

            <Button onClick={scrollToWaitlist} className="rounded-full">
              Join Waitlist
            </Button>
          </div>
        </div>

      </div>
    </section>
  )
}
