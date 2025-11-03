import type { Metadata } from "next"
import { SearchPageClient } from "./search-client"

export const metadata: Metadata = {
  title: "Search Properties - BomaniHosts | Find Your Dream Home",
  description:
    "Search and browse thousands of premium properties. Filter by price, type, location, and more on BomaniHosts's real estate marketplace.",
  keywords: "property search, real estate, homes for sale, apartments, listings, Kenya",
  openGraph: {
    title: "Search Properties - BomaniHosts",
    description: "Find your dream home from thousands of premium properties",
    type: "website",
  },
}

export default function SearchPage() {
  return <SearchPageClient />
}
