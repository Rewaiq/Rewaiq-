import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rewaiq Hub | Rewaiq Technologies Ltd",
  description:
    "Rewaiq Hub is the innovation and talent development arm of Rewaiq Technologies Ltd, located at Yellow Avenue.",
}

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return children
}
