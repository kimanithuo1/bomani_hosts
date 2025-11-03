"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="font-bold text-lg text-foreground">BomaniHosts</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-foreground hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/listings" className="text-foreground hover:text-primary font-medium">
            Listings
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary font-medium">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary font-medium">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border px-4 py-4 flex flex-col gap-4">
          <Link to="/" className="text-foreground hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/listings"
            className="text-foreground hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Listings
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-foreground hover:text-primary font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  )
}
