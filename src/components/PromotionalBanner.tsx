export default function PromotionalBanner() {
  return (
    <>
      {/* Promotional Banner */}
      <section className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <img 
              src="/images/banner-background.png" 
              alt="Background" 
              className="w-full h-[200px] sm:h-[230px] lg:h-[280px] object-cover"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 lg:px-6">
              <div className="text-center max-w-sm mx-auto">
                {/* Logo */}
                <div className="mb-2 sm:mb-3 lg:mb-4">
                  <img 
                    src="/images/Group 1171276407.png" 
                    alt="Logo" 
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 mx-auto"
                  />
                </div>
                
                {/* Main Text */}
                <h2 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 leading-tight px-2">
                Join as Talent or Employer<br />
                and be part of Africa&apos;s future
                </h2>
                
                {/* CTA Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg transition-colors shadow-lg text-xs sm:text-sm lg:text-base">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-6 sm:py-8 lg:py-10 bg-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 text-center">
          {/* Colorful Slogan */}
            <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight px-2">
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
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4">
            Find opportunities that match your potential
          </p>
        </div>
      </section>
    </>
  )
}
