"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <img 
            src="/images/story-image.png" 
            alt="Enabled Africa Logo" 
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-28 lg:h-28 object-contain"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6">
          <Link href="#" className="text-gray-600 hover:text-orange-500 text-base">Who we are</Link>
          <Link href="#why-enabled-africa" className="text-gray-600 hover:text-orange-500 text-base">Why Enabled Africa</Link>
          <Link href="#what-you-get" className="text-gray-600 hover:text-orange-500 text-base">What you get</Link>
          <Link href="#about-us" className="text-gray-600 hover:text-orange-500 text-base">About us</Link>
          <Link href="#our-story" className="text-gray-600 hover:text-orange-500 text-base">Our story</Link>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="#" className="text-gray-600 hover:text-orange-500 text-sm font-medium">
            Login
          </Link>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link href="#" className="block text-gray-600 hover:text-orange-500 text-base">Who we are</Link>
            <Link href="#why-enabled-africa" className="block text-gray-600 hover:text-orange-500 text-base">Why Enabled Africa</Link>
            <Link href="#what-you-get" className="block text-gray-600 hover:text-orange-500 text-base">What you get</Link>
            <Link href="#about-us" className="block text-gray-600 hover:text-orange-500 text-base">About us</Link>
            <Link href="#our-story" className="block text-gray-600 hover:text-orange-500 text-base">Our story</Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
              <Link href="#" className="text-gray-600 hover:text-orange-500 text-sm font-medium">
                Login
              </Link>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium w-full">
                Sign up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
