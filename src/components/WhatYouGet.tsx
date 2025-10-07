export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Section - What You Get with Images */}
          <div className="lg:w-1/3">
            {/* Two Images Side by Side with Bottom Alignment */}
            <div className="flex gap-4 items-end">
              {/* Small Document Image with Text Above */}
              <div className="w-42 flex-shrink-0 flex flex-col">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
                  What<br />You Get
                </h2>
                <div className="flex-1 flex items-end">
                  <img 
                    src="/images/Group 1171276410.png" 
                    alt="Document illustration" 
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
              
              {/* Large Person Image */}
              <div className="flex-1">
                <img 
                  src="/images/young-businessman-explaining-his-colleague-wheelchair-online-information.png" 
                  alt="Professional person" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Benefits List */}
          <div className="lg:w-2/3 space-y-8">
            {/* Benefit 1 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(4,95,51,0.22)' }}
                >
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Jobs That Matter</h3>
                <p className="text-gray-600">Discover opportunities across industries, from startups to multinationals</p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(4,95,51,0.22)' }}
                >
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">One Profile, Many Matches</h3>
                <p className="text-gray-600">Build your profile once, and let employers find you</p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(4,95,51,0.22)' }}
                >
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Growth Beyond Work</h3>
                <p className="text-gray-600">Access training and learning programs to upgrade your skills</p>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(4,95,51,0.22)' }}
                >
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Support Along the Way</h3>
                <p className="text-gray-600">Career advice, mentorship, and resources to help you succeed</p>
              </div>
            </div>

            {/* Create Profile Button */}
            <div className="pt-4">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition font-semibold">
                Create Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Employers Choose Us Section */}
      <div className="mt-20 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Why Employers Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Hire Africa's Best Talent. Build Stronger Teams.<br />
            A trusted way to connect with skilled and motivated candidates.
          </p>
        </div>
        
        <div className="mx-auto max-w-7xl px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 - Wide Access */}
            <div 
              className="p-6 rounded-xl text-white relative min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#045F33' }}
            >
              <div className="absolute top-4 right-4">
                <img 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Wide Access</h3>
              <p className="text-base">Connect with diverse professionals across Africa</p>
            </div>

            {/* Card 2 - Image - diverse-multiracial-group */}
            <div className="min-h-[280px] p-4">
              <img 
                src="/images/diverse-multiracial-group-people-giving-high-five-modern-office-teamwork-concept.png" 
                alt="Team in office" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 3 - Faster Hiring */}
            <div 
              className="p-6 rounded-xl text-gray-800 relative min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#EFC36B' }}
            >
              <div className="absolute top-4 right-4">
                <img 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Faster Hiring</h3>
              <p className="text-base">Get pre-matched with the right candidates, ready to contribute</p>
            </div>

            {/* Card 4 - Image - MicrosoftTeams */}
            <div className="min-h-[280px] p-4">
              <img 
                src="/images/645bd6210b74564994a286d7_MicrosoftTeams-image (1).png" 
                alt="Man in striped shirt" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 5 - Image - istock-2160995080 */}
            <div className="min-h-[280px] p-4">
              <img 
                src="/images/istock-2160995080.png" 
                alt="Team collaboration" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 6 - Inclusive Made Simple */}
            <div 
              className="p-6 rounded-xl text-gray-800 relative min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#EFC36B' }}
            >
              <div className="absolute top-4 right-4">
                <img 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusive Made Simple</h3>
              <p className="text-base">Resources and support for building workplaces where everyone can thrive</p>
            </div>

            {/* Card 7 - Image - Placeholder for another image */}
            <div className="min-h-[280px] p-4">
              <img 
                src="/images/financial-businesswomen-analyze-the-graph-of-the-c-2025-02-22-17-12-16-utc.png" 
                alt="Woman with laptop" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 8 - Long-Term Value */}
            <div 
              className="p-6 rounded-xl text-white relative min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#045F33' }}
            >
              <div className="absolute top-4 right-4">
                <img 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl font-bold mb-3">Long-Term Value</h3>
              <p className="text-base">Hiring through EnabledAfrica helps you build engaged, innovative teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}