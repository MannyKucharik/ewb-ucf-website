import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation currentPage="home" />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/70 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-opacity-70 bg-[url('https://www.ucf.edu/wp-content/blogs.dir/16/files/2023/06/Yoast-Image-60th-1200x800-1.jpg')] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://www.ucf.edu/wp-content/blogs.dir/16/files/2023/06/Yoast-Image-60th-1200x800-1.jpg')"
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-20 pt-20">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Engineers Without Borders</span>
              <span className="text-yellow-300">UCF Student Chapter</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100">
              Making a Knight Difference in Communities Worldwide!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get Involved
              </Link>
              <Link href="/projects" className="bg-white hover:bg-gray-100 text-blue-700 px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Our Projects
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      </section>

      {/* Mission Statement with Card Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform -translate-y-16">
              <div className="p-8 md:p-12">
                <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">WELCOME!</h1>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  This is the official website for the UCF Student Chapter of Engineers Without Borders. Join our passionate team of engineers today to start helping people across the world!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects with Modern Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-3 text-center">Featured Projects</h2>
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We hope to work on many impactful projects around the world!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-60 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQtcuN8h1TrsDJ_yeX_CAc44yc_zPtDyf1td0uTFL1zguyXJ92hZpP9OaJRku9SgKcFkMdLQfEm4qxb-Ircx-pvEMA&s=19')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">Santa Rosa Water Project</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Implementing sustainable water systems for rural communities facing clean water shortages.
                </p>
                <Link href="/projects/guatemala" className="text-blue-700 font-medium inline-flex items-center hover:text-blue-800">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Project Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group">
              <div className="relative h-60 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: "url('https://img.freepik.com/free-vector/question-marks-background_78370-2896.jpg?semt=ais_incoming&w=740&q=80')"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
                <h3 className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">More Coming Soon!!</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  With your help, we can bring solutions to more people in need around the world!
                </p>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>


      {/* Get Involved Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Get Involved</h2>
            <p className="text-lg text-gray-700 mb-10">
              Whether you're an engineering student, faculty member, or community supporter, there are many ways to contribute to our mission.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-blue-700 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Join Our Team</h3>
                <p className="text-gray-600">
                  Apply your skills to real-world engineering challenges and gain valuable experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-blue-700 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Donate</h3>
                <p className="text-gray-600">
                  Support our projects financially to help us create lasting impact in communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="text-blue-700 mb-4">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Partner With Us</h3>
                <p className="text-gray-600">
                  Collaborate with us as a community organization, sponsor, or technical advisor.
                </p>
              </div>
            </div>
            
            <Link href="/get-involved" className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Learn How to Help
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-10">
              Join our next general body meeting to find out how you can get involved with Engineers Without Borders UCF.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-involved" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
