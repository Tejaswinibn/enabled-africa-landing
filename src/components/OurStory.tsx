import Image from "next/image";

export default function OurStory() {
  return (
    <section className="relative isolate py-20 sm:py-24">
      {/* Centered container for everything, including ribbon */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Ribbon underlay positioned to this container only */}
        <div aria-hidden="true" className="pointer-events-none relative -z-10">
          <Image
            src="/images/Union.png"
            alt=""
            width={2400}
            height={600}
            className="absolute left-[0%] right-[-24%] top-8 h-[320px] w-[240%] object-contain opacity-85"
            priority
          />
        </div>

        <div className="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          {/* Left text — force to top-left and closer to image */}
          <div className="lg:col-span-4 self-start lg:-mt-12 lg:pr-6">
            <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">
              Our Story
            </h2>
            <p className="text-base leading-7 text-zinc-700 max-w-[32ch]">
              Enabled Africa began in 2025 with a simple idea: talent is
              everywhere, but not everyone has access to opportunity.
            </p>
          </div>

          {/* Center image (unchanged) */}
          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)]">
              <Image
                src="/images/disabled-woman-in-wheelchair-looking-at-computer-2025-03-15-01-12-15-utc.png"
                alt="Disabled woman working on laptop"
                width={520}
                height={640}
                className="h-[440px] md:h-[460px] w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Right text + CTA — push to bottom-right and away from image */}
          <div className="lg:col-span-4 self-end lg:mt-16 lg:pl-6">
            <p className="text-base leading-7 text-zinc-700 mb-6 max-w-[36ch]">
              Today, with partners across the continent and globally, we are
              shaping a new future for Africa&apos;s workforce – one that works for
              everyone.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-white font-medium shadow-sm hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
            >
              Join the movement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}