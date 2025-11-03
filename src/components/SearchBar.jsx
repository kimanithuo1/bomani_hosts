"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom"

const LOCATIONS = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Kigali", "Dar es Salaam", "Kampala"]

export default function SearchBar({ onSearch }) {
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("all")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.append("location", location)
    if (priceRange !== "all") params.append("price", priceRange)
    navigate(`/listings?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="bg-card rounded-lg shadow-lg p-6 md:p-8 -mt-16 relative z-10 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All locations</option>
            {LOCATIONS.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Price Range</label>
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All prices</option>
            <option value="0-5000">KES 0 - 5,000</option>
            <option value="5000-15000">KES 5,000 - 15,000</option>
            <option value="15000-50000">KES 15,000 - 50,000</option>
            <option value="50000+">KES 50,000+</option>
          </select>
        </div>

        {/* Placeholder for more filters */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">Type</label>
          <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
            <option>Any type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>House</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-light text-white font-semibold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Search size={20} />
            <span>Search</span>
          </button>
        </div>
      </div>
    </form>
  )
}
