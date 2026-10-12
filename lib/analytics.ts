"use client";

export type AnalyticsEventName =
  | "landing_page_view"
  | "scroll_depth"
  | "explore_opportunities_click"
  | "join_rewaiq_click"
  | "join_and_start_earning_click"
  | "signin_click"
  | "signup_started"
  | "signup_completed"
  | "onboarding_completed"
  | "dashboard_reached"
  | "first_meaningful_activity"
  | "first_coins_earned"
  | "task_engagement"
  | "repeat_activity"
  | "campus_ambassador_click"
  | "artist_creator_click"
  | "hub_click"
  | "partner_click";

export const ALLOWED_ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
] as const;

export type AllowedAttributionKey = (typeof ALLOWED_ATTRIBUTION_KEYS)[number];
export type UtmParams = Partial<Record<AllowedAttributionKey, string>>;

const STORAGE_KEY = "rwq_attribution_params";
const MAX_VALUE_LENGTH = 100;

export function sanitizeAttributionValue(val: unknown): string | undefined {
  if (typeof val !== "string") return undefined;
  const trimmed = val.trim();
  if (!trimmed) return undefined;
  const cleaned = trimmed.replace(/[<>'"\(\)\\]/g, "");
  return cleaned.slice(0, MAX_VALUE_LENGTH);
}

export function captureUtmParams(): UtmParams {
  if (typeof window === "undefined") return {};

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const fresh: UtmParams = {};
    let hasFresh = false;

    for (const key of ALLOWED_ATTRIBUTION_KEYS) {
      const raw = urlParams.get(key);
      if (raw) {
        const sanitized = sanitizeAttributionValue(raw);
        if (sanitized) {
          fresh[key] = sanitized;
          hasFresh = true;
        }
      }
    }

    if (hasFresh) {
      const serialized = JSON.stringify(fresh);
      try { sessionStorage.setItem(STORAGE_KEY, serialized); } catch {}
      try { localStorage.setItem(STORAGE_KEY, serialized); } catch {}
      return fresh;
    }

    try {
      const sessionData = sessionStorage.getItem(STORAGE_KEY);
      if (sessionData) return JSON.parse(sessionData);
    } catch {}

    try {
      const localData = localStorage.getItem(STORAGE_KEY);
      if (localData) return JSON.parse(localData);
    } catch {}
  } catch {}

  return {};
}

export function buildAttributedUrl(rawUrl: string): string {
  try {
    const activeParams = captureUtmParams();
    const url = new URL(
      rawUrl,
      typeof window !== "undefined" ? window.location.origin : "https://rewaiq.com.ng"
    );

    for (const key of ALLOWED_ATTRIBUTION_KEYS) {
      const val = activeParams[key];
      if (val && !url.searchParams.has(key)) {
        url.searchParams.set(key, val);
      }
    }
    return url.toString();
  } catch {
    return rawUrl;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  eventParams: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  try {
    const attribution = captureUtmParams();
    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
      ...attribution,
      ...eventParams,
    };

    if (Array.isArray((window as any).dataLayer)) {
      (window as any).dataLayer.push(payload);
    }

    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", eventName, payload);
    }

    if (process.env.NODE_ENV === "development") {
      console.log(`[Analytics Event: ${eventName}]`, payload);
    }
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[Analytics] Failed dispatching ${eventName}:`, err);
    }
  }
}