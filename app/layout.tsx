import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "HomeHub - Find Your Dream Property",
    template: "%s - HomeHub",
  },
  description:
    "Discover and browse premium properties with HomeHub. Your trusted real estate marketplace with 50K+ listings.",
  keywords: "real estate, properties, homes, apartments, buy, rent, sell",
  generator: "v0.app",
  authors: [{ name: "HomeHub" }],
  creator: "HomeHub",
  publisher: "HomeHub",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://homehub.com",
    siteName: "HomeHub",
    title: "HomeHub - Find Your Dream Property",
    description: "Discover and browse premium properties with HomeHub",
    images: [
      {
        url: "https://homehub.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HomeHub - Real Estate Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HomeHub - Find Your Dream Property",
    description: "Discover and browse premium properties with HomeHub",
    images: ["https://homehub.com/twitter-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://homehub.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
