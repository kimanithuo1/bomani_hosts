import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">About BomaniHosts</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-muted leading-relaxed mb-8">
            BomaniHosts is Kenya's premier accommodation listing platform, dedicated to connecting travelers with
            unique, high-quality properties across East Africa. Founded with a mission to showcase the region's finest
            hospitality offerings, we work with trusted hosts to provide unforgettable experiences.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Our Mission</h2>
          <p className="text-lg text-muted leading-relaxed mb-8">
            To make it easy for travelers to discover and book authentic, premium accommodations while supporting local
            hosts in showcasing their properties to a global audience.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Why Choose Us</h2>
          <ul className="space-y-4 text-lg text-muted leading-relaxed mb-8">
            <li className="flex gap-4">
              <span className="text-primary font-bold">✓</span>
              <span>
                <strong>Curated Properties:</strong> Every listing is carefully selected to meet our quality standards.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">✓</span>
              <span>
                <strong>Direct Communication:</strong> Connect directly with hosts via WhatsApp for seamless booking.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">✓</span>
              <span>
                <strong>Transparent Pricing:</strong> No hidden fees or surprise charges.
              </span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold">✓</span>
              <span>
                <strong>Local Expertise:</strong> Deep knowledge of Kenya's best neighborhoods and regions.
              </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Get in Touch</h2>
          <p className="text-lg text-muted leading-relaxed">
            Have questions? We'd love to hear from you.{" "}
            <Link to="/contact" className="text-primary font-semibold hover:text-primary-light">
              Contact us here
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
