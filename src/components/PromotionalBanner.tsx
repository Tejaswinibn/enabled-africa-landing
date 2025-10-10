export default function PromotionalBanner() {
  return (
    <>
      {/* Promotional Banner */}
      <section className="py-4 sm:py-6 lg:py-8">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8">
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            {/* Background Image - No dark overlay as per Figma */}
            <img 
              src="/images/banner-background.png" 
              alt="Background" 
              className="w-full h-[280px] sm:h-[320px] lg:h-[400px] object-cover"
            />
            
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 lg:px-6">
              <div className="text-center max-w-lg mx-auto">
                {/* Logo */}
                <div className="mb-4">
                  <img 
                    src="/images/Group 1171276407.png" 
                    alt="Logo" 
                    className="w-12 h-12 mx-auto"
                  />
                </div>
                
                {/* Main Text - Exact Figma layout and specifications */}
                <div className="mb-6" style={{ width: '593px', height: '96px' }}>
                  <h2 className="text-white text-center" style={{ 
                    fontFamily: 'Plus Jakarta Sans',
                    fontWeight: 500,
                    fontSize: '42.16px',
                    lineHeight: '48px',
                    letterSpacing: '0%',
                    color: '#FFFFFF'
                  }}>
                  Join as Talent or Employer<br />
                  and be part of Africa&apos;s future
                  </h2>
                </div>
                
                {/* CTA Button - Orange color as per design */}
                <button className="text-white font-semibold px-8 py-3 rounded-lg text-base transition-all duration-200 hover:scale-105" style={{ backgroundColor: '#F95206', boxShadow: '0 4px 14px rgba(249, 82, 6, 0.3)' }}>
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-4 sm:py-6 lg:py-8 bg-white">
        <div className="mx-auto max-w-7xl px-3 sm:px-4 lg:px-8 text-center">
          {/* Colorful Slogan - Exact design colors */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-5 leading-tight px-2" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            <span style={{ color: '#DC2626' }}>
              Your Skills.
            </span>
            {' '}
            <span style={{ color: '#EA580C' }}>
              Your Future.
            </span>
            {' '}
            <span style={{ color: '#059669' }}>
              Your Africa.
            </span>
          </h1>
          
          {/* Sub-text */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 px-4 font-normal" style={{ fontFamily: 'Plus Jakarta Sans' }}>
            Find opportunities that match your potential
          </p>
        </div>
      </section>
    </>
  )
}
