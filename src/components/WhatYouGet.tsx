import Image from "next/image";

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column - Single Image */}
          <div className="w-full lg:w-1/2 lg:max-w-lg">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0">
              <Image
                src="/images/39e84348-3948-497e-8d1d-19fce98b26d3.jpeg"
                alt="What You Get images"
                width={400}
                height={500}
                className="w-full h-auto rounded-lg brightness-100 contrast-100"
                priority
                style={{ filter: 'none' }}
              />
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="w-full lg:w-1/2 lg:max-w-2xl">
            <div className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0">
              <ul className="space-y-4 sm:space-y-6">
              {/* Feature 1 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="7" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Jobs That Matter</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Discover opportunities across industries, from startups to multinationals</p>
                </div>
              </li>
              
              {/* Feature 2 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">One Profile, Many Matches</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Build your profile once, and let employers find you</p>
                </div>
              </li>
              
              {/* Feature 3 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 18V4m6 14V10m6 8v-4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Growth Beyond Work</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Access training and learning programs to upgrade your skills</p>
                </div>
              </li>
              
              {/* Feature 4 */}
              <li className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 21c-4.5-4.5-9-7.5-9-11.25C3 6.04 5 4 7.5 4c1.84 0 3.34 1.13 4.5 2.8C13.16 5.13 14.66 4 16.5 4 19 4 21 6.04 21 9.75c0 3.75-4.5 6.75-9 11.25z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base font-bold text-black mb-1 sm:mb-2">Support Along the Way</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Career advice, mentorship, and resources to help you succeed</p>
                </div>
              </li>
              </ul>
              
              {/* Call to Action Button */}
              <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-orange-500 text-white font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors w-full sm:w-auto">
                Create Profile
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Employers Choose Us Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 px-4">
            Why Employers Choose Us
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-4 leading-relaxed">
            Hire Africa&apos;s Best Talent. Build Stronger Teams.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>A trusted way to connect with skilled and motivated candidates.
          </p>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {/* Card 1 - Wide Access */}
            <div 
              className="p-3 sm:p-4 lg:p-6 rounded-xl text-white relative min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#045F33' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-white">Wide Access</h3>
              <p className="text-xs sm:text-sm lg:text-base text-white leading-relaxed">Connect with diverse professionals across Africa</p>
            </div>

            {/* Card 2 - Image - diverse-multiracial-group */}
            <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] p-1 sm:p-2 lg:p-4">
              <Image 
                src="/images/diverse-multiracial-group-people-giving-high-five-modern-office-teamwork-concept.png" 
                alt="Team in office" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 3 - Faster Hiring */}
            <div 
              className="p-3 sm:p-4 lg:p-6 rounded-xl text-gray-800 relative min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#EFC36B' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-black">Faster Hiring</h3>
              <p className="text-xs sm:text-sm lg:text-base text-black leading-relaxed">Get pre-matched with the right candidates, ready to contribute</p>
            </div>

            {/* Card 4 - Image - MicrosoftTeams */}
            <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] p-1 sm:p-2 lg:p-4">
              <Image 
                src="/images/645bd6210b74564994a286d7_MicrosoftTeams-image (1).png" 
                alt="Man in striped shirt" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 5 - Image - istock-2160995080 */}
            <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] p-1 sm:p-2 lg:p-4">
              <Image 
                src="/images/istock-2160995080.png" 
                alt="Team collaboration" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 6 - Inclusive Made Simple */}
            <div 
              className="p-3 sm:p-4 lg:p-6 rounded-xl text-gray-800 relative min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#EFC36B' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-black">Inclusive Made Simple</h3>
              <p className="text-xs sm:text-sm lg:text-base text-black leading-relaxed">Resources and support for building workplaces where everyone can thrive</p>
            </div>

            {/* Card 7 - Image - financial-businesswomen */}
            <div className="min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] p-1 sm:p-2 lg:p-4">
              <Image 
                src="/images/financial-businesswomen-analyze-the-graph-of-the-c-2025-02-22-17-12-16-utc.png" 
                alt="Woman with laptop" 
                width={300}
                height={280}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Card 8 - Long-Term Value */}
            <div 
              className="p-3 sm:p-4 lg:p-6 rounded-xl text-white relative min-h-[180px] sm:min-h-[200px] lg:min-h-[240px] xl:min-h-[280px] flex flex-col justify-end"
              style={{ backgroundColor: '#045F33' }}
            >
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4">
                <Image 
                  src="/images/Objects.png" 
                  alt="Check button" 
                  width={32}
                  height={32}
                  className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                />
              </div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-white">Long-Term Value</h3>
              <p className="text-xs sm:text-sm lg:text-base text-white leading-relaxed">Hiring through EnabledAfrica helps you build engaged, innovative teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}