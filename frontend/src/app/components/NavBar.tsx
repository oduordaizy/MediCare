"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../components/Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/hospitals", label: "Hospitals" },
  { href: "/doctors", label: "Doctors" },
  { href: "/specialists", label: "Specialists" },
  { href: "/contact", label: "Contact us" },
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo size="lg" className="text-white" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-white hover:text-yellow-300 transition-all duration-300 font-semibold text-sm uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="flex gap-4 ml-8">
              <Link href="/registration">
                <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Register
                </button>
              </Link>
              <Link href="/login">
                <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Log In
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-yellow-300 focus:outline-none focus:text-yellow-300 transition-colors duration-300"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white/10 backdrop-blur-sm rounded-xl mt-4 border border-white/20">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-yellow-300 block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 hover:bg-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 pb-2 border-t border-white/20">
                <div className="flex flex-col space-y-3">
                  <Link href="/registration">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold text-sm shadow-lg">
                      Register
                    </button>
                  </Link>
                  <Link href="/login">
                    <button className="w-full px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 font-bold text-sm">
                      Log In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 