
import Image from "next/image";

export default function ConnectionSection() {
  return (
    <section className="pt-12 sm:pt-20 pb-0 bg-white -mb-8 sm:-mb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative h-[400px] sm:h-[600px] lg:h-[800px]">
          {/* Left Text */}
          <div className="absolute top-4 left-4 sm:top-12 sm:left-8 z-10 max-w-xs sm:max-w-sm">
            <h2 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-medium leading-tight">
              Enabled Africa connects<br />
              people and opportunities<br />
              across the continent
            </h2>
          </div>

          {/* Africa Map - positioned more to the right */}
          <div className="absolute top-1/3 right-1/4 sm:right-1/3 transform -translate-y-1/2 z-5">
            <Image
              src="/images/Vector.png"
              alt="Africa Map"
              width={400}
              height={400}
              className="w-60 h-60 sm:w-80 sm:h-80 lg:w-120 lg:h-120 object-contain"
            />
          </div>
          
          {/* Connecting Lines Overlay - full width */}
          <div className="absolute top-1/3 left-0 right-0 bottom-0 transform -translate-y-1/2 z-5">
            <Image
              src="/images/Vector 4504.png"
              alt="Connecting Lines"
              width={1200}
              height={600}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Profile Images - positioned along the gradient line, moved right */}
          <div className="absolute top-4 left-16 sm:top-8 sm:left-88 z-10">
            <Image src="/images/Ellipse 4344.png" alt="Profile 3" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full" />
          </div>
          <div className="absolute top-[45%] left-[40%] sm:left-[56%] z-10">
            <Image src="/images/Ellipse 4345.png" alt="Profile 4" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full" />
          </div>
          <div className="absolute top-32 left-12 sm:top-84 sm:left-72 z-10">
            <Image src="/images/Ellipse 4346.png" alt="Profile 5" width={72} height={72} className="w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full" />
          </div>
          <div className="absolute top-12 right-8 sm:top-20 sm:right-36 z-10">
            <Image src="/images/Ellipse 4343.png" alt="Profile 2" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full" />
          </div>
          <div className="absolute top-24 left-8 sm:top-52 sm:left-48 z-10">
            <Image src="/images/Ellipse 4342.png" alt="Profile 1" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full" />
          </div>
          
          {/* Right Text Box */}
          <div className="absolute top-1/2 right-0 sm:top-1/2 sm:right-0 transform -translate-y-1/2 z-10 max-w-xs sm:max-w-sm">
            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
              We believe that talent exists everywhere in Africa, and everyone deserves a fair chance to succeed. Whether you&apos;re a job seeker, a student, a professional, or an employer, we make it easier to grow, connect, and thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}