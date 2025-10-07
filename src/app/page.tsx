import Header from '@/components/Header'
import ConnectionSection from '@/components/ConnectionSection'
import WhyEnabledAfrica from '@/components/WhyEnabledAfrica'
import PromotionalBanner from '@/components/PromotionalBanner'
import WhatYouGet from '@/components/WhatYouGet'
import AboutUs from '@/components/AboutUs'
import OurStory from '@/components/OurStory'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
                {/* Hero Section */}
                <section
                  className="bg-cover bg-center min-h-[70vh] sm:min-h-screen flex items-center"
                  style={{ backgroundImage: "url('/images/hero-image.png')" }}
                >
                  <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-10 w-full">
                    <div className="max-w-2xl mx-auto sm:mx-0 sm:ml-8 text-center sm:text-left">
                      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-6 leading-tight">
                        Africa&apos;s<br />
                        Largest Talent<br />
                        Bank
                      </h1>
                      <p className="text-base sm:text-lg lg:text-xl text-white mb-4 sm:mb-8 leading-relaxed">
                        Building accessible futures through<br />
                        jobs, skills, and innovation
                      </p>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg w-full sm:w-auto">
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
      <Footer />
    </>
  )
}