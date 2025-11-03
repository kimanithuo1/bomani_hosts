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
    default: "BomaniHosts - Find Your Dream Property",
    template: "%s - BomaniHosts",
  },
  description:
    "Discover and browse premium properties with BomaniHosts. Your trusted real estate marketplace with 50K+ listings across Kenya and beyond.",
  keywords: "real estate, properties, homes, apartments, buy, rent, sell, Kenya",
  generator: "v0.app",
  authors: [{ name: "BomaniHosts" }],
  creator: "BomaniHosts",
  publisher: "BomaniHosts",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bomanihosts.com",
    siteName: "BomaniHosts",
    title: "BomaniHosts - Find Your Dream Property",
    description: "Discover and browse premium properties with BomaniHosts",
    images: [
      {
        url: "https://bomanihosts.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BomaniHosts - Real Estate Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BomaniHosts - Find Your Dream Property",
    description: "Discover and browse premium properties with BomaniHosts",
    images: ["https://bomanihosts.com/twitter-image.jpg"],
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
        <link rel="canonical" href="https://bomanihosts.com" />
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
