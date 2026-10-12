import assert from "node:assert";

// Simulation of analytics logic for verification
const ALLOWED_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid"];

function sanitize(val) {
  if (typeof val !== "string") return undefined;
  const trimmed = val.trim();
  if (!trimmed) return undefined;
  return trimmed.replace(/[<>'"\(\)\\]/g, "").slice(0, 100);
}

function buildUrl(rawUrl, storedParams) {
  const url = new URL(rawUrl);
  for (const key of ALLOWED_KEYS) {
    const val = storedParams[key];
    if (val && !url.searchParams.has(key)) {
      url.searchParams.set(key, val);
    }
  }
  return url.toString();
}

console.log("Running Analytics Engine Tests...");

// Test 1: Discard non-allowlisted query parameters
const query = new URLSearchParams("utm_source=adveda&email=user@test.com&token=secret123&utm_campaign=pilot");
const filtered = {};
for (const [k, v] of query.entries()) {
  if (ALLOWED_KEYS.includes(k)) {
    filtered[k] = sanitize(v);
  }
}
assert.deepStrictEqual(filtered, { utm_source: "adveda", utm_campaign: "pilot" });
console.log("✔ Test 1 Passed: Unauthorized parameters (email, token) successfully discarded.");

// Test 2: Sanitize values and enforce 100 char limit
const dangerous = "<script>alert('xss')</script>" + "a".repeat(120);
const cleaned = sanitize(dangerous);
assert.strictEqual(cleaned.includes("<"), false);
assert.strictEqual(cleaned.includes("'"), false);
assert.strictEqual(cleaned.length <= 100, true);
console.log("✔ Test 2 Passed: Injection characters stripped and length capped at 100 characters.");

// Test 3: Preserve existing destination parameters and append attribution
const destination = "https://app.rewaiq.com.ng/login?ref=beta&utm_source=existing";
const decorated = buildUrl(destination, { utm_source: "adveda", utm_campaign: "pilot" });
assert.strictEqual(decorated, "https://app.rewaiq.com.ng/login?ref=beta&utm_source=existing&utm_campaign=pilot");
console.log("✔ Test 3 Passed: Pre-existing destination params respected without duplication.");

console.log("\nAll Analytics Tests Passed Successfully!");