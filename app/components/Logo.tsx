"use client";

import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="mr-4">
        <div className="w-16 h-16 relative">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Light blue outer circle */}
            <circle cx="100" cy="100" r="95" fill="#E6EEF9" />
            
            {/* Main blue globe */}
            <circle cx="100" cy="100" r="85" fill="#0071BC" />
            
            {/* Globe grid lines */}
            <path d="M30,100 L170,100" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M100,30 L100,170" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
            
            {/* Curved latitude lines */}
            <path d="M30,70 Q100,40 170,70" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M30,130 Q100,160 170,130" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
            
            {/* Curved longitude lines */}
            <path d="M70,30 Q40,100 70,170" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
            <path d="M130,30 Q160,100 130,170" stroke="white" strokeWidth="3" fill="none" opacity="0.8" />
            
            {/* White dove in upper left quadrant */}
            <path d="M80,70 C65,60 75,50 85,60 L65,45 C80,65 85,70 80,70Z" fill="white" />
            
            {/* Black circle in upper right */}
            <circle cx="140" cy="60" r="15" fill="black" />
            
            {/* White circle in lower left */}
            <circle cx="60" cy="140" r="15" fill="white" />
            
            {/* Black crescent at bottom */}
            <path d="M50,130 Q100,190 150,130 A85,85 0 0,1 50,130" fill="black" />
          </svg>
        </div>
      </div>
      <div>
        <div className="font-bold text-xl text-blue-700">Engineers Without Borders</div>
        <div className="text-sm text-blue-900">UCF Student Chapter</div>
      </div>
    </Link>
  );
} 