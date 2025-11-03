import { Link } from "react-router-dom"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">BomaniHosts</h3>
            <p className="text-white/80 text-sm">Discover premium accommodations across Kenya.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-white/80 hover:text-white">
                  Listings
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-white/80 hover:text-white">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@bomanihosts.com" className="text-white/80 hover:text-white">
                  info@bomanihosts.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+254700000000" className="text-white/80 hover:text-white">
                  +254 700 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
          <p>&copy; {currentYear} BomaniHosts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
