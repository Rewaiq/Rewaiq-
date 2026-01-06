import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export function BlogSection() {
  const posts = [
    {
      title: "The Future of Digital Earning in Africa",
      excerpt:
        "How Rewaiq is revolutionizing the creator economy and providing new income streams for millions of Africans.",
      date: "Dec 10, 2025",
      category: "Industry Insights",
      image: "/african-creators-working.jpg",
    },
    {
      title: "Stream & Earn: A Complete Guide",
      excerpt:
        "Everything you need to know about earning money by streaming music on Rewaiq and supporting African artists.",
      date: "Dec 8, 2025",
      category: "How-To Guide",
      image: "/person-listening-to-music-on-phone.jpg",
    },
    {
      title: "Success Story: From Student to Top Earner",
      excerpt: "Meet Tunde, a university student who turned his daily streaming habits into a steady income stream.",
      date: "Dec 5, 2025",
      category: "Success Stories",
      image: "/happy-african-student-with-phone.jpg",
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Latest from Rewaiq Blog</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tips, insights, and stories from the Rewaiq community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {posts.map((post, idx) => (
            <Card
              key={idx}
              className="overflow-hidden bg-card border-2 border-border hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="relative h-48 w-full bg-muted">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="rounded-full bg-transparent">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
