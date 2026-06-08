import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function GetInvolved() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentPage="get-involved" />

      {/* Hero Section */}
      <section className="relative h-80 flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/70 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-blue-800 bg-opacity-70 bg-cover bg-center"
            style={{
              backgroundImage: "url(/team.jpg)"
            }}
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get Involved</h1>
            <p className="text-xl text-gray-200">Join the cause and become an architect of change.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-white">
        <div>
          <div className="container mx-auto px-4">
            {/* Audience Selector */}
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-blue-800 mb-4">
                   Ready to start your journey with us?
                </h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    Choose your path to join our community of student engineers.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* New Member */}
    <a
      href="#new-member"
      className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center group"
    >
      <div className="text-blue-700 mb-4">
        <svg
          className="w-12 h-12 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 2a4 4 0 100 8 4 4 0 000-8zm0 10c-3.314 0-6 2.239-6 5v1h12v-1c0-2.761-2.686-5-6-5z" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-blue-700">
        New Member
      </h3>

      <p className="text-gray-600">
        Learn about EWB-UCF, upcoming meetings, and how to join.
      </p>
    </a>

    {/* Returning Member */}
    <a
      href="#returning-member"
      className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center group"
    >
      <div className="text-blue-700 mb-4">
        <svg
          className="w-12 h-12 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M4 4h12v2H4V4zm0 5h12v2H4V9zm0 5h8v2H4v-2z" />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-blue-700">
        Returning Member
      </h3>

      <p className="text-gray-600">
        Access project teams, travel information, and chapter resources.
      </p>
    </a>

    {/* Donor */}
    <a
      href="#donor"
      className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center group"
    >
      <div className="text-blue-700 mb-4">
        <svg
          className="w-12 h-12 mx-auto"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <h3 className="text-xl font-semibold mb-2 text-blue-700">
        Donor
      </h3>

      <p className="text-gray-600">
        Support sustainable engineering projects and community impact.
      </p>
    </a>
  </div>
</div>
{/* ==========================================
NEW MEMBERS
========================================== */}

<section id="new-member" className="py-20 bg-white scroll-mt-24">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">

```
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Content */}
    <div>
      <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
        New Members
      </div>

      <h2 className="text-4xl font-bold text-blue-800 mb-6">
        Want to Become a Member?
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Engineers Without Borders UCF gives students the opportunity to
        work on meaningful engineering projects while developing technical,
        professional, and leadership skills that extend beyond the classroom.
      </p>

      <div className="space-y-2 mb-8">
        <div className="flex items-start">
          <div className="text-blue-700 mr-3">✓</div>
          <p className="text-gray-700">
            Work on and design meaningful global and local projects
          </p>
        </div>

        <div className="flex items-start">
          <div className="text-blue-700 mr-3">✓</div>
          <p className="text-gray-700">
            Gain hands-on, real-world engineering experience
          </p>
        </div>

        <div className="flex items-start">
          <div className="text-blue-700 mr-3">✓</div>
          <p className="text-gray-700">
            Build leadership, project management, and cross-cultural skills
          </p>
        </div>

        <div className="flex items-start">
          <div className="text-blue-700 mr-3">✓</div>
          <p className="text-gray-700">
            Network with engineers and professionals across industries
          </p>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-blue-800 mb-3">
          How to Get Involved
        </h3>

        <ul className="space-y-2 text-gray-700">
          <li>• Bi-weekly meetings (Stay tuned for fall schedule)</li>
          <li>• Join our Discord to receive announcements and connect with members</li>
          <li>• Project team members will pay semester dues of $20 beginning Fall 2026</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
  <a
    href="https://discord.com/invite/8UpGZbY4Ck"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
  >
    Join our Discord!
  </a>

  <a
    href="/events"
    className="bg-white border border-blue-700 text-blue-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
  >
    Event Schedule
  </a>
</div>
    </div>

    {/* Image */}
    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/new_member.jpg')"
        }}
      />
    </div>

  </div>

</div>
```

  </div>
</section>

{/* ==========================================
RETURNING MEMBERS
========================================== */}

<section id="returning-member" className="py-20 bg-gray-50 scroll-mt-24">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">

```
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Image */}
    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl order-2 md:order-1">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/returning.jpg')"
        }}
      />
    </div>

    {/* Content */}
    <div className="order-1 md:order-2">

      <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
        Returning Members
      </div>

      <h2 className="text-4xl font-bold text-blue-800 mb-6">
        Welcome Back!
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Continue your involvement with EWB-UCF by staying active with your
        project teams, attending meetings, and helping us create sustainable
        engineering solutions for communities in need.
      </p>

      <div className="bg-white rounded-xl p-6 shadow-md mb-8">
        <h3 className="font-semibold text-blue-800 mb-3">
          Quick Resources
        </h3>

        <ul className="space-y-3 text-gray-700">
          <li>• View upcoming meetings and chapter events</li>
          <li>• Stay connected through Discord</li>
          <li>• Keep up with project deadlines and activities</li>
          <li>• Participate in travel and assessment opportunities</li>
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
  <a
    href="https://discord.com/invite/8UpGZbY4Ck"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
  >
    Join our Discord!
  </a>

  <a
    href="/events"
    className="bg-white border border-blue-700 text-blue-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
  >
    Event Schedule
  </a>
</div>

    </div>

  </div>

</div>
```

  </div>
</section>

{/* ==========================================
DONORS
========================================== */}

<section id="donor" className="py-20 bg-white scroll-mt-24">
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto">

```
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

    {/* Content */}
    <div>

      <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
        Donors & Supporters
      </div>

      <h2 className="text-4xl font-bold text-blue-800 mb-6">
        Support Our Mission!
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        Your support helps Engineers Without Borders UCF plan, design,
        implement, and sustain engineering projects that improve quality of
        life for communities around the world.
      </p>

      <div className="bg-blue-50 rounded-xl p-6 mb-8">
        <h3 className="font-semibold text-blue-800 mb-3">
          Your Contribution Helps Fund
        </h3>

        <ul className="space-y-2 text-gray-700">
          <li>• Project planning and implementation</li>
          <li>• Community assessments and travel</li>
          <li>• Engineering design and construction activities</li>
          <li>• Student professional development</li>
          <li>• Day-to-day chapter operations</li>
        </ul>
        <br/>
        <div className="text-center text-gray-700">
        <span className="font-semibold text-blue-800"> Financial Questions? </span> 
        <a href="mailto:ewbucftreasurer@gmail.com" className="text-blue-600 underline hover:text-blue-800">
          ewbucftreasurer@gmail.com
        </a> 
    </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
  <a
    href="https://support.ewb-usa.org/campaign/university-of-central-florida-chapter/c83961"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
  >
    Donate Now!
  </a>
  <a
    href="/projects/guatemala"
    className="bg-white border border-blue-700 text-blue-700 hover:bg-gray-50 px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
  >
    Current Project
  </a>
</div>


</div>

    {/* Image */}
    <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/donor.jpg')"
        }}
      />
    </div>

  </div>

</div>
```

  </div>
</section>

          </div>
        </div>
      </section>
      {/* ==========================================
      SOCIAL MEDIA / STAY CONNECTED SECTION
      ========================================== */}
      <section className="pb-20 pt-4 bg-white">
        <div className="container mx-auto px-6">
          
          {/* The Blue Box Wrapper */}
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-3xl p-10 md:p-14 text-center shadow-xl">
            
            <h2 className="text-4xl font-bold text-blue-800 mb-4">
              Follow Our Journey!
            </h2>
            
            <p className="text-l text-gray-700 mb-10 max-w-2xl mx-auto">
              Stay up to date with our latest project builds, meeting recaps, and community events.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* Instagram Link */}
              <a 
                href="https://www.instagram.com/ucf_ewb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-700 hover:text-pink-600 px-8 py-4 rounded-2xl shadow-md hover:shadow-2xl text-xl font-bold transition-all transform hover:-translate-y-1"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span>Instagram</span>
              </a>

              {/* Discord Link */}
              <a 
                href="https://discord.com/invite/8UpGZbY4Ck"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-700 hover:text-blue-600 px-8 py-4 rounded-2xl shadow-md hover:shadow-2xl text-xl font-bold transition-all transform hover:-translate-y-1"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 01-1.873-.894.077.077 0 01-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 01.077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 01.078.009c.12.099.246.195.373.289a.077.077 0 01-.006.127 12.298 12.298 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
                <span>Discord</span>
              </a>
            </div>

          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}