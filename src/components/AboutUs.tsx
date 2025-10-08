import Image from "next/image";
import { OurValues } from "./ValueBadge";

export default function AboutUs() {
  return (
    <>
      <section id="about-us" className="bg-[#FFE8B9] py-10 sm:py-14 lg:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">

          {/* About Enabled Africa Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-14 lg:mb-18 items-center">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] lg:order-1">
              <Image
                src="/images/Group 1171276405.png"
                alt="Portrait"
                width={400}
                height={500}
                className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-contain p-8"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
              />
            </div>

            {/* Text Content */}
            <div className="lg:order-2 text-center lg:text-left">
              <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-gray-800 mb-4 sm:mb-6" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, lineHeight: '1.2', letterSpacing: '0%' }}>
                About<br />Enabled Africa
              </h2>
              <p className="text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-gray-600 mb-4" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                Ability is everywhere. Opportunity should be too
              </p>
              <p className="text-[14px] sm:text-[15px] leading-6 sm:leading-7 text-gray-700 max-w-[48ch] sm:max-w-[52ch] mx-auto lg:mx-0" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                EnabledAfrica is building a continent-wide platform that connects
                people with opportunities and helps organizations grow stronger
                through talent.
              </p>
            </div>
          </div>

          {/* Vision and Mission Section */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">

            {/* Vision Section - Image Right, Text Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Vision Text - Left */}
              <div className="lg:order-1 text-center lg:text-left max-w-md mx-auto lg:mx-0">
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, lineHeight: '1.3', letterSpacing: '0%' }}>Our Vision</h3>
                <p className="text-[13px] sm:text-[14px] leading-6 text-gray-700" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  An Africa where everyone - regardless of background, gender, age, or
                  ability - has the chance to build a meaningful career and contribute
                  to their community. We envision a future where talent knows no boundaries
                  and opportunities are accessible to all who seek them.
                </p>
              </div>
              {/* Vision Image - Right */}
              <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] lg:order-2">
                <Image
                  src="/images/Subtract.png"
                  alt="Vision image"
                  width={400}
                  height={300}
                  className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-contain p-8"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
                />
              </div>
            </div>

            {/* Mission Section - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Mission Image - Left */}
              <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] lg:order-1">
                <Image
                  src="/images/Group 1171276409.png"
                  alt="Mission image"
                  width={400}
                  height={300}
                  className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] object-contain p-8"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
                />
              </div>
              {/* Mission Text - Right */}
              <div className="lg:order-2 text-center lg:text-left max-w-md mx-auto lg:mx-0">
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-gray-800 mb-3 sm:mb-4" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, lineHeight: '1.3', letterSpacing: '0%' }}>Our Mission</h3>
                <p className="text-[13px] sm:text-[14px] leading-6 text-gray-700 mb-6" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  To unlock Africa&apos;s full potential by making access to work, skills,
                  and growth opportunities simple, fair, and inclusive for all. We believe
                  in creating pathways that connect talent with opportunity, fostering
                  innovation and driving sustainable economic growth across the continent.
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition text-[13px] sm:text-[14px] w-full sm:w-auto" style={{ fontFamily: 'Plus Jakarta Sans' }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>


        </div>
      </section>
      
      {/* Our Values Section - Outside the beige section */}
      <OurValues />
    </>
  );
}