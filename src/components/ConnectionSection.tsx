import Image from "next/image";

export default function ConnectionSection() {
  return (
    <section id="who-we-are" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-10 lg:px-12">
        {/* Mobile Layout - Stacked */}
        <div className="block md:hidden">
          {/* Mobile Left Text */}
          <div className="text-center mb-8">
            <h2 className="text-[22px] sm:text-[24px] font-semibold leading-tight text-gray-800 mb-4">
              Enabled Africa connects<br />
              people and opportunities<br />
              across the continent
            </h2>
          </div>

          {/* Mobile Map Container - Fixed positioning like desktop */}
          <div className="relative h-[400px] mb-8">
            {/* Africa Map - Mobile (scaled down but same relative position) */}
            <div className="absolute top-1/2 left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-5">
              <Image
                src="/images/Vector.png"
                alt="Africa Map"
                width={350}
                height={350}
                className="w-[320px] h-[320px] object-contain drop-shadow-lg"
                priority
              />
            </div>
            
            {/* Connecting Lines - Mobile (same relative position) */}
            <div className="absolute top-[25%] left-[10%] right-[10%] h-[50%] z-10">
              <Image
                src="/images/Vector 4504.png"
                alt="Connecting Lines"
                width={800}
                height={400}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Mobile Profile Images - Same relative positions as desktop */}
            <div className="absolute top-[15%] left-[34%] z-20">
              <Image 
                src="/images/Ellipse 4344.png" 
                alt="Profile 1" 
                width={50} 
                height={50} 
                className="h-[50px] w-[50px] rounded-full shadow-lg" 
              />
            </div>
            
            <div className="absolute top-[42%] left-[38%] z-20">
              <Image 
                src="/images/Ellipse 4342.png" 
                alt="Profile 2" 
                width={50} 
                height={50} 
                className="h-[50px] w-[50px] rounded-full shadow-lg" 
              />
            </div>
            
            <div className="absolute top-[65%] left-[54%] z-20">
              <Image 
                src="/images/Ellipse 4345.png" 
                alt="Profile 3" 
                width={60} 
                height={60} 
                className="h-[60px] w-[60px] rounded-full shadow-lg" 
              />
            </div>
            
            <div className="absolute top-[48%] left-[75%] z-20">
              <Image 
                src="/images/Ellipse 4343.png" 
                alt="Profile 4" 
                width={50} 
                height={50} 
                className="h-[50px] w-[50px] rounded-full shadow-lg" 
              />
            </div>
            
            <div className="absolute top-[60%] left-[58%] z-20">
              <Image 
                src="/images/Ellipse 4346.png" 
                alt="Profile 5" 
                width={50} 
                height={50} 
                className="h-[50px] w-[50px] rounded-full shadow-lg" 
              />
            </div>
          </div>

          {/* Mobile Right Text */}
          <div className="text-center px-4">
            <p className="text-gray-700 text-[15px] leading-7 max-w-[85%] mx-auto ml-8">
              We believe that talent exists everywhere in Africa, and everyone deserves a fair chance to succeed. Whether you&apos;re a job seeker, a student, a professional, or an employer, we make it easier to grow, connect, and thrive.
            </p>
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden md:block">
          <div className="relative h-[600px] lg:h-[700px]">
            {/* Left Text Block */}
            <div className="absolute top-16 left-8 lg:left-12 z-10 max-w-[35ch]">
              <h2 className="text-[20px] lg:text-[24px] font-semibold leading-tight text-gray-800 mb-4">
                Enabled Africa connects<br />
                people and opportunities<br />
                across the continent
              </h2>
            </div>

            {/* Africa Map - Desktop */}
            <div className="absolute top-1/2 left-[55%] lg:left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-5">
              <Image
                src="/images/Vector.png"
                alt="Africa Map"
                width={450}
                height={450}
                className="w-[420px] h-[420px] lg:w-[480px] lg:h-[480px] object-contain drop-shadow-lg"
                priority
              />
            </div>
            
            {/* Connecting Lines - Desktop */}
            <div className="absolute top-[25%] left-[10%] right-[10%] h-[50%] z-10">
              <Image
                src="/images/Vector 4504.png"
                alt="Connecting Lines"
                width={1200}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            
            {/* Desktop Profile Images - Exact Figma Positioning */}
            {/* Top-Left Profile - At actual top-left of African map (Morocco/Western Sahara region) */}
            <div className="absolute top-[15%] left-[34%] lg:top-[15%] lg:left-[34%] z-20">
              <Image 
                src="/images/Ellipse 4344.png" 
                alt="Profile 1" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Bottom-Left Profile - Below text, left of map */}
            <div className="absolute top-[42%] left-36 lg:top-[42%] lg:left-40 z-20">
              <Image 
                src="/images/Ellipse 4342.png" 
                alt="Profile 2" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Center-Right Profile - On the map, larger size */}
            <div className="absolute top-[65%] left-[50%] lg:top-[65%] lg:left-[54%] z-20">
              <Image 
                src="/images/Ellipse 4345.png" 
                alt="Profile 3" 
                width={95} 
                height={95} 
                className="h-[95px] w-[95px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Top-Right Profile - Above map, right side */}
            <div className="absolute top-44 left-[65%] lg:top-48 lg:left-[70%] z-20">
              <Image 
                src="/images/Ellipse 4343.png" 
                alt="Profile 4" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Bottom-Right Profile - On ribbon, more to right and bottom */}
            <div className="absolute top-[60%] left-60 lg:top-[60%] lg:left-64 z-20">
              <Image 
                src="/images/Ellipse 4346.png" 
                alt="Profile 5" 
                width={75} 
                height={75} 
                className="h-[75px] w-[75px] rounded-full shadow-lg hover:scale-105 transition-transform duration-300" 
              />
            </div>
            
            {/* Right Text Block */}
            <div className="absolute top-[58%] right-0 lg:right-0 z-10 max-w-[40ch]">
              <p className="text-gray-700 text-[12px] lg:text-[13px] leading-relaxed">
                We believe that talent exists everywhere in Africa, and everyone deserves a fair chance to succeed. Whether you&apos;re a job seeker, a student, a professional, or an employer, we make it easier to grow, connect, and thrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
