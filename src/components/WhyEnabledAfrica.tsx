import Image from "next/image";

export default function WhyEnabledAfrica() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-[22px] font-semibold text-gray-800">
            Why EnabledAfrica?
          </h2>
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Pan-African Reach */}
          <div className="p-6 rounded-xl h-[280px]" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4">
                <Image 
                  src="/images/Vector1.png" 
                  alt="Pan-African Reach icon" 
                  width={80}
                  height={60}
                  className="w-20 h-15 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
                  Pan-African Reach
                </h3>
                <p className="text-[14px] text-gray-600 text-center leading-relaxed">
                  One platform connecting people and employers across the continent.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Skills First Matching */}
          <div className="p-6 rounded-xl h-[280px]" style={{ backgroundColor: '#1A6B3F' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4">
                <Image 
                  src="/images/Union (1).png" 
                  alt="Skills First Matching icon" 
                  width={80}
                  height={60}
                  className="w-20 h-15 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'white' }}>
                  Skills First Matching
                </h3>
                <p className="text-[14px] text-center leading-relaxed" style={{ color: 'white' }}>
                  Share your strengths and get matched with opportunities that fit you.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Inclusive for All */}
          <div className="p-6 rounded-xl h-[280px]" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4">
                <Image 
                  src="/images/Group 1171276412.png" 
                  alt="Inclusive for All icon" 
                  width={80}
                  height={60}
                  className="w-20 h-15 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-[16px] font-semibold text-gray-800 mb-3">
                  Inclusive for All
                </h3>
                <p className="text-[14px] text-gray-600 text-center leading-relaxed">
                  From youth and women to professionals and entrepreneurs, everyone can find a place here.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Beyond Jobs */}
          <div className="p-6 rounded-xl h-[280px]" style={{ backgroundColor: '#1A6B3F' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4">
                <Image 
                  src="/images/Vector (1).png" 
                  alt="Beyond Jobs icon" 
                  width={80}
                  height={60}
                  className="w-20 h-15 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-[16px] font-semibold mb-3" style={{ color: 'white' }}>
                  Beyond Jobs
                </h3>
                <p className="text-[14px] text-center leading-relaxed" style={{ color: 'white' }}>
                  Training, mentorship, and innovation programs that support long-term growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}