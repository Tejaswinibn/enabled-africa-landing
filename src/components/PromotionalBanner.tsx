export default function PromotionalBanner() {
  return (
    <>
      {/* Promotional Banner */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="relative rounded-xl overflow-hidden">
            {/* Background Image */}
            <img 
              src="/images/banner-background.png" 
              alt="Background" 
              className="w-full h-[300px] object-cover"
            />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                {/* Logo */}
                <div className="mb-6">
                  <img 
                    src="/images/Group 1171276407.png" 
                    alt="Logo" 
                    className="w-16 h-16 mx-auto"
                  />
                </div>
                
                {/* Main Text */}
                <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                  Join as Talent or Employer<br />
                  and be part of Africa's future
                </h2>
                
                {/* CTA Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Section */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-5xl px-6 md:px-10 text-center">
          {/* Colorful Slogan */}
          <h1 className="text-3xl font-bold mb-4 leading-tight">
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
          <p className="text-lg text-gray-700">
            Find opportunities that match your potential
          </p>
        </div>
      </section>
    </>
  )
}
