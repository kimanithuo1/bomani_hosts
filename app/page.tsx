import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import { FeaturedListings } from "@/components/featured-listings"

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Find Your Dream Home
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Discover premium properties and connect with trusted sellers
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="bg-card rounded-lg shadow-lg p-4 border border-border">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="City, neighborhood, or address"
                    className="pl-10 bg-input border-0 h-10"
                  />
                </div>
                <Button className="sm:w-auto h-10">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <button className="px-4 py-2 bg-muted text-foreground rounded-full hover:bg-accent transition-colors text-sm font-medium">
                For Sale
              </button>
              <button className="px-4 py-2 bg-muted text-foreground rounded-full hover:bg-accent transition-colors text-sm font-medium">
                For Rent
              </button>
              <button className="px-4 py-2 bg-muted text-foreground rounded-full hover:bg-accent transition-colors text-sm font-medium">
                New Listings
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50K+</div>
              <p className="text-sm text-muted-foreground">Properties Listed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">12K+</div>
              <p className="text-sm text-muted-foreground">Monthly Searches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <FeaturedListings />

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to List Your Property?</h2>
          <p className="text-lg mb-8 text-balance opacity-90">
            Join thousands of sellers and landlords showcasing their properties to qualified buyers
          </p>
          <Button variant="secondary" size="lg">
            List Your Property Today
          </Button>
        </div>
      </section>
    </main>
  )
}
