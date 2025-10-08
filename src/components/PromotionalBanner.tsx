export default function PromotionalBanner() {
  return (
    <>
      {/* Promotional Banner */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden">
            {/* Background Image */}
            <img 
              src="/images/banner-background.png" 
              alt="Background" 
              className="w-full h-[220px] sm:h-[250px] lg:h-[300px] object-cover"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6">
              <div className="text-center">
                {/* Logo */}
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <img 
                    src="/images/Group 1171276407.png" 
                    alt="Logo" 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto"
                  />
                </div>
                
                {/* Main Text */}
                <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight" style={{ color: 'white' }}>
                Join as Talent or Employer<br />
                and be part of Africa&apos;s future
                </h2>
                
                {/* CTA Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg transition-colors shadow-lg text-xs sm:text-sm lg:text-base">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Colorful Slogan */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight whitespace-nowrap">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Your Skills.
            </span>
            {' '}
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
              Your Future.
            </span>
            {' '}
            <span className="bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent">
              Your Africa.
            </span>
          </h1>
          
          {/* Sub-text */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700">
            Find opportunities that match your potential
          </p>
        </div>
      </section>
    </>
  )
}
