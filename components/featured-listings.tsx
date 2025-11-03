import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Bed, Bath, Ruler as Ruler2 } from "lucide-react"

const listings = [
  {
    id: 1,
    title: "Modern Downtown Loft",
    price: "$850,000",
    location: "Downtown, City Center",
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: "/modern-loft-downtown.jpg",
    badge: "Featured",
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: "$650,000",
    location: "Oak Heights, Suburb",
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "/family-home-suburban.jpg",
    badge: "New",
  },
  {
    id: 3,
    title: "Beachfront Villa",
    price: "$1,200,000",
    location: "Coastal Bay, Beach",
    beds: 5,
    baths: 4,
    sqft: 4500,
    image: "/beachfront-villa.jpg",
    badge: "Featured",
  },
  {
    id: 4,
    title: "Urban Studio Apartment",
    price: "$450,000",
    location: "Midtown, Arts District",
    beds: 1,
    baths: 1,
    sqft: 650,
    image: "/urban-studio-apartment.jpg",
  },
]

export function FeaturedListings() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Featured Properties</h2>
          <p className="text-lg text-muted-foreground">Explore our handpicked selection of premium listings</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  className="w-full h-48 object-cover"
                />
                {listing.badge && (
                  <Badge className="absolute top-3 right-3" variant="secondary">
                    {listing.badge}
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="mb-2">
                  <p className="text-2xl font-bold text-primary">{listing.price}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {listing.location}
                  </p>
                </div>
                <h3 className="font-semibold text-foreground mb-4">{listing.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{listing.beds} Bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{listing.baths} Bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Ruler2 className="w-4 h-4" />
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
