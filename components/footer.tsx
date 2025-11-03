import Link from "next/link"
import { Mail, MessageCircle, Facebook, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent text-accent-foreground border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-lg">BomaniHosts</span>
            </div>
            <p className="text-sm opacity-90">
              Discover and list premium properties across Kenya with trusted hosts and verified guests.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/search" className="opacity-80 hover:opacity-100 transition-opacity">
                  Search Listings
                </Link>
              </li>
              <li>
                <Link href="/faq" className="opacity-80 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="mailto:support@bomanihosts.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  Email Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@bomanihosts.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  hello@bomanihosts.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4" />
                <a
                  href="https://wa.me/254700000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  WhatsApp: +254 700 000 000
                </a>
              </div>
              <div className="flex gap-3 mt-4">
                <a href="#" className="hover:opacity-80 transition-opacity" title="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity" title="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://wa.me/254700000000" className="hover:opacity-80 transition-opacity" title="WhatsApp">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>&copy; {currentYear} BomaniHosts. All rights reserved.</p>
          <p>Find verified homes and apartments across Kenya with BomaniHosts.</p>
        </div>
      </div>
    </footer>
  )
}
