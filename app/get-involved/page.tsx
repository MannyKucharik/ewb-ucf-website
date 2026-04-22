import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function GetInvolved() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="get-involved" />

      {/* Hero Section */}
      <div className="relative h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-700 opacity-90"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="text-xl md:text-2xl">Join us in making a global impact</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-16">
        <div className="container mx-auto px-4">
          {/* Ways to Get Involved */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Ways to Get Involved</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Students */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                  <span className="text-6xl">👩‍🎓</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Students</h3>
                  <p className="text-gray-700 mb-4">
                    Join our team as a student member and apply your skills to real-world engineering challenges. 
                    Open to all majors and experience levels!
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 mb-5">
                    <li>Engineering design experience</li>
                    <li>Leadership opportunities</li>
                    <li>Global perspective</li>
                    <li>Make lifelong connections</li>
                  </ul>
                  <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition">
                    Apply to Join
                  </button>
                </div>
              </div>
              
              {/* Professionals */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                  <span className="text-6xl">👩‍💼</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Professionals</h3>
                  <p className="text-gray-700 mb-4">
                    Share your expertise as a professional mentor. Guide student teams and provide 
                    valuable industry insights and technical knowledge.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 mb-5">
                    <li>Mentorship opportunities</li>
                    <li>Professional development</li>
                    <li>Networking with academia</li>
                    <li>Community service hours</li>
                  </ul>
                  <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition">
                    Become a Mentor
                  </button>
                </div>
              </div>
              
              {/* Donors */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                  <span className="text-6xl">🤝</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Donors & Partners</h3>
                  <p className="text-gray-700 mb-4">
                    Support our mission through financial contributions, equipment donations, 
                    or organizational partnerships.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 mb-5">
                    <li>Tax-deductible donations</li>
                    <li>Corporate social responsibility</li>
                    <li>Brand visibility opportunities</li>
                    <li>Direct community impact</li>
                  </ul>
                  <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-600 transition">
                    Support Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Current Openings */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">Current Openings</h2>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Position</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Project</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Skills Needed</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Commitment</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-700">Apply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Water Systems Engineer</td>
                      <td className="py-3 px-4">Guatemala Water Filtration</td>
                      <td className="py-3 px-4">Civil Engineering, Water Treatment</td>
                      <td className="py-3 px-4">5-10 hrs/week</td>
                      <td className="py-3 px-4">
                        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
                          Apply
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Project Manager</td>
                      <td className="py-3 px-4">Honduras Solar Power</td>
                      <td className="py-3 px-4">Project Management, Leadership</td>
                      <td className="py-3 px-4">8-12 hrs/week</td>
                      <td className="py-3 px-4">
                        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
                          Apply
                        </button>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Medical Device Designer</td>
                      <td className="py-3 px-4">Dominican Republic Health</td>
                      <td className="py-3 px-4">Biomedical Engineering, Electronics</td>
                      <td className="py-3 px-4">5-8 hrs/week</td>
                      <td className="py-3 px-4">
                        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
                          Apply
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Fundraising Coordinator</td>
                      <td className="py-3 px-4">All Projects</td>
                      <td className="py-3 px-4">Communication, Event Planning</td>
                      <td className="py-3 px-4">3-6 hrs/week</td>
                      <td className="py-3 px-4">
                        <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded hover:bg-blue-200">
                          Apply
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 text-blue-700">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Information Session</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Open to All</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>April 15, 2023 at 5:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Engineering Building I, Room 234</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Learn about our ongoing projects, meet the team, and discover how you can get involved 
                    with Engineering Without Borders at UCF.
                  </p>
                  <button className="text-blue-700 font-medium hover:underline inline-flex items-center">
                    Add to Calendar
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Fundraising Gala</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Community Event</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>May 20, 2023 at 7:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-700 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>UCF Pegasus Ballroom</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Join us for an evening of celebration as we raise funds for our upcoming projects. 
                    Enjoy dinner, presentations from our team, and networking with industry professionals.
                  </p>
                  <button className="text-blue-700 font-medium hover:underline inline-flex items-center">
                    Purchase Tickets
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Join Form */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">Express Interest</h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <form>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="involvement" className="block text-gray-700 font-medium mb-2">How would you like to get involved?</label>
                  <select 
                    id="involvement" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="student">Join as a Student Member</option>
                    <option value="professional">Become a Professional Mentor</option>
                    <option value="donor">Support as a Donor</option>
                    <option value="partner">Establish a Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your background, interests, or any questions you have"
                  ></textarea>
                </div>
                
                <div className="mb-6">
                  <label className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-blue-700 mr-2" />
                    <span className="text-gray-700">I agree to receive emails about EWB-UCF events and opportunities</span>
                  </label>
                </div>
                
                <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition w-full md:w-auto">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 