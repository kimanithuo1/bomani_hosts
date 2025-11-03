"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Ruler as Ruler2, Heart, Share2, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function ListingDetailPage() {
  const params = useParams()
  const id = params.id as string
  const [isFavorite, setIsFavorite] = useState(false)

  // Mock listing data - in production, fetch from API based on id
  const listing = {
    id: Number.parseInt(id),
    title: "Modern Downtown Loft",
    price: 850000,
    location: "Downtown, City Center",
    address: "123 Main St, Downtown, City Center, State 12345",
    beds: 2,
    baths: 2,
    sqft: 1200,
    type: "apartment",
    yearBuilt: 2020,
    description:
      "Welcome to this stunning modern loft in the heart of downtown. This beautifully designed space features high ceilings, large windows, and a contemporary open floor plan. Perfect for professionals and young families looking for urban living at its finest.",
    highlights: [
      "Recently renovated with modern finishes",
      "Floor-to-ceiling windows with city views",
      "Open concept living and dining area",
      "Stainless steel appliances",
      "In-unit laundry",
      "Building amenities: gym, rooftop deck, concierge",
    ],
    images: ["/placeholder.svg?key=x120u", "/placeholder.svg?key=cdc8w", "/placeholder.svg?key=bc7ku"],
    agent: {
      name: "Sarah Johnson",
      phone: "(555) 123-4567",
      email: "sarah@realestate.com",
      image: "/placeholder.svg?key=zysyj",
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Image Section */}
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <img
              src={listing.images[0] || "/placeholder.svg"}
              alt={listing.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Button size="icon" variant="secondary" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </Button>
              <Button size="icon" variant="secondary">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{listing.title}</h1>
                  <p className="text-lg text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {listing.location}
                  </p>
                </div>
              </div>
              <p className="text-3xl font-bold text-primary mb-4">${listing.price.toLocaleString()}</p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Bed className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold">{listing.beds}</span>
                </div>
                <p className="text-xs text-muted-foreground">Bedrooms</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Bath className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold">{listing.baths}</span>
                </div>
                <p className="text-xs text-muted-foreground">Bathrooms</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Ruler2 className="w-5 h-5 text-primary" />
                  <span className="text-2xl font-bold">{listing.sqft.toLocaleString()}</span>
                </div>
                <p className="text-xs text-muted-foreground">Sq. Feet</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl font-bold">{listing.yearBuilt}</span>
                </div>
                <p className="text-xs text-muted-foreground">Year Built</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">{listing.description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Property Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {listing.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Gallery */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">More Photos</h2>
              <div className="grid grid-cols-2 gap-4">
                {listing.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Property photo ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Agent Card */}
          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Contact Agent</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <img
                    src={listing.agent.image || "/placeholder.svg"}
                    alt={listing.agent.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-foreground">{listing.agent.name}</h3>
                  <p className="text-sm text-muted-foreground">Real Estate Agent</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    {listing.agent.phone}
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Agent
                  </Button>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Address:</strong>
                    <br />
                    {listing.address}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground">Property Type</p>
                  <Badge variant="secondary" className="w-full justify-center">
                    {listing.type.charAt(0).toUpperCase() + listing.type.slice(1)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
