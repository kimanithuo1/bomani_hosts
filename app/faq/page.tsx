import type { Metadata } from "next"
import { FAQSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "FAQ - BomaniHosts",
  description:
    "Find answers to frequently asked questions about booking properties, listing on BomaniHosts, payments, cancellations, and more.",
  keywords:
    "FAQ, frequently asked questions, booking help, property rental, BomaniHosts Kenya, WhatsApp booking, short-term rental",
  openGraph: {
    title: "FAQ - BomaniHosts",
    description:
      "Find answers to frequently asked questions about booking properties, listing on BomaniHosts, payments, and more.",
    type: "website",
    url: "https://bomanihosts.com/faq",
  },
}

export default function FAQPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <FAQSection />
    </main>
  )
}
