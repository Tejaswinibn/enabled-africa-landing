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
      <main className="mt-0" style={{ margin: 0, padding: 0 }}>
                {/* Hero Section */}
                <section className="relative w-full overflow-hidden" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', marginTop: 0, marginBottom: 0, backgroundColor: '#FFF8E1' }}>
                  {/* Hero Image (fills entire section) */}
                  <img 
                    src="/images/hero-image.png"
                    alt="Background"
                    className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
                    style={{ display: 'block', width: '100vw', height: '100%', objectFit: 'cover', objectPosition: 'center', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
                  />
                  
                  {/* Text and Button Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-8 md:px-16 z-20">
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 drop-shadow-sm" style={{ fontFamily: "Plus Jakarta Sans" }}>
                      Africa&apos;s<br />
                      Largest Talent<br />
                      Bank
                    </h1>
                    <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 lg:mb-7 max-w-xl" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.16)" }}>
                      Building accessible futures<br />
                      through jobs, skills, and innovation
                    </p>
                    <button className="text-white font-semibold px-8 py-3 rounded-lg text-lg shadow-lg w-fit hover:opacity-90 transition-opacity" style={{ backgroundColor: '#F95206' }}>
                      Get Started Now
                    </button>
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