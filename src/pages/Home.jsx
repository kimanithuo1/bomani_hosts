import Hero from "../components/Hero"
import SearchBar from "../components/SearchBar"
import ListingCard from "../components/ListingCard"
import { LISTINGS } from "../data/listings"
import { ArrowRight, MapPin, Wifi, DollarSign } from "lucide-react"
import { Link } from "react-router-dom"

export default function Home() {
  const featuredListings = LISTINGS.filter((l) => l.featured).slice(0, 6)

  return (
    <>
      <Hero
        title="Discover Premium Accommodations"
        subtitle="Find your perfect stay across Kenya and East Africa"
        backgroundImage="/beautiful-kenyan-landscape-sunset.jpg"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <SearchBar />
      </div>

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Featured Listings</h2>
            <p className="text-muted">Handpicked properties for the best experiences</p>
          </div>
          <Link to="/listings" className="text-primary hover:text-primary-light font-semibold flex items-center gap-2">
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose BomaniHosts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Prime Locations</h3>
              <p className="text-white/80">Carefully selected properties in the best neighborhoods across Kenya.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-white/80">Competitive rates with transparent pricing and no hidden fees.</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wifi size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Amenities</h3>
              <p className="text-white/80">All properties equipped with WiFi, kitchens, and modern facilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-accent rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Find Your Perfect Stay?</h2>
          <p className="text-muted mb-6 max-w-2xl mx-auto">
            Browse our collection of premium accommodations and find exactly what you're looking for.
          </p>
          <Link
            to="/listings"
            className="inline-block bg-primary hover:bg-primary-light text-white font-semibold py-3 px-8 rounded-lg transition-colors"
          >
            Explore Listings
          </Link>
        </div>
      </section>
    </>
  )
}
