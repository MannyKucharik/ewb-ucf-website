"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6">
        {/* Top section with logo and links */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* 1. Logo and description */}
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <Link href="/" className="group mb-6">
              <div className="relative w-80 h-32 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/ewb_transparent.png" // Ensure this file is in your /public folder
                  alt="Engineers Without Borders Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            {/* Centered Text Block */}
  <div className="max-w-xs">
    <h3 className="font-bold text-xl tracking-tight leading-tight">
      Engineers Without Borders
    </h3>
    <p className="text-sm text-blue-400 font-medium tracking-widest uppercase mt-2">
      UCF Student Chapter
    </p>
  </div>
</div>

          {/* 2. Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-4 text-blue-400 border-b border-gray-800 pb-2">Site</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/events" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* 3. Other Links (External - New Tab) */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg mb-4 text-blue-400 border-b border-gray-800 pb-2">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://ewb-usa.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  EWB-USA
                </Link>
              </li>
              <li>
                <Link href="https://ewb-usa.org/Volunteer-Registration" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Volunteer Village
                </Link>
              </li>
              <li>
                <Link href="https://knightconnect.campuslabs.com/engage/organization/ewb-ucf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  KnightConnect
                </Link>
              </li>
              <li>
                <Link href="https://support.ewb-usa.org/campaign/university-of-central-florida-chapter/c83961" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Connect Section */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-4 text-blue-400 border-b border-gray-800 pb-2 w-full text-center md:text-left">Connect with Us!</h3>
            
            {/* Social Icons Row */}
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://discord.com/invite/8UpGZbY4Ck" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-[#5865F2] w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-lg"
                aria-label="Discord"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.683 4.37a.07.07 0 00-.032.027C.533 9.048-.32 13.61.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.862-1.297 1.198-1.99a.076.076 0 00-.041-.105 13.11 13.11 0 01-1.872-.89.077.077 0 01-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 01.077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 01.077.01c.12.098.246.196.373.29a.077.077 0 01-.006.127 12.299 12.299 0 01-1.874.89.076.076 0 00-.041.106c.34.693.74 1.362 1.196 1.99a.076.076 0 00.084.028 19.83 19.83 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
              </a>
              <a 
                href="https://instagram.com/ucf_ewb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-lg"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z"/>
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
    <circle cx="18.406" cy="5.594" r="1.44"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/engineers-without-borders-ucf-2ab905305/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-lg"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>

            {/* Email Link (Centered under icons) */}
            <a 
              href="mailto:ucfewb@gmail.com" 
              className="text-gray-400 hover:text-blue-400 flex items-center gap-2 transition-colors text-sm font-medium w-full md:justify-start justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              ucfewb@gmail.com
            </a>
          </div>
        </div>
        
        {/* Bottom copyright section */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Engineers Without Borders UCF Student Chapter. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}