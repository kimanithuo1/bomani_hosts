export const metadata = {
  title: "Privacy Policy - HomeHub",
  description: "Read HomeHub's privacy policy and learn how we protect your data.",
}

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Introduction",
      content:
        "HomeHub respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information.",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect information about you in a variety of ways. The information we may collect on the Site includes: Personal Data (name, email address, phone number, mailing address) and usage data (IP address, browser type, pages visited).",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We use the information we collect to personalize your experience, improve our platform, process transactions, send promotional communications, and comply with legal obligations.",
    },
    {
      title: "4. How We Protect Your Information",
      content:
        "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons.",
    },
    {
      title: "5. Third-Party Links",
      content:
        "Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.",
    },
    {
      title: "6. CCPA Privacy Rights",
      content:
        "If you are a California resident, you have specific rights regarding your personal information under the California Consumer Privacy Act (CCPA).",
    },
    {
      title: "7. Contact Us",
      content: "If you have questions or comments about this Privacy Policy, please contact us at: privacy@homehub.com",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: November 2024</p>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-foreground mb-3">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 bg-muted rounded-lg">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Note:</strong> This is a template privacy policy. Please consult with a
            legal professional to ensure your policy complies with all applicable laws and regulations.
          </p>
        </div>
      </div>
    </main>
  )
}
