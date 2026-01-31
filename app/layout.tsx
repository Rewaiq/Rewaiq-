import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const _inter = Inter({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rewaiq.com.ng"),
  title: {
    default: "Rewaiq - Africa's #1 Digital Earning Platform | How to Make Money Online",
    template: "%s | Rewaiq - Discover. Earn. Influence.",
  },
  description:
    "Learn how to make money online in Nigeria, Ghana, Kenya, and across Africa. Rewaiq is Africa's premier digital earning platform for streaming music, watching videos, and completing tasks. Subsidiary of Rewaiq Technologies Ltd. RC 9137882.",
  keywords: [
    "how to make money online in Africa",
    "make money streaming music Nigeria",
    "digital earning hub Africa",
    "earn money watching videos Ghana",
    "passive income Kenya",
    "best side hustle South Africa",
    "earn money online Africa",
    "make money streaming music",
    "digital earning platform Nigeria",
    "online earning Africa",
    "side hustle Africa",
    "passive income Africa",
    "earn money Nigeria",
    "make money Ghana",
    "online jobs Kenya",
    "earn money South Africa",
    "digital jobs Egypt",
    "stream music earn money",
    "watch videos earn cash",
    "affiliate marketing Africa",
    "learn and earn platform",
    "content creator platform Africa",
    "students earn money online",
    "creators monetize content Africa",
    "freelance opportunities Africa",
    "youth employment Africa",
    "digital skills training Africa",
    "Rewaiq",
    "Rewaiq Africa",
    "Rewaiq earning platform",
    "Rewaiq coins",
  ],
  authors: [{ name: "Rewaiq Hub", url: "https://rewaiq.com.ng" }],
  creator: "Rewaiq Hub",
  publisher: "Rewaiq Hub",
  category: "Technology",
  classification: "Digital Earning Platform",
  openGraph: {
    type: "website",
    locale: "en_NG",
    alternateLocale: ["en_GH", "en_KE", "en_ZA", "en_EG", "en_TZ", "en_UG"],
    url: "https://rewaiq.com.ng",
    siteName: "Rewaiq - Africa's Digital Earning Hub",
    title: "Rewaiq - Turn Your Passion Into Profit | Africa's #1 Earning Platform",
    description:
      "Join thousands of Africans earning real money by streaming music, watching videos, and completing tasks. Start your digital earning journey today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rewaiq - Africa's Digital Earning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RewaiqAfrica",
    creator: "@RewaiqAfrica",
    title: "Rewaiq - Stream, Earn, Influence | Africa's Top Earning Platform",
    description:
      "Turn your passion into profit! Join 10,000+ Africans earning real money on Rewaiq. Stream music, watch videos, learn skills, and get paid.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rewaiq.com.ng",
    languages: {
      "en-NG": "https://rewaiq.com.ng",
      "en-GH": "https://rewaiq.com.ng/gh",
      "en-KE": "https://rewaiq.com.ng/ke",
      "en-ZA": "https://rewaiq.com.ng/za",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Rewaiq",
              alternateName: "Rewaiq Africa",
              url: "https://rewaiq.com.ng",
              description:
                "Africa's premier digital earning platform where creators, students, and dreamers turn their passion into profit",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://rewaiq.com.ng/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              areaServed: [
                { "@type": "Country", name: "Nigeria" },
                { "@type": "Country", name: "Ghana" },
                { "@type": "Country", name: "Kenya" },
                { "@type": "Country", name: "South Africa" },
                { "@type": "Continent", name: "Africa" },
              ],
            }),
          }}
        />
        <Script
          id="organization-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rewaiq Hub",
              url: "https://rewaiq.com.ng",
              logo: "https://rewaiq.com.ng/logo.png",
              sameAs: [
                "https://twitter.com/RewaiqAfrica",
                "https://facebook.com/RewaiqAfrica",
                "https://instagram.com/RewaiqAfrica",
                "https://linkedin.com/company/rewaiq",
                "https://youtube.com/@RewaiqAfrica",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "support@rewaiq.com.ng",
                availableLanguage: ["English"],
              },
            }),
          }}
        />
        <Script
          id="breadcrumb-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://rewaiq.com.ng",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
  <div className="min-h-dvh transition-opacity duration-200 ease-out">
    {children}
  </div>
</body>
    </html>
  )
}