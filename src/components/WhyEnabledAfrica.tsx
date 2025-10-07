import Image from "next/image";

export default function WhyEnabledAfrica() {
  return (
    <section className="pt-0 pb-10 sm:pb-14 lg:pb-18 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-6 sm:mb-10 lg:mb-14">
          <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-gray-800 mb-3 sm:mb-4">
            Why EnabledAfrica?
          </h2>
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {/* Card 1 - Pan-African Reach */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <Image 
                  src="/images/Vector1.png" 
                  alt="Pan-African Reach icon" 
                  width={80}
                  height={80}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-5">
                  Pan-African Reach
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-left">
                  One platform connecting people and employers across the continent.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Skills First Matching */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]" style={{ backgroundColor: '#065f46' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <Image 
                  src="/images/Union (1).png" 
                  alt="Skills First Matching icon" 
                  width={112}
                  height={72}
                  className="w-20 h-12 sm:w-24 sm:h-16 lg:w-28 lg:h-18 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 lg:mb-5">
                  Skills First Matching
                </h3>
                <p className="text-white text-sm sm:text-base text-left">
                  Share your strengths and get matched with opportunities that fit you.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Inclusive for All */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <Image 
                  src="/images/Group 1171276412.png" 
                  alt="Inclusive for All icon" 
                  width={128}
                  height={64}
                  className="w-24 h-12 sm:w-28 sm:h-14 lg:w-32 lg:h-16 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-3 sm:mb-4 lg:mb-5">
                  Inclusive for All
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-left">
                  From youth and women to professionals and entrepreneurs, everyone can find a place here.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Beyond Jobs */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]" style={{ backgroundColor: '#065f46' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6 lg:mb-8">
                <Image 
                  src="/images/Vector (1).png" 
                  alt="Beyond Jobs icon" 
                  width={80}
                  height={80}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-3 sm:mb-4 lg:mb-5">
                  Beyond Jobs
                </h3>
                <p className="text-white text-sm sm:text-base text-left">
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