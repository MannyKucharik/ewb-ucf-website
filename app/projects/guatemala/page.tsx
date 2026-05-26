"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function GuatemalaProject() {
  return (
    <main className="min-h-screen">
      <Navigation currentPage="projects" />
      
      {/* Hero Section */}
      <section className="relative h-80 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/70 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-blue-800 bg-opacity-70 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://cdn.kimkim.com/files/a/images/6358d841f4213ef4bce128e3dd7173b6c95ac985/original-0a8528042542a5fae77cec5a8076e638.jpg')"
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Santa Rosa Water Project</h1>
            <p className="text-xl text-gray-200">San Cristóbal Verapaz, Guatemala</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            
            {/* Overview Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Problem Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Left Column: Text Info */}
                <div>
                  <p className="text-gray-700 leading-relaxed mb-6 border-l-4 border-blue-500 pl-4 bg-blue-50 py-2">
                    <strong>Community:</strong> Santa Rosa is home to approximately 83 families (498 people). 8 years ago, a landslide destroyed their pipeline system.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Since the disaster, residents have relied on rainwater collection and exhausting daily walks to a natural spring 700 meters away. Currently, women and children must gather water from the spring tank overflow to meet basic needs.
                  </p>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Current Conditions</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-2">•</div>
                      <div>Electricity and elementary school available</div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-2">•</div>
                      <div>Access via private vehicle on dirt roads only</div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-2">•</div>
                      <div>Sanitation limited to pit latrines</div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-2">•</div>
                      <div>They have a spring catchment system, but no functional distribution system</div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-2">•</div>
                      <div>Two small springs exist but lack infrastructure</div>
                    </li>
                    <li className="flex items-start">
                      <div className="text-blue-600 mr-2">•</div>
                      <div>Managed by a five person water committee</div>
                    </li>
                  </ul>
                </div>
                
                {/* Right Column: Image and Proposed Solution */}
                <div className="space-y-8">
                  {/* Landscape Image */}
                  <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <Image 
                      src="/santa_rosa.png" 
                      alt="Landscape of Santa Rosa, Guatemala"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-xs font-medium">Santa Rosa Community Terrain</p>
                    </div>
                  </div>

                  {/* Proposed Solution Card */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
                    <h3 className="text-xl font-semibold text-blue-800 mb-4">Proposed Solution</h3>
                    <p className="text-sm text-gray-600 mb-4 italic">Conduction Line + Tap Stands</p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <div className="text-green-600 mr-2">✓</div>
                        <div>Gravity-fed pipeline from spring (~700m) to community</div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-600 mr-2">✓</div>
                        <div>2 km of piping and centralized washing stations</div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-600 mr-2">✓</div>
                        <div>New 20m³ storage tank & distribution system</div>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-600 mr-2">✓</div>
                        <div>Chlorination system for safe consumption</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Map & Location Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Location & Constraints</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Interactive Map & Site Details */}
                <div className="md:col-span-2 space-y-6">
                  {/* The Map Container */}
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 p-2 h-80">
                    <div className="w-full h-full rounded-lg overflow-hidden relative">
                      <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight={0}
                        marginWidth={0}
                        title="San Cristóbal Verapaz Project Location"
                        src="https://maps.google.com/maps?q=15.3789,-90.4811&z=12&output=embed"
                        className="filter contrast-125"
                      />
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-md border border-gray-100 flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-gray-800">Project Site</span>
                      </div>
                    </div>
                  </div>

                  {/* Site Information Data Card */}
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-inner">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-xl text-blue-900">San Cristóbal Verapaz</h3>
                        <p className="text-gray-600">Alta Verapaz Department, Guatemala</p>
                      </div>
                      
                      <div className="flex items-center gap-3 bg-blue-100 text-blue-800 px-5 py-3 rounded-2xl border border-blue-200 shadow-sm">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className="font-mono text-sm leading-tight">
                          <p>15.3789° N</p>
                          <p>90.4811° W</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-bold text-blue-900">Flow Rate</p>
                    <p className="text-sm text-gray-600">Testing required during assessment phase.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-bold text-blue-900">Elevation</p>
                    <p className="text-sm text-gray-600">Gravity-fed system feasible due to terrain.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-bold text-blue-900">Partnership</p>
                    <p className="text-sm text-gray-600">Municipality (30%), Community (10%), EWB (60%).</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="font-bold text-blue-900">Sustainability</p>
                    <p className="text-sm text-gray-600">Must be designed for long-term maintenance by local water committee.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Cost Breakdown Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Budget</h2>
              <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-blue-800 text-white">
                    <tr>
                      <th className="px-6 py-4">System Component</th>
                      <th className="px-6 py-4 text-right">Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 text-gray-700">
                    <tr><td className="px-6 py-3">Topographic Survey</td><td className="px-6 py-3 text-right">~$2,000</td></tr>
                    <tr><td className="px-6 py-3">Catchment Improvements</td><td className="px-6 py-3 text-right">~$1,000</td></tr>
                    <tr><td className="px-6 py-3">Storage Tank (20m³)</td><td className="px-6 py-3 text-right">~$11,000</td></tr>
                    <tr><td className="px-6 py-3">Chlorination System</td><td className="px-6 py-3 text-right">~$600</td></tr>
                    <tr><td className="px-6 py-3">Tap Stands</td><td className="px-6 py-3 text-right">~$3,000</td></tr>
                    <tr><td className="px-6 py-3">Pipeline (2 km)</td><td className="px-6 py-3 text-right">~$7,000</td></tr>
                    <tr className="bg-gray-50"><td className="px-6 py-3 font-semibold">Contingency (20%)</td><td className="px-6 py-3 text-right font-semibold">~$4,920</td></tr>
                    <tr className="bg-blue-50 text-blue-900"><td className="px-6 py-4 font-bold">Total Estimated Base Cost</td><td className="px-6 py-4 text-right font-bold text-lg">~$29,520</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="bg-blue-700 text-white rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Support Santa Rosa</h2>
                <p className="text-xl max-w-3xl mx-auto">
                  Help us raise the remaining 60% of the project funds to restore water access for 83 families in Guatemala.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <Link href="/get-involved" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center">
                  Join Our Team
                </Link>
                <Link href="/get-involved#donate" className="bg-transparent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all border-2 border-white hover:border-blue-600 text-center">
                  Donate to Guatemala
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">Field Assessment Gallery</h2>
            
            <div className="bg-white rounded-2xl border-2 border-dashed border-gray-200 py-20 px-8 shadow-sm">
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-400 tracking-tight uppercase">Coming Soon!!</h3>
                <p className="text-gray-500 mt-2 max-w-sm mx-auto">
                  Once we make our trip to the site, we will post photos and data here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}