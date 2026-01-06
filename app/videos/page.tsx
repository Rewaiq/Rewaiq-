import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlitterBackground } from "@/components/glitter-background"
import { SupportWidget } from "@/components/support-widget"
import { Play } from "lucide-react"

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-background">
      <GlitterBackground />
      <Header />
      <div className="pt-32 pb-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
            Rewaiq Videos
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Watch, learn, and discover how Rewaiq is transforming the African creator economy
          </p>

          {/* Featured video from Rewaiq team */}
          <section className="mb-16">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-[#4F7FFF]/20 group">
              <img
                src="/african-content-creator-recording-video.jpg"
                alt="Rewaiq Platform Demo"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4F7FFF] to-[#8B5CF6] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl shadow-primary/50">
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="inline-block px-3 py-1 rounded-full bg-[#4F7FFF] text-white text-xs font-medium mb-2">
                  FROM THE TEAM
                </span>
                <h2 className="text-2xl font-bold text-white mb-2">Welcome to Rewaiq: Africa's Digital Earning Hub</h2>
                <p className="text-white/80 text-sm">
                  Meet the Rewaiq team and discover how we're empowering African creators to turn engagement into income
                </p>
              </div>
            </div>
          </section>

          {/* Tutorial videos grid */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Platform Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Getting Started with Rewaiq",
                  description: "Learn the basics of setting up your profile and starting to earn",
                  duration: "5:32",
                },
                {
                  title: "How to Maximize Your Earnings",
                  description: "Tips and strategies to earn more on the Rewaiq platform",
                  duration: "8:15",
                },
                {
                  title: "Building Your Audience",
                  description: "Discover proven methods to grow your follower base",
                  duration: "6:48",
                },
                {
                  title: "Understanding Rewards",
                  description: "Everything you need to know about our reward system",
                  duration: "4:20",
                },
                {
                  title: "Creating Engaging Content",
                  description: "Learn what types of content perform best on Rewaiq",
                  duration: "7:05",
                },
                {
                  title: "Withdrawing Your Earnings",
                  description: "Step-by-step guide to cashing out your rewards",
                  duration: "3:45",
                },
              ].map((video, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-card to-muted border border-border group cursor-pointer"
                >
                  <img
                    src={`/tutorial-.jpg?height=360&width=640&query=tutorial ${idx + 1}`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#4F7FFF] transition-colors">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-semibold text-sm mb-1">{video.title}</h3>
                    <p className="text-white/60 text-xs mb-2">{video.description}</p>
                    <span className="text-white/80 text-xs">{video.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Success stories */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Creator Success Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "From Student to Top Earner",
                  creator: "Amara's Journey",
                  views: "15K views",
                },
                {
                  title: "Building a Music Career on Rewaiq",
                  creator: "DJ Kwame's Story",
                  views: "12K views",
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-card to-muted border border-border group cursor-pointer"
                >
                  <img
                    src={`/success-story-.jpg?height=360&width=640&query=success story ${idx + 1}`}
                    alt={story.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-[#4F7FFF] group-hover:to-[#8B5CF6] transition-all">
                      <Play className="w-8 h-8 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#8B5CF6]/80 backdrop-blur-sm text-white text-xs font-medium">
                      SUCCESS STORY
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-white font-bold text-lg mb-1">{story.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{story.creator}</p>
                    <span className="text-white/60 text-xs">{story.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <SupportWidget />
    </main>
  )
}
