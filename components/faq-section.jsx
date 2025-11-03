"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqData = [
  {
    id: 1,
    question: "How do I contact a host?",
    answer:
      "Use the WhatsApp contact button on every listing. Tapping it opens a chat to the host using the international number on the listing (Kenya: +254). We recommend sending the listing title or ID in your first message so the host can respond faster.",
  },
  {
    id: 2,
    question: "How do I book a house on BomaniHosts?",
    answer:
      "Booking is arranged directly with the host. Click Contact via WhatsApp, agree the dates and price, and follow the host's payment instructions. Always confirm the booking dates and any extra fees in writing before making a payment.",
  },
  {
    id: 3,
    question: "Are listed prices per night or per month?",
    answer:
      "Price units are shown on each listing (e.g., KES per night or KES per month). If a listing doesn't explicitly say, ask the host via WhatsApp before confirming — the listing details will always state the currency and rate.",
  },
  {
    id: 4,
    question: "Does BomaniHosts handle payments?",
    answer:
      "Not by default. The platform connects guests and hosts; payments are arranged between you and the host. We strongly recommend using secure methods (M-Pesa, verified bank transfer, or a trusted payment gateway if offered) and saving receipts for every transaction.",
  },
  {
    id: 5,
    question: "How do I know a listing is legitimate?",
    answer:
      "Verified listings display a verification badge when the host has completed identity checks and submitted professional photos. Always review listing photos, host reviews, and ask for additional details (ID, references, or a short video) if you are unsure.",
  },
  {
    id: 6,
    question: "What are the cancellation and refund rules?",
    answer:
      "Cancellation and refund policies are set by each host and are shown in the listing details. Before paying, confirm the host's cancellation policy in writing and save all communications. If you need help, contact BomaniHosts support with screenshots and booking details.",
  },
  {
    id: 7,
    question: "Are cleaning fees or extra charges included?",
    answer:
      "Some listings include cleaning and utility fees while others list them separately. Check the 'Fees' section on the listing and ask the host via WhatsApp to get a full price breakdown before you pay.",
  },
  {
    id: 8,
    question: "What amenities are guaranteed?",
    answer:
      "Amenities (Wi-Fi, hot water, kitchen, parking, etc.) are listed per property. Use the filters on search pages to find listings with the amenities you need, and confirm any critical service directly with the host.",
  },
  {
    id: 9,
    question: "How do I report a problem during my stay?",
    answer:
      "First, message the host via WhatsApp and request a solution. If the issue remains unresolved, contact BomaniHosts support with photos/screenshots and a clear description. We'll review and advise on next steps.",
  },
  {
    id: 10,
    question: "Can I list my property on BomaniHosts?",
    answer:
      "Yes. Hosts can sign up and create a listing through the Host dashboard (or contact us to get started). You'll need a title, description, clear photos, accurate location, price, and WhatsApp contact number. We provide tips to optimize listings for better search performance.",
  },
  {
    id: 11,
    question: "How are listing photos handled?",
    answer:
      "Hosts are encouraged to upload professional, high-resolution images. BomaniHosts optimizes images for fast loading (WebP/AVIF) and provides suggested alt text for accessibility. If a photo looks misleading or manipulated, report it to support.",
  },
  {
    id: 12,
    question: "How do I report fraud or suspicious activity?",
    answer:
      "If you suspect fraud (fake listings, payment scams, or impersonation), stop communication and save all messages/screenshots. Report immediately to BomaniHosts support and to local authorities if money was transferred. Include dates, amounts, and the host's WhatsApp number.",
  },
]

interface FAQItemProps {
  item: (typeof faqData)[0]
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <Card className="border border-border bg-card hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/30 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="text-left font-semibold text-foreground text-balance">{item.question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 pt-0 border-t border-border">
          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
        </div>
      )}
    </Card>
  )
}

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground text-balance">
            Find answers to common questions about booking and listing on BomaniHosts
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent/10 border border-accent rounded-lg">
          <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <a
            href="mailto:support@bomanihosts.com"
            className="inline-flex items-center justify-center px-4 py-2 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            Contact Support
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
