"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function News() {
  return (
    <main className="min-h-screen">
      <Navigation currentPage="news" />
      
      {/* Hero Section */}
      <section className="relative h-80 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/70 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-blue-800 bg-opacity-70 bg-cover bg-center"
            style={{
              backgroundImage: "url(IMG_8158.jpg)"
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Events</h1>
            <p className="text-xl text-gray-200">Stay updated with our latest activities and upcoming opportunities</p>
          </div>
        </div>
      </section>


    
      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Events and Meeting Schedule</h2>
            {/* The Wrapper Div centers the calendar and adds a nice shadow/border */}
          <div className="w-full overflow-hidden rounded-xl shadow-lg border border-gray-200 max-w-4xl">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=8c74b060b6addffb3beec0cad4aed5f55ff96d78377236e6e75b60dd0648273b%40group.calendar.google.com&ctz=America%2FNew_York" 
            style={{ border: 0 }} // FIXED: React uses double curly braces for style
            width="100%"          // CHANGED: Use 100% so it fits the container
            height="600" 
            frameBorder="0"       // FIXED: React uses camelCase (frameBorder)
            scrolling="no"
          ></iframe>
          </div>
        </div>
      </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Event 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=800&q=80')"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-white text-sm font-medium mb-1">November 10, 2023 • 7:00 PM</div>
                    <h3 className="text-white text-xl font-bold">General Body Meeting</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Join us for our monthly general body meeting where we'll discuss project updates, upcoming events, and opportunities to get involved. All students are welcome!
                  </p>
                  <div className="flex items-start space-x-2 text-gray-600 mb-4">
                    <svg className="w-5 h-5 text-blue-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Engineering Building I, Room 234</span>
                  </div>
                </div>
              </div>
              
              {/* Event 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=800&q=80')"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="text-white text-sm font-medium mb-1">November 18, 2023 • 10:00 AM</div>
                    <h3 className="text-white text-xl font-bold">Design Workshop: Puerto Rico</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    A hands-on workshop for the Puerto Rico water project team focused on rainwater harvesting system design. Learn practical design skills while contributing to our ongoing project.
                  </p>
                  <div className="flex items-start space-x-2 text-gray-600 mb-4">
                    <svg className="w-5 h-5 text-blue-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span>Engineering Building II, Design Lab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 