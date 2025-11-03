"use client"

import { useParams } from "react-router-dom"
import { useState } from "react"
import { LISTINGS } from "../data/listings"
import { MapPin, MessageCircle, Check, ChevronLeft, ChevronRight } from "lucide-react"

export default function ListingDetail() {
  const { id } = useParams()
  const listing = LISTINGS.find((l) => l.id === Number.parseInt(id))
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!listing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted">Property not found</p>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % listing.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + listing.images.length) % listing.images.length)
  }

  return (
    <div className="bg-background">
      {/* Image Gallery */}
      <div className="max-w-7xl mx-auto">
        <div className="relative h-96 md:h-[600px] overflow-hidden rounded-lg bg-gray-200">
          <img
            src={listing.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${listing.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Gallery Controls */}
          {listing.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg z-10"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-lg z-10"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="text-foreground" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                {currentImageIndex + 1} / {listing.images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Gallery */}
        {listing.images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {listing.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`flex-shrink-0 h-20 w-32 rounded-lg overflow-hidden border-2 transition-colors ${
                  idx === currentImageIndex ? "border-primary" : "border-border"
                }`}
              >
                <img
                  src={img || "/placeholder.svg"}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">{listing.title}</h1>
              <div className="flex items-center gap-2 text-muted mb-4">
                <MapPin size={20} />
                <span className="text-lg">{listing.location}</span>
              </div>
              {listing.rating && (
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="font-semibold">{listing.rating}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
              <p className="text-lg text-muted leading-relaxed">{listing.description}</p>
            </section>

            {/* Amenities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {listing.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                    <Check className="text-primary flex-shrink-0" size={20} />
                    <span className="font-medium text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Full Address */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Location</h2>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-lg text-foreground font-medium">{listing.address}</p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div>
            {/* Price Card */}
            <div className="bg-card border border-border rounded-lg p-6 sticky top-20">
              <div className="mb-6">
                <p className="text-sm text-muted mb-1">Price per night</p>
                <p className="text-4xl font-bold text-primary mb-2">KES {listing.price.toLocaleString()}</p>
              </div>

              {/* Host Info */}
              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted mb-2">Hosted by</p>
                <p className="font-semibold text-foreground">{listing.host}</p>
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${listing.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors mb-4"
              >
                <MessageCircle size={20} />
                Contact via WhatsApp
              </a>

              {/* Availability Note */}
              <div className="bg-accent/20 border border-accent rounded-lg p-4 text-sm">
                <p className="text-foreground font-semibold mb-1">Availability</p>
                <p className="text-muted">Available for bookings. Contact host for specific dates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "LodgingBusiness",
          name: listing.title,
          description: listing.description,
          url: `https://bomanihosts.com/listing/${listing.id}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: listing.address,
            addressCountry: "KE",
          },
          priceRange: `KES ${listing.price}`,
          offers: {
            "@type": "Offer",
            price: listing.price.toString(),
            priceCurrency: "KES",
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: listing.rating || 4.5,
            bestRating: "5",
            worstRating: "1",
          },
        })}
      </script>
    </div>
  )
}
