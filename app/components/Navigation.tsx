"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function Navigation({ currentPage }: { currentPage: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const donateLink = "https://support.ewb-usa.org/campaign/university-of-central-florida-chapter/c83961";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Brand */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/ewb_logo.png" 
              alt="EWB Logo" 
              width={80} 
              height={80} 
              className="object-contain"
            />
            <span className="font-bold text-xl text-blue-800 hidden lg:block">
              Engineers Without Borders UCF
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 hover:text-blue-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`relative px-2 py-1 ${currentPage === "home" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"}`}>Home</Link>
            <Link href="/about" className={`relative px-2 py-1 ${currentPage === "about" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"}`}>About Us</Link>
            <Link href="/projects" className={`relative px-2 py-1 ${currentPage === "projects" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"}`}>Projects</Link>
            <Link href="/get-involved" className={`relative px-2 py-1 ${currentPage === "get-involved" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"}`}>Get Involved</Link>
            <Link href="/events" className={`relative px-2 py-1 ${currentPage === "events" ? "text-blue-700 font-semibold" : "text-gray-700 hover:text-blue-700"}`}>Events</Link>
            
            {/* FIXED DESKTOP DONATE BUTTON */}
            <a
              href={donateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Donate
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-4 pb-4">
            <Link href="/" className="px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="px-4 py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="/projects" className="px-4 py-2" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link href="/get-involved" className="px-4 py-2" onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
            <Link href="/events" className="px-4 py-2" onClick={() => setIsMenuOpen(false)}>Events</Link>
            
            {/* FIXED MOBILE DONATE BUTTON */}
            <a
              href={donateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md text-center mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}