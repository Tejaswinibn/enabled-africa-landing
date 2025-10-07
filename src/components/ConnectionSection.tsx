
import Image from "next/image";

export default function ConnectionSection() {
  return (
    <section className="pt-14 sm:pt-20 md:pt-24 pb-0 bg-white -mb-6 sm:-mb-8 lg:-mb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <div className="relative h-[520px] md:h-[600px]">
          {/* Left Text - Mobile optimized */}
          <div className="absolute top-[6%] left-[4%] z-10 max-w-[22ch]">
            <h2 className="text-[22px] sm:text-[28px] font-semibold leading-tight text-gray-800">
              Enabled Africa connects<br />
              people and opportunities<br />
              across the continent
            </h2>
          </div>

          {/* Africa Map - Mobile centered */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5">
            <Image
              src="/images/Vector.png"
              alt="Africa Map"
              width={400}
              height={400}
              className="w-[78vw] max-w-[560px] h-auto object-contain"
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 60vw, 560px"
            />
          </div>
          
          {/* Connecting Lines Overlay - Mobile optimized */}
          <div className="absolute left-[-10%] right-[-10%] top-[20%] h-[60%] z-5">
            <Image
              src="/images/Vector 4504.png"
              alt="Connecting Lines"
              width={1200}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Profile Images - Mobile sizes */}
          <div className="absolute top-[6%] left-[4%] z-10">
            <Image src="/images/Ellipse 4344.png" alt="Profile 3" width={64} height={64} className="h-[64px] w-[64px] rounded-full" />
          </div>
          <div className="absolute top-[20%] right-[4%] z-10">
            <Image src="/images/Ellipse 4343.png" alt="Profile 2" width={64} height={64} className="h-[64px] w-[64px] rounded-full" />
          </div>
          <div className="absolute top-[45%] left-[50%] transform -translate-x-1/2 z-10">
            <Image src="/images/Ellipse 4345.png" alt="Profile 4" width={80} height={80} className="h-[80px] w-[80px] rounded-full" />
          </div>
          <div className="absolute bottom-[20%] left-[4%] z-10">
            <Image src="/images/Ellipse 4342.png" alt="Profile 1" width={56} height={56} className="h-[56px] w-[56px] rounded-full" />
          </div>
          <div className="absolute bottom-[10%] right-[4%] z-10">
            <Image src="/images/Ellipse 4346.png" alt="Profile 5" width={56} height={56} className="h-[56px] w-[56px] rounded-full" />
          </div>
          
          {/* Right Text Box - Mobile positioned below map */}
          <div className="absolute top-[54%] left-[4%] right-[4%] md:top-1/2 md:right-0 md:left-auto md:transform md:-translate-y-1/2 z-10 max-w-[60ch]">
            <p className="text-gray-700 text-[15px] leading-7">
              We believe that talent exists everywhere in Africa, and everyone deserves a fair chance to succeed. Whether you&apos;re a job seeker, a student, a professional, or an employer, we make it easier to grow, connect, and thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}