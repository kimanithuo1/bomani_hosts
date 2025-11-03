import { Link } from "react-router-dom"
import { MapPin, Star } from "lucide-react"

export default function ListingCard({ listing }) {
  return (
    <Link to={`/listing/${listing.id}`} className="group">
      <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <img
            src={listing.image || "/placeholder.svg"}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {listing.featured && (
            <div className="absolute top-3 right-3 bg-accent-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {listing.title}
            </h3>
            {listing.rating && (
              <div className="flex items-center gap-1">
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{listing.rating}</span>
              </div>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-muted mb-3">
            <MapPin size={14} />
            <span className="text-sm">{listing.location}</span>
          </div>

          {/* Amenities */}
          <div className="flex items-center gap-2 mb-4 text-muted">
            {listing.amenities?.slice(0, 3).map((amenity, i) => (
              <span key={i} className="text-xs bg-border/50 px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">From</p>
              <p className="text-xl font-bold text-primary">KES {listing.price.toLocaleString()}</p>
              <p className="text-xs text-muted">per night</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
