// app/components/ValueBadge.tsx
import React from "react";

export default function ValueBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-green-100 items-center justify-center flex-shrink-0">
      <span className="h-6 w-6 sm:h-7 sm:w-7 text-green-700">
        {children}
      </span>
    </span>
  );
}

// Our Values Component
export function OurValues() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12">
          {/* Column 1: Heading, desc, and two value rows */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">Our Values</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10">
              An Africa where everyone – regardless of background, gender, age, or ability – has the chance to build a meaningful career and contribute to their community
            </p>
            {/* Respect */}
            <div className="flex items-center gap-3 sm:gap-4 pb-5 sm:pb-7 border-b border-gray-200">
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polygon points="12 2 15 8 22 9 17 14 18 21 12 18 6 21 7 14 2 9 9 8 12 2" />
                </svg>
              </ValueBadge>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">Respect</h3>
                <p className="text-sm sm:text-base text-gray-700">Every individual has value and deserves dignity in work</p>
              </div>
            </div>
            {/* Trust */}
            <div className="flex items-center gap-3 sm:gap-4 py-5 sm:py-7 border-b border-gray-200">
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 2L20 6.5V12C20 17.07 16.09 21.36 12 22 7.91 21.36 4 17.07 4 12V6.5L12 2z" />
                </svg>
              </ValueBadge>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">Trust</h3>
                <p className="text-sm sm:text-base text-gray-700">Clear, fair, and transparent in everything we do</p>
              </div>
            </div>
          </div>
          {/* Column 2: Three value rows, but first is top-aligned to heading */}
          <div className="mt-0 md:pt-[108px]">
            {/* Collaboration */}
            <div className="flex items-center gap-3 sm:gap-4 pb-5 sm:pb-7 border-b border-gray-200">
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="7" y="11" width="10" height="7" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
              </ValueBadge>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">Collaboration</h3>
                <p className="text-sm sm:text-base text-gray-700">Working with businesses, governments, NGOs, and communities to open doors</p>
              </div>
            </div>
            {/* Opportunity */}
            <div className="flex items-center gap-3 sm:gap-4 py-5 sm:py-7 border-b border-gray-200">
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="5 13 9 17 19 7" />
                </svg>
              </ValueBadge>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">Opportunity</h3>
                <p className="text-sm sm:text-base text-gray-700">We focus on creating equal access for all</p>
              </div>
            </div>
            {/* Growth */}
            <div className="flex items-center gap-3 sm:gap-4 py-5 sm:py-7">
              <ValueBadge>
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h4L8 20l4-16 3.5 7H19" />
                </svg>
              </ValueBadge>
              <div>
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900 mb-1">Growth</h3>
                <p className="text-sm sm:text-base text-gray-700">We help people learn, adapt, and build futures</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}