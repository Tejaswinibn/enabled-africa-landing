export default function WhyEnabledAfrica() {
  return (
    <section className="pt-0 pb-12 sm:pb-20 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why EnabledAfrica?
          </h2>
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1 - Pan-African Reach */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[280px] sm:min-h-[320px]" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/images/Vector1.png" 
                  alt="Pan-African Reach icon" 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Pan-African Reach
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm text-left">
                  One platform connecting people and employers across the continent.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 - Skills First Matching */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[280px] sm:min-h-[320px]" style={{ backgroundColor: '#065f46' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/images/Union (1).png" 
                  alt="Skills First Matching icon" 
                  className="w-20 h-12 sm:w-24 sm:h-16 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                  Skills First Matching
                </h3>
                <p className="text-white text-xs sm:text-sm text-left">
                  Share your strengths and get matched with opportunities that fit you.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 - Inclusive for All */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[280px] sm:min-h-[320px]" style={{ backgroundColor: '#FFD071' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/images/Group 1171276412.png" 
                  alt="Inclusive for All icon" 
                  className="w-24 h-12 sm:w-30 sm:h-15 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
                  Inclusive for All
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm text-left">
                  From youth and women to professionals and entrepreneurs, everyone can find a place here.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 - Beyond Jobs */}
          <div className="p-4 sm:p-6 lg:p-8 rounded-xl min-h-[280px] sm:min-h-[320px]" style={{ backgroundColor: '#065f46' }}>
            <div className="flex flex-col items-center text-center h-full justify-between">
              <div className="mb-4 sm:mb-6">
                <img 
                  src="/images/Vector (1).png" 
                  alt="Beyond Jobs icon" 
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto"
                />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">
                  Beyond Jobs
                </h3>
                <p className="text-white text-xs sm:text-sm text-left">
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