import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import { SupportWidget } from "@/components/support-widget"
import { MapPin, Clock } from "lucide-react"

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      location: "Lagos, Nigeria",
      type: "Full-time",
      department: "Engineering",
      postedDate: "Posted 45 days ago",
      expired: true,
    },
    {
      title: "Product Manager",
      location: "Remote (Africa)",
      type: "Full-time",
      department: "Product",
      postedDate: "Posted 52 days ago",
      expired: true,
    },
    {
      title: "Marketing Lead",
      location: "Nairobi, Kenya",
      type: "Full-time",
      department: "Marketing",
      postedDate: "Posted 38 days ago",
      expired: true,
    },
    {
      title: "Backend Engineer",
      location: "Accra, Ghana",
      type: "Full-time",
      department: "Engineering",
      postedDate: "Posted 41 days ago",
      expired: true,
    },
    {
      title: "Content Strategist",
      location: "Remote (Africa)",
      type: "Full-time",
      department: "Content",
      postedDate: "Posted 35 days ago",
      expired: true,
    },
    {
      title: "UX/UI Designer",
      location: "Cape Town, South Africa",
      type: "Full-time",
      department: "Design",
      postedDate: "Posted 48 days ago",
      expired: true,
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Careers at Rewaiq
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-4">Join our mission to empower African creators</p>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-medium">
              All positions currently filled • Check back soon for new opportunities
            </span>
          </div>

          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all relative opacity-60"
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
                    Expired
                  </span>
                </div>
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="px-2 py-1 rounded bg-muted text-xs">{job.department}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{job.postedDate}</p>
                <button
                  disabled
                  className="px-6 py-2 rounded-full bg-muted text-muted-foreground cursor-not-allowed text-sm font-medium"
                >
                  Position Filled
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-[#4F7FFF]/10 to-[#8B5CF6]/10 border border-[#4F7FFF]/20 text-center">
            <h2 className="text-2xl font-bold mb-4 text-foreground">Don't see the right role?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our vision. Send us your resume and let us know
              how you'd like to contribute to Rewaiq's mission.
            </p>
            <button className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:from-[#4070ff] hover:to-[#364fc7] text-white rounded-full px-8 py-3 font-medium shadow-lg shadow-primary/20">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <SupportWidget />
    </main>
  )
}
