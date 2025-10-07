import Image from "next/image";
import { OurValues } from "./ValueBadge";

export default function AboutUs() {
  return (
    <>
      <section id="about-us" className="bg-[#FFE8B9] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">

          {/* About Enabled Africa Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] lg:order-1">
              <Image
                src="/images/Group 1171276405.png"
                alt="Portrait"
                width={400}
                height={500}
                className="w-3/5 h-auto mx-auto"
              />
            </div>

            {/* Text Content */}
            <div className="lg:order-2">
              <h2 className="font-bold text-gray-800 mb-3" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 700, fontSize: '32px', lineHeight: '44.4px', letterSpacing: '0%' }}>
                About<br />Enabled Africa
              </h2>
              <p className="text-lg text-gray-600 mb-2">
                Ability is everywhere. Opportunity should be too
              </p>
              <p className="text-base text-gray-700 max-w-md">
                EnabledAfrica is building a continent-wide platform that connects
                people with opportunities and helps organizations grow stronger
                through talent.
              </p>
            </div>
          </div>

          {/* Vision and Mission Section */}
          <div className="space-y-16">

            {/* Vision Section - Image Right, Text Left */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Vision Text - Left */}
              <div className="lg:order-1">
                <h3 className="font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '25px', lineHeight: '44.4px', letterSpacing: '0%' }}>Our Vision</h3>
                <p className="text-gray-700 text-base">
                  An Africa where everyone - regardless of background, gender, age, or
                  ability - has the chance to build a meaningful career and contribute
                  to their community
                </p>
              </div>
              {/* Vision Image - Right */}
              <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] lg:order-2">
                <Image
                  src="/images/Subtract.png"
                  alt="Vision image"
                  width={400}
                  height={300}
                  className="w-3/5 h-auto mx-auto"
                />
              </div>
            </div>

            {/* Mission Section - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Mission Image - Left */}
              <div className="overflow-hidden rounded-2xl shadow-[0_12px_32px_-12px_rgba(0,0,0,0.1)] lg:order-1">
                <Image
                  src="/images/Group 1171276409.png"
                  alt="Mission image"
                  width={400}
                  height={300}
                  className="w-3/5 h-auto mx-auto"
                />
              </div>
              {/* Mission Text - Right */}
              <div className="lg:order-2">
                <h3 className="font-semibold text-gray-800 mb-3" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 600, fontSize: '25px', lineHeight: '44.4px', letterSpacing: '0%' }}>Our Mission</h3>
                <p className="text-gray-700 text-base mb-6">
                  To unlock Africa&apos;s full potential by making access to work, skills,
                  and growth opportunities simple, fair, and inclusive for all
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>

        </div>
        
        {/* Our Values Section */}
        <OurValues />
      </section>
    </>
  );
}