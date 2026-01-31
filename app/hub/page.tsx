// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { GlitterBackground } from "@/components/glitter-background"
// import { SupportWidget } from "@/components/support-widget"
// import { Button } from "@/components/ui/button"

// export default function HubPage() {
//   return (
//     <main className="min-h-screen bg-[#070713] text-white">
//       {/* background glow */}
//       <div className="pointer-events-none fixed inset-0">
//         <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#4F7FFF]/20 blur-[110px]" />
//         <div className="absolute -bottom-24 right-12 h-80 w-80 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,127,255,0.10),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.12),transparent_40%)]" />
//       </div>

//       <section className="relative mx-auto w-full max-w-5xl px-6 py-16 md:py-24">
//         {/* badge */}
//         <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80">
//           <span className="h-2 w-2 rounded-full bg-[#4F7FFF] shadow-[0_0_14px_rgba(79,127,255,0.7)]" />
//           Rewaiq Hub • Innovation & Talent Development
//         </div>

//         <h1 className="mt-6 text-balance text-3xl font-bold leading-tight md:text-5xl">
//           Rewaiq Hub
//         </h1>

//         <p className="mt-4 max-w-3xl text-white/80 md:text-lg leading-relaxed">
//           Located at <b className="text-white">Yellow Avenue</b>, Rewaiq Hub is the collaborative innovation space of{" "}
//           <b className="text-white">Rewaiq Technologies Ltd</b> — created to support learning, experimentation, and
//           real-world product development.
//         </p>

//         {/* hero cards */}
//         <div className="mt-10 grid gap-4 md:grid-cols-3">
//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
//             <h3 className="text-lg font-semibold">Build Talent</h3>
//             <p className="mt-2 text-sm text-white/75 leading-relaxed">
//               We help emerging builders grow from learning to execution through practical guidance and community.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
//             <h3 className="text-lg font-semibold">Ship Real Projects</h3>
//             <p className="mt-2 text-sm text-white/75 leading-relaxed">
//               Participants work on real-world projects aligned with Rewaiq’s broader mission and ecosystem.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
//             <h3 className="text-lg font-semibold">Create Opportunity</h3>
//             <p className="mt-2 text-sm text-white/75 leading-relaxed">
//               High-performing participants can unlock deeper opportunities within the Rewaiq ecosystem over time.
//             </p>
//           </div>
//         </div>

//         {/* what we do */}
//         <div className="mt-12 rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-8 backdrop-blur">
//           <h2 className="text-2xl font-bold">What We Do</h2>
//           <p className="mt-3 text-white/80 leading-relaxed">
//             Rewaiq Hub bridges the gap between learning and execution by building an environment that encourages:
//           </p>

//           <ul className="mt-6 grid gap-3 md:grid-cols-2 text-white/85">
//             {[
//               "Talent development",
//               "Product thinking",
//               "Creative collaboration",
//               "Technical growth",
//               "Innovation-driven projects",
//               "Real-world readiness",
//             ].map((item) => (
//               <li key={item} className="flex items-start gap-3">
//                 <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#8B5CF6]" />
//                 <span className="text-sm md:text-base">{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* online/offline */}
//         <div className="mt-8 grid gap-4 md:grid-cols-2">
//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
//             <h3 className="text-lg font-semibold">Online & Offline</h3>
//             <p className="mt-2 text-sm text-white/75 leading-relaxed">
//               Rewaiq Hub operates physically and digitally — enabling participation regardless of location while
//               maintaining strong collaboration.
//             </p>
//           </div>

//           <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
//             <h3 className="text-lg font-semibold">Part of Rewaiq</h3>
//             <p className="mt-2 text-sm text-white/75 leading-relaxed">
//               The Hub is an arm of Rewaiq Technologies Ltd — aligned with the Rewaiq platform and its long-term roadmap.
//             </p>
//           </div>
//         </div>

//         {/* contact */}
//         <div className="mt-12 rounded-[2.2rem] border border-white/10 bg-black/30 p-8">
//           <h2 className="text-2xl font-bold">Location & Contact</h2>

//           <div className="mt-4 grid gap-3 text-white/80">
//             <p>
//               📍 <b className="text-white">Yellow Avenue</b>
//               <span className="text-white/50"> • </span>
//               Rewaiq Technologies Ltd
//             </p>
//             <p>
//               📞 <a className="underline underline-offset-4 hover:text-white" href="tel:08062370534">08062370534</a>
//             </p>
//           </div>

//           <div className="mt-6 flex flex-wrap gap-3">
//             <Button asChild className="rounded-full bg-white text-[#3b5bdb] hover:bg-white/90">
//               <a href="/#waitlist">Join Waitlist</a>
//             </Button>

//             <Button
//               asChild
//               variant="outline"
//               className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10"
//             >
//               <a href="https://wa.me/2348062370534" target="_blank" rel="noreferrer">
//                 WhatsApp Us
//               </a>
//             </Button>
//           </div>

//           <p className="mt-4 text-xs text-white/55">
//             By contacting us, you agree to our{" "}
//             <a href="/privacy" className="text-white/75 hover:text-white underline underline-offset-4">
//               Privacy Policy
//             </a>
//             .
//           </p>
//         </div>

//         {/* footer note */}
//         <p className="mt-10 text-center text-xs text-white/45">
//           © {new Date().getFullYear()} Rewaiq Technologies Ltd — Rewaiq Hub is part of the Rewaiq ecosystem.
//         </p>
//       </section>
//     </main>
//   )
// }


// then see how other nav pages are what i imported
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { GlitterBackground } from "@/components/glitter-background"
// import { SupportWidget } from "@/components/support-widget"

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-background">
//       <GlitterBackground />
//       <Header />
//       <div className="pt-32 pb-20 px-6 relative z-10">
//         <div className="container mx-auto max-w-4xl">
//           <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-[#4F7FFF] to-[#8B5CF6] bg-clip-text text-transparent">
//             About Rewaiq
//           </h1>
//           <p className="text-xl text-muted-foreground text-center mb-16">Discover. Earn. Influence.</p>

//           <div className="space-y-12">
//             <section>
//               <h2 className="text-3xl font-bold mb-4 text-foreground">Our Vision</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 To create the leading platform where African creators, students, and dreamers can discover content, earn
//                 meaningful income, and build lasting influence - all while staying true to their authentic selves and
//                 connecting with audiences that genuinely care about their work.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 We're creating Africa's Digital Earning Hub where engagement equals opportunity. Our mission is to
//                 empower creators by providing a fair, transparent platform that rewards genuine interaction, celebrates
//                 authentic creativity, and opens doors to financial freedom for every member of our community.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-3xl font-bold mb-4 text-foreground">Core Values</h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="p-6 rounded-xl bg-card border border-border">
//                   <h3 className="text-xl font-semibold mb-2 text-foreground">Empowerment</h3>
//                   <p className="text-muted-foreground">
//                     We believe in giving creators the tools and opportunities to build sustainable income streams
//                     through authentic engagement.
//                   </p>
//                 </div>
//                 <div className="p-6 rounded-xl bg-card border border-border">
//                   <h3 className="text-xl font-semibold mb-2 text-foreground">Authenticity</h3>
//                   <p className="text-muted-foreground">
//                     Real connections matter. We prioritize genuine interactions over vanity metrics and algorithmic
//                     noise.
//                   </p>
//                 </div>
//                 <div className="p-6 rounded-xl bg-card border border-border">
//                   <h3 className="text-xl font-semibold mb-2 text-foreground">Transparency</h3>
//                   <p className="text-muted-foreground">
//                     Clear earning structures, honest communication, and fair practices guide everything we do.
//                   </p>
//                 </div>
//                 <div className="p-6 rounded-xl bg-card border border-border">
//                   <h3 className="text-xl font-semibold mb-2 text-foreground">Community</h3>
//                   <p className="text-muted-foreground">
//                     Together we rise. We foster a supportive ecosystem where creators help each other succeed.
//                   </p>
//                 </div>
//                 <div className="p-6 rounded-xl bg-card border border-border md:col-span-2">
//                   <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation</h3>
//                   <p className="text-muted-foreground">
//                     We continuously evolve our platform to meet the changing needs of African creators and the global
//                     creative economy.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             <section className="pt-12">
//               <div className="bg-gradient-to-br from-[#4F7FFF]/10 to-[#8B5CF6]/10 border border-[#4F7FFF]/20 rounded-2xl p-8 text-center">
//                 <h2 className="text-2xl font-bold mb-4 text-foreground">Join Our Journey</h2>
//                 <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
//                   We're building something special for Africa's creative community. Be part of the movement that's
//                   redefining how creators earn, grow, and succeed.
//                 </p>
//                 <button className="bg-gradient-to-r from-[#4F7FFF] to-[#3b5bdb] hover:from-[#4070ff] hover:to-[#364fc7] text-white rounded-full px-8 py-3 font-medium shadow-lg shadow-primary/20">
//                   Join the Waitlist
//                 </button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//       <Footer />
//       <SupportWidget />
//     </main>
//   )
// }
