import Header from '@/components/Header'
import ConnectionSection from '@/components/ConnectionSection'
import WhyEnabledAfrica from '@/components/WhyEnabledAfrica'
import PromotionalBanner from '@/components/PromotionalBanner'
import WhatYouGet from '@/components/WhatYouGet'
import AboutUs from '@/components/AboutUs'
import OurStory from '@/components/OurStory'

export default function Home() {
  return (
    <>
      <Header />
      <main>
                {/* Hero Section */}
                <section
                  className="bg-cover bg-center min-h-[85vh] sm:min-h-screen flex items-center relative overflow-hidden"
                  style={{ backgroundImage: "url('/images/hero-image.png')" }}
                >
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 w-full relative z-10">
                    <div className="max-w-[24ch] sm:max-w-[26ch] lg:max-w-[28ch] mx-auto sm:mx-0 sm:ml-8 lg:ml-12 text-center sm:text-left">
                      <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-4 sm:mb-6 md:mb-8 leading-tight" style={{ color: 'white' }}>
                        Africa&apos;s<br />
                        Largest Talent<br />
                        Bank
                      </h1>
                      <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-7 sm:leading-8 mb-6 sm:mb-8 md:mb-10 max-w-[60ch]" style={{ color: 'white' }}>
                        Building accessible futures through<br />
                        jobs, skills, and innovation
                      </p>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white text-[14px] sm:text-[15px] md:text-[16px] px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-lg w-full sm:w-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                        Get Started Now
                      </button>
                    </div>
                  </div>
                </section>

        {/* Connection Section */}
        <ConnectionSection />
        
        {/* Why EnabledAfrica Section */}
        <WhyEnabledAfrica />
        
        {/* Promotional Banner Section */}
        <PromotionalBanner />
        
        {/* What You Get Section */}
        <WhatYouGet />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Our Story Section */}
        <OurStory />
      </main>
    </>
  )
}