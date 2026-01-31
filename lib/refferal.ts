export function makeReferralCode(prefix = "RWQ") {
  // Short, human-friendly code
  const part = Math.random().toString(36).slice(2, 8).toUpperCase()
  const part2 = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `${prefix}-${part}${part2}`
}
