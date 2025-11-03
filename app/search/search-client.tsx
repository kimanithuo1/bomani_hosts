"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Sliders } from "lucide-react"
import { ListingsGrid } from "@/components/listings-grid"
import { FiltersPanel } from "@/components/filters-panel"

export function SearchPageClient() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true)
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 })
  const [selectedType, setSelectedType] = useState("all")
  const [selectedBeds, setSelectedBeds] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border sticky top-16 z-40 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1 w-full sm:w-auto">
              <Input
                placeholder="Search by location, address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Button variant="outline" size="sm" onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="md:hidden">
              <Sliders className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className={`lg:block ${isFiltersOpen ? "block" : "hidden"} lg:col-span-1`}>
            <FiltersPanel
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedBeds={selectedBeds}
              setSelectedBeds={setSelectedBeds}
            />
          </aside>

          {/* Main Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">Showing results {searchQuery && `for "${searchQuery}"`}</p>
            </div>
            <ListingsGrid priceRange={priceRange} selectedType={selectedType} selectedBeds={selectedBeds} />
          </div>
        </div>
      </div>
    </main>
  )
}
