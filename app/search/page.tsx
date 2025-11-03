import type { Metadata } from "next"
import { SearchPageClient } from "./search-client"

export const metadata: Metadata = {
  title: "Search Properties - HomeHub | Find Your Dream Home",
  description:
    "Search and browse thousands of premium properties. Filter by price, type, location, and more on HomeHub's real estate marketplace.",
  keywords: "property search, real estate, homes for sale, apartments, listings",
  openGraph: {
    title: "Search Properties - HomeHub",
    description: "Find your dream home from thousands of premium properties",
    type: "website",
  },
}

export default function SearchPage() {
  return <SearchPageClient />
}
