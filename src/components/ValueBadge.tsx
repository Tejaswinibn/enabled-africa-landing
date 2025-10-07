// app/components/ValueBadge.tsx
import React from "react";

export default function ValueBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full bg-[#D6EADF]"
      style={{
        width: 48,
        height: 48,
        color: "#045F33",
      }}
    >
      <span className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
        {children}
      </span>
    </span>
  );
}

// Our Values Component
export function OurValues() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 mt-8 sm:mt-12 lg:mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16 max-w-[40ch] mx-auto lg:mx-0 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Our Values</h2>
          <p className="mt-2 text-sm sm:text-base leading-6 text-zinc-700">
            An Africa where everyone – regardless of background, gender, age, or ability – has the
            chance to build a meaningful career and contribute to their community
          </p>
        </div>

        {/* Custom grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 items-start">
          {/* Left column (Respect + Trust) */}
          <div className="flex flex-col divide-y divide-zinc-200">
            {/* Respect */}
            <div className="flex items-start gap-3 sm:gap-4 pb-4 sm:pb-6">
              <ValueBadge>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </ValueBadge>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-900">Respect</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-700">
                  Every individual has value and deserves dignity in work
                </p>
              </div>
            </div>

            {/* Trust */}
            <div className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <ValueBadge>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </ValueBadge>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-900">Trust</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-700">
                  Clear, fair, and transparent in everything we do
                </p>
              </div>
            </div>
          </div>

          {/* Right column (Collaboration, Opportunity, Growth) */}
          <div className="flex flex-col divide-y divide-zinc-200 md:-mt-8 lg:-mt-12">
            {/* Collaboration */}
            <div className="flex items-start gap-3 sm:gap-4 pb-4 sm:pb-6">
              <ValueBadge>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </ValueBadge>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-900">Collaboration</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-700">
                  Working with businesses, governments, NGOs, and communities to open doors
                </p>
              </div>
            </div>

            {/* Opportunity */}
            <div className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-6 pb-4 sm:pb-6">
              <ValueBadge>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </ValueBadge>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-900">Opportunity</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-700">
                  We focus on creating equal access for all
                </p>
              </div>
            </div>

            {/* Growth */}
            <div className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <ValueBadge>
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 6a1.5 1.5 0 013 0 6 6 0 11-6 6H6a9 9 0 109-9v3h-3z"/>
                </svg>
              </ValueBadge>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-zinc-900">Growth</h3>
                <p className="mt-1 text-xs sm:text-sm text-zinc-700">
                  We help people learn, adapt, and build futures
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}