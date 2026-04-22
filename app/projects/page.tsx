"use client";

import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";

export default function Projects() {
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
              backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=80')"
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
            <p className="text-xl text-gray-200">Engineering sustainable solutions for communities worldwide</p>
          </div>
        </div>
      </section>

      {/* Current Projects Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            {/* Our Approach Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Our projects follow a comprehensive approach, ensuring that solutions are effective and sustainable:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">1</div>
                      <div>
                        <h3 className="font-semibold text-blue-800">Partnership</h3>
                        <p className="text-gray-700">We work with professional engineer chapters to try and find the best projects for our squad.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">2</div>
                      <div>
                        <h3 className="font-semibold text-blue-800">Analysis/Assessment</h3>
                        <p className="text-gray-700">We bring a project to our team and workshop potential solutions for the issue. Within six months, we make an assessment trip to the site of the issue.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">3</div>
                      <div>
                        <h3 className="font-semibold text-blue-800">Implementation</h3>
                        <p className="text-gray-700">12 months after our assessment trip, we work alongside community members to build the solution.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">4</div>
                      <div>
                        <h3 className="font-semibold text-blue-800">Monitoring/Evaluation</h3>
                        <p className="text-gray-700">12 months after everything's built, we make a trip to see how our work has affected the community.</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="relative h-100 rounded-xl overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: "url('https://borgenproject.org/wp-content/uploads/Engineers_without_Borders.jpg')"
                    }}
                  />
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Current Projects</h2>
            <p className="text-gray-700 leading-relaxed mb-10">
              Our chapter is currently working on several impactful engineering projects around the world. 
              Each project is designed to address specific community needs while providing sustainable solutions 
              that can be maintained by community members for years to come.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16">
              {/* Puerto Rico Project - Link to actual page */}
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
                <div className="relative h-60 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQtcuN8h1TrsDJ_yeX_CAc44yc_zPtDyf1td0uTFL1zguyXJ92hZpP9OaJRku9SgKcFkMdLQfEm4qxb-Ircx-pvEMA&s=19')"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
                  <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">Santa Rosa Water Project</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Implementing sustainable water systems for communities affected by Hurricane Maria, focusing on rainwater harvesting and filtration.
                  </p>
                  <Link href="/projects/guatemala" className="text-blue-700 font-medium inline-flex items-center hover:text-blue-800">
                    View Project Details
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Past Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Past Projects</h2>
            <p className="text-gray-700 leading-relaxed mb-10">
              Over the years, our chapter has successfully completed several projects that continue to benefit communities worldwide.
            </p>
            
            <div className="space-y-8">
              {/* Past Project 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-60 md:h-auto">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80')"
                      }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Dominican Republic Medical Clinic (2021)</h3>
                    <p className="text-gray-600 mb-4">
                      Installed solar panels and battery backup systems for a rural medical clinic, ensuring reliable power for critical medical equipment during outages.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Solar Energy</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Healthcare</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Electrical</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Past Project 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-60 md:h-auto">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1538300342682-cf57afb97285?auto=format&fit=crop&w=800&q=80')"
                      }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Honduras Water Distribution System (2019)</h3>
                    <p className="text-gray-600 mb-4">
                      Designed and implemented a gravity-fed water distribution system serving three villages with clean drinking water, benefiting over 2,000 residents.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Water</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Civil Engineering</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Community Development</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Past Project 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-60 md:h-auto">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1541807360746-039080941306?auto=format&fit=crop&w=800&q=80')"
                      }}
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-blue-800 mb-2">Nicaragua Sanitation Project (2017)</h3>
                    <p className="text-gray-600 mb-4">
                      Constructed eco-friendly sanitation facilities for a school serving 500 students, along with an educational program on hygiene practices.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Sanitation</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Education</span>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Public Health</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Get Involved Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved in Our Projects</h2>
            <p className="text-xl mb-10">
              Whether you're an engineering student or from another discipline, there are many ways to contribute to our mission. Join us in making a difference!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Join Our Team
              </Link>
              <Link href="/projects" className="bg-transparent hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all border-2 border-white hover:border-blue-600">
                Support Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 