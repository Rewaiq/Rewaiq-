"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { captureUtmParams, trackEvent } from "@/lib/analytics";

function AnalyticsListener() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    captureUtmParams();
    trackEvent("landing_page_view", {
      page_path: pathname,
      query: searchParams?.toString() || "",
    });

    trackedDepths.current.clear();

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      const thresholds = [25, 50, 75, 100];

      for (const t of thresholds) {
        if (scrollPercent >= t && !trackedDepths.current.has(t)) {
          trackedDepths.current.add(t);
          trackEvent("scroll_depth", { depth_percent: t, page_path: pathname });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, searchParams]);

  return null;
}

export default function AnalyticsTracker() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

  const isValidGa = gaId && /^G-[A-Z0-9]+$/i.test(gaId);
  const isValidGtm = gtmId && /^GTM-[A-Z0-9]+$/i.test(gtmId);

  return (
    <>
      <Suspense fallback={null}>
        <AnalyticsListener />
      </Suspense>

      {isValidGtm && (
        <Script
          id="gtm-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'dataLayer','${gtmId}');
            `,
          }}
        />
      )}

      {isValidGa && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-loader"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}
    </>
  );
}