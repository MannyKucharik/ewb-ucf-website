import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation currentPage="about" />
      
      {/* Hero Section */}
      <section className="relative h-80 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/70 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-blue-800 bg-opacity-70 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80')"
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl text-gray-200">Making a Knight Difference in Communities Worldwide.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">

            {/* Our Mission Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Engineers Without Borders UCF builds a better world through engineering projects that empower communities to meet their basic human needs and equip leaders to solve the world's most pressing challenges. We work closely with communities to identify their specific needs and develop sustainable, culturally appropriate solutions that can be maintained long after our involvement.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-700 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.168 1.168a4 4 0 01-8.092.09l1.166-1.167a3 3 0 00.879-2.121z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 text-center">Sustainability</h3>
                  <p className="text-gray-600 text-center">
                    We design solutions that communities can sustain independently.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-700 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 text-center">Collaboration</h3>
                  <p className="text-gray-600 text-center">
                    We work directly with communities to develop culturally appropriate solutions.
                  </p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-blue-700 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800 text-center">Education</h3>
                  <p className="text-gray-600 text-center">
                    We train future engineers while supporting communities in need.
                  </p>
                </div>
              </div>
            </div>
          
            

            {/* Our Team Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Team</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our chapter consists of passionate students from various engineering disciplines and other fields, all united by the goal of using our skills to make a positive impact.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Team Member 1 */}
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                      src="/ella.jpg" 
                      alt="Ella"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">Ella Pimentel</h3>
                  <p className="text-blue-600">President</p>
                  <p className="text-gray-600 mt-2">Industrial Engineering</p>
                </div>
                {/* Team Member 2 */}
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                      src="/sean.jpg" 
                      alt="Sean"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">Sean Lee</h3>
                  <p className="text-blue-600">Vice President</p>
                  <p className="text-gray-600 mt-2">Mechanical Engineering</p>
                </div>
                {/* Team Member 3 */}
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image 
                      src="/bella.jpg" 
                      alt="bella"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-800">Isabella Merhi</h3>
                  <p className="text-blue-600">Secretary</p>
                  <p className="text-gray-600 mt-2">Mechanical Engineering</p>
                </div>
                {/* Team Member 4 */}
                <div className="text-center">
                  <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden shadow-inner bg-gray-100">
                    <Image 
                      src="/adi.jpg" 
                      alt="Adi"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-blue-800">Adithya Dasarathi</h3>
                  <p className="text-blue-600">Treasurer</p>
                  <p className="text-gray-600 mt-2">Computer Science</p>
                </div>
              </div>
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Officers</h3>
                <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/jorge.jpg" 
                      alt="Jorge"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Jorge Castellanos</h4>
                      <p className="text-blue-600">Project Manager</p>
                      <p className="text-gray-600">Industrial Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/princess.jpg" 
                      alt="Princess"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Princess Arrozal</h4>
                      <p className="text-blue-600">Fundraising Chair</p>
                      <p className="text-gray-600">Computer Science</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/kei.jpg" 
                      alt="Kei"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Keira Fukuda</h4>
                      <p className="text-blue-600">Marketing Co-Chair</p>
                      <p className="text-gray-600">Industrial Engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/luis.jpg" 
                      alt="Luis"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Luis Nocera</h4>
                      <p className="text-blue-600">Marketing Co-Chair</p>
                      <p className="text-gray-600">Marketing</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image 
                      src="/manny.jpg" 
                      alt="Manny"
                      fill // This makes it fill the circular div
                      className="object-cover" // This crops the photo to a perfect circle
                    />
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-800">Manuel Kucharik</h4>
                      <p className="text-blue-600">Tech Chair</p>
                      <p className="text-gray-600">Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Involved Section */}
            <div className="bg-blue-50 rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-blue-800 mb-4">Get Involved</h2>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  Whether you're an engineering student or from another discipline, there are many ways to contribute to our mission. Join us in making a difference!
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center">
                <Link href="/get-involved" className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 md:mr-4 mb-4 md:mb-0 text-center">
                  Join Our Team
                </Link>
                <Link href="/projects" className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-blue-700 text-center">
                  See Our Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 