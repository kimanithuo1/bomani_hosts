import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "About BomaniHosts - Your Trusted Real Estate Platform",
  description:
    "Learn about BomaniHosts, our mission, and our commitment to helping you find your dream home across Africa.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About BomaniHosts</h1>
          <p className="text-xl opacity-90">
            Your trusted marketplace for finding and listing premium properties across Africa
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            At BomaniHosts, we believe that finding the right home should be simple, transparent, and empowering. Our
            mission is to connect buyers, sellers, and renters with premium properties while providing world-class
            service every step of the way.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over 50,000 properties listed and a 98% customer satisfaction rate, we've built a community of trusted
            professionals dedicated to making real estate accessible to everyone across Africa.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description: "We believe in honest, upfront communication about properties and pricing.",
              },
              {
                title: "Excellence",
                description: "We strive for the highest standards in customer service and property listings.",
              },
              {
                title: "Community",
                description: "We're committed to building a supportive network of buyers, sellers, and agents.",
              },
            ].map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Why Choose BomaniHosts?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50K+", label: "Properties Listed" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "12K+", label: "Monthly Searches" },
              { number: "1M+", label: "Annual Visitors" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <Button variant="secondary" size="lg">
            Start Browsing Properties
          </Button>
        </div>
      </section>
    </main>
  )
}
