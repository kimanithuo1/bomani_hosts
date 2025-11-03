"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Ruler as Ruler2, Heart } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface ListingsGridProps {
  priceRange: { min: number; max: number }
  selectedType: string
  selectedBeds: string
}

// Mock data - in production, this would come from an API
const allListings = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    price: 850000,
    location: "Downtown, City Center",
    address: "123 Main St",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "apartment",
    image: "/modern-downtown-loft.png",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: 650000,
    location: "Oak Heights, Suburb",
    address: "456 Oak Ave",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
    image: "/suburban-family-home.png",
    badge: "New",
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: 1200000,
    location: "Coastal Bay, Beach",
    address: "789 Beach Rd",
    beds: 5,
    baths: 4,
    sqft: 4500,
    type: "house",
    image: "/beachfront-villa-luxury.jpg",
    badge: "Featured",
  },
  {
    id: 4,
    title: "Urban Studio Apartment",
    price: 450000,
    location: "Midtown, Arts District",
    address: "321 Art St",
    beds: 1,
    baths: 1,
    sqft: 650,
    type: "apartment",
    image: "/modern-studio-apartment-urban.jpg",
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    price: 1500000,
    location: "Downtown, Premium District",
    address: "555 Sky Tower",
    beds: 3,
    baths: 3,
    sqft: 2200,
    type: "apartment",
    image: "/luxury-penthouse-high-rise.jpg",
    badge: "Featured",
  },
  {
    id: 6,
    title: "Cozy Cottage",
    price: 550000,
    location: "Countryside, Garden Area",
    address: "999 Garden Ln",
    beds: 3,
    baths: 2,
    sqft: 1600,
    type: "house",
    image: "/cozy-cottage-countryside.jpg",
  },
  {
    id: 7,
    title: "Modern Townhouse",
    price: 700000,
    location: "Central District, Modern",
    address: "777 Modern Ave",
    beds: 3,
    baths: 2.5,
    sqft: 1800,
    type: "townhouse",
    image: "/modern-townhouse-contemporary.jpg",
  },
  {
    id: 8,
    title: "Waterfront Condo",
    price: 900000,
    location: "Riverside, Premium",
    address: "444 Water St",
    beds: 2,
    baths: 2,
    sqft: 1400,
    type: "apartment",
    image: "/waterfront-condo-river-view.jpg",
  },
]

export function ListingsGrid({ priceRange, selectedType, selectedBeds }: ListingsGridProps) {
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredListings = allListings.filter((listing) => {
    const priceMatch = listing.price >= priceRange.min && listing.price <= priceRange.max
    const typeMatch = selectedType === "all" || listing.type === selectedType
    const bedsMatch =
      selectedBeds === "all" ||
      (selectedBeds === "5+" ? listing.beds >= 5 : listing.beds === Number.parseInt(selectedBeds))

    return priceMatch && typeMatch && bedsMatch
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <div>
      <div className="mb-6 text-sm text-muted-foreground">{filteredListings.length} properties found</div>

      {filteredListings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Link key={listing.id} href={`/listings/${listing.id}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full cursor-pointer">
                <div className="relative">
                  <img
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-colors" />
                  {listing.badge && (
                    <Badge className="absolute top-3 right-3" variant="secondary">
                      {listing.badge}
                    </Badge>
                  )}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      toggleFavorite(listing.id)
                    }}
                    className="absolute top-3 left-3 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(listing.id) ? "fill-red-500 text-red-500" : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <p className="text-2xl font-bold text-primary">${listing.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {listing.location}
                    </p>
                  </div>
                  <h3 className="font-semibold text-foreground mb-4">{listing.title}</h3>
                  <div className="flex justify-between text-sm text-muted-foreground border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{listing.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{listing.baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler2 className="w-4 h-4" />
                      <span>{listing.sqft} sqft</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center">
          <p className="text-lg text-muted-foreground mb-4">No properties found matching your criteria</p>
          <p className="text-sm text-muted-foreground">Try adjusting your filters to see more results</p>
        </Card>
      )}
    </div>
  )
}
