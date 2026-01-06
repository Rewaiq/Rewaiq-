import { Card } from "@/components/ui/card"
import { ArrowRight, TrendingUp } from "lucide-react"

export function WeeklyPosts() {
  const posts = [
    {
      rank: 1,
      title: "How I Earned ₦50,000 Streaming Music on Rewaiq",
      author: "Chioma O.",
      engagement: "2.4K views",
      category: "Success Story",
    },
    {
      rank: 2,
      title: "Top 5 Artists to Stream This Week for Maximum Earnings",
      author: "Rewaiq Team",
      engagement: "1.8K views",
      category: "Featured",
    },
    {
      rank: 3,
      title: "New Learning Modules: Digital Marketing Basics",
      author: "Rewaiq Academy",
      engagement: "1.5K views",
      category: "Learn & Earn",
    },
    {
      rank: 4,
      title: "Meet Our Top Earner: Student Making ₦200K Monthly",
      author: "Rewaiq Stories",
      engagement: "3.1K views",
      category: "Spotlight",
    },
    {
      rank: 5,
      title: "Week 12 Giveaway Winners Announced!",
      author: "Rewaiq Team",
      engagement: "5.2K views",
      category: "Community",
    },
  ]

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-primary font-semibold">Top Posts</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Weekly Top Rankings</h2>
            <p className="text-muted-foreground mt-2">Most engaging content from our community this week</p>
          </div>
        </div>

        <div className="grid gap-4">
          {posts.map((post) => (
            <Card
              key={post.rank}
              className="p-6 bg-card border-2 border-border hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                    {post.rank}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>By {post.author}</span>
                    <span>•</span>
                    <span>{post.engagement}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
