"use client"

import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import Hero from "../components/Hero"
import ListingCard from "../components/ListingCard"
import { LISTINGS } from "../data/listings"

export default function Listings() {
  const [searchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState("featured")

  const filteredListings = useMemo(() => {
    let results = [...LISTINGS]

    // Filter by location
    const location = searchParams.get("location")
    if (location) {
      results = results.filter((l) => l.location.toLowerCase().includes(location.toLowerCase()))
    }

    // Filter by price range
    const price = searchParams.get("price")
    if (price) {
      if (price === "0-5000") {
        results = results.filter((l) => l.price <= 5000)
      } else if (price === "5000-15000") {
        results = results.filter((l) => l.price > 5000 && l.price <= 15000)
      } else if (price === "15000-50000") {
        results = results.filter((l) => l.price > 15000 && l.price <= 50000)
      } else if (price === "50000+") {
        results = results.filter((l) => l.price > 50000)
      }
    }

    // Sort
    if (sortBy === "price-low") {
      results.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      results.sort((a, b) => b.price - a.price)
    } else if (sortBy === "rating") {
      results.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    }

    return results
  }, [searchParams, sortBy])

  return (
    <>
      <Hero
        title="Our Listings"
        subtitle="Browse our complete collection of premium accommodations"
        backgroundImage="/property-listings-collage.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters and Sorting */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{filteredListings.length} Properties Found</h2>
          </div>
          <div className="flex items-center gap-4">
            <label className="text-sm font-semibold text-foreground">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted text-lg">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </>
  )
}
