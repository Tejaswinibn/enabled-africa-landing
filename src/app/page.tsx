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
                  className="bg-cover bg-center h-screen flex items-center"
                  style={{ backgroundImage: "url('/images/hero-image.png')" }}
                >
                  <div className="mx-auto max-w-7xl px-6 md:px-10 w-full">
                    <div className="max-w-2xl ml-8">
                      <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                        Africa's<br />
                        Largest Talent<br />
                        Bank
                      </h1>
                      <p className="text-xl text-white mb-8 leading-relaxed">
                        Building accessible futures through<br />
                        jobs, skills, and innovation
                      </p>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3 rounded-lg">
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