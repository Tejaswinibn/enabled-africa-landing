
import Image from "next/image";

export default function ConnectionSection() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-0 bg-white -mb-6 sm:-mb-8 lg:-mb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
          {/* Left Text */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-12 lg:left-8 z-10 max-w-sm sm:max-w-md">
            <h2 className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-semibold leading-tight">
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
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain"
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
          <div className="absolute top-4 left-16 sm:top-6 sm:left-20 lg:top-8 lg:left-20 z-10">
            <Image src="/images/Ellipse 4344.png" alt="Profile 3" width={50} height={50} className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full" />
          </div>
          <div className="absolute top-[45%] left-[40%] sm:left-[45%] lg:left-[56%] z-10">
            <Image src="/images/Ellipse 4345.png" alt="Profile 4" width={50} height={50} className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full" />
          </div>
          <div className="absolute top-24 left-12 sm:top-36 sm:left-16 lg:top-52 lg:left-48 z-10">
            <Image src="/images/Ellipse 4346.png" alt="Profile 5" width={60} height={60} className="w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 rounded-full" />
          </div>
          <div className="absolute top-12 right-6 sm:top-16 sm:right-10 lg:top-20 lg:right-20 z-10">
            <Image src="/images/Ellipse 4343.png" alt="Profile 2" width={50} height={50} className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full" />
          </div>
          <div className="absolute top-20 left-6 sm:top-28 sm:left-12 lg:top-40 lg:left-32 z-10">
            <Image src="/images/Ellipse 4342.png" alt="Profile 1" width={50} height={50} className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 rounded-full" />
          </div>
          
          {/* Right Text Box */}
          <div className="absolute top-1/2 right-4 sm:top-1/2 sm:right-6 lg:top-1/2 lg:right-8 transform -translate-y-1/2 z-10 max-w-sm sm:max-w-md">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              We believe that talent exists everywhere in Africa, and everyone deserves a fair chance to succeed. Whether you&apos;re a job seeker, a student, a professional, or an employer, we make it easier to grow, connect, and thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}