import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import SupportWidget from "@/components/support-widget";
import AnalyticsTracker from "@/components/analytics-tracker";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rewaiq.com.ng"),
  title: {
    default: "Rewaiq Technologies — Discover • Earn • Influence",
    template: "%s | Rewaiq Technologies",
  },
  description: "Rewaiq connects young people, creators, students and brands across Nigeria to opportunities to discover, participate, earn and grow.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-[#0A1B3C] text-slate-800 dark:text-white transition-colors duration-200 min-h-screen relative">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <AnalyticsTracker />
          {children}
          <SupportWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}