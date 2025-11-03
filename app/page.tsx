import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"
import { FeaturedListings } from "@/components/featured-listings"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-secondary/50 to-background py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Find Your Dream Home in Kenya
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Discover premium properties and connect directly with trusted hosts via WhatsApp
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
                <Button className="sm:w-auto h-10 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                Short-term Rental
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                Long-term Rental
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-medium">
                New Listings
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">500+</div>
              <p className="text-sm text-muted-foreground">Properties Listed</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <p className="text-sm text-muted-foreground">Guest Satisfaction</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">50K+</div>
              <p className="text-sm text-muted-foreground">Monthly Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <FeaturedListings />

      {/* FAQ Section - Added FAQ section for SEO rich snippets */}
      <FAQSection />

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to List Your Property?</h2>
          <p className="text-lg mb-8 text-balance opacity-90">
            Join hundreds of hosts showcasing their properties to qualified guests across Kenya and beyond
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            List Your Property Today
          </Button>
        </div>
      </section>
    </main>
  )
}
