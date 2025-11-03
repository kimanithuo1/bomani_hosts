export default function Privacy() {
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Introduction</h2>
            <p className="text-lg text-muted leading-relaxed">
              BomaniHosts ("we," "us," or "our") operates the BomaniHosts website. This page informs you of our policies
              regarding the collection, use, and disclosure of personal data when you use our service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Information Collection and Use</h2>
            <p className="text-lg text-muted leading-relaxed">
              We collect several different types of information for various purposes to provide and improve our service
              to you.
            </p>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Types of Data Collected:</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted">
              <li>Personal Data: Name, email address, phone number, address</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Use of Data</h2>
            <p className="text-lg text-muted leading-relaxed">
              BomaniHosts uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-muted mt-4">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
              <li>To monitor the usage of our service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Security of Data</h2>
            <p className="text-lg text-muted leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your personal data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Contact Us</h2>
            <p className="text-lg text-muted leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at info@bomanihosts.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
