"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface FiltersPanelProps {
  priceRange: { min: number; max: number }
  setPriceRange: (range: { min: number; max: number }) => void
  selectedType: string
  setSelectedType: (type: string) => void
  selectedBeds: string
  setSelectedBeds: (beds: string) => void
}

export function FiltersPanel({
  priceRange,
  setPriceRange,
  selectedType,
  setSelectedType,
  selectedBeds,
  setSelectedBeds,
}: FiltersPanelProps) {
  return (
    <div className="space-y-4">
      {/* Price Range Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">
              Max Price: ${(priceRange.max / 1000000).toFixed(1)}M
            </label>
            <Slider
              defaultValue={[priceRange.max]}
              min={0}
              max={2000000}
              step={50000}
              onValueChange={(value) => setPriceRange({ ...priceRange, max: value[0] })}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span>$2M+</span>
          </div>
        </CardContent>
      </Card>

      {/* Property Type Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Property Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[
            { value: "all", label: "All Types" },
            { value: "house", label: "House" },
            { value: "apartment", label: "Apartment" },
            { value: "townhouse", label: "Townhouse" },
          ].map((type) => (
            <button
              key={type.value}
              onClick={() => setSelectedType(type.value)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                selectedType === type.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {type.label}
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Bedrooms Filter */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Bedrooms</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[
            { value: "all", label: "Any" },
            { value: "1", label: "1 Bed" },
            { value: "2", label: "2 Beds" },
            { value: "3", label: "3 Beds" },
            { value: "4", label: "4 Beds" },
            { value: "5+", label: "5+ Beds" },
          ].map((bed) => (
            <button
              key={bed.value}
              onClick={() => setSelectedBeds(bed.value)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                selectedBeds === bed.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {bed.label}
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Reset Filters */}
      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => {
          setPriceRange({ min: 0, max: 2000000 })
          setSelectedType("all")
          setSelectedBeds("all")
        }}
      >
        Reset Filters
      </Button>
    </div>
  )
}
