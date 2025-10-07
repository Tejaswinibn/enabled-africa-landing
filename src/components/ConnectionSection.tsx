
import Image from "next/image";

export default function ConnectionSection() {
  return (
    <section className="pt-20 pb-0 bg-white -mb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative h-[800px]">
          {/* Left Text */}
          <div className="absolute top-12 left-8 z-10 max-w-sm">
            <h2 className="text-gray-800" style={{
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 500,
              fontSize: '23px',
              lineHeight: '35px',
              letterSpacing: '0%'
            }}>
              Enabled Africa connects<br />
              people and opportunities<br />
              across the continent
            </h2>
          </div>

          {/* Africa Map - positioned more to the right */}
          <div className="absolute top-1/3 right-1/3 transform -translate-y-1/2 z-5">
            <Image
              src="/images/Vector.png"
              alt="Africa Map"
              width={400}
              height={400}
              className="w-120 h-120 object-contain"
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
          <div className="absolute top-8 left-88 z-10">
            <Image src="/images/Ellipse 4344.png" alt="Profile 3" width={80} height={80} className="w-20 h-20 rounded-full" />
          </div>
          <div className="absolute top-[45%] left-[56%] z-10">
            <Image src="/images/Ellipse 4345.png" alt="Profile 4" width={80} height={80} className="w-20 h-20 rounded-full" />
          </div>
          <div className="absolute top-84 left-72 z-10">
            <Image src="/images/Ellipse 4346.png" alt="Profile 5" width={96} height={96} className="w-24 h-24 rounded-full" />
          </div>
          <div className="absolute top-20 right-36 z-10">
            <Image src="/images/Ellipse 4343.png" alt="Profile 2" width={80} height={80} className="w-20 h-20 rounded-full" />
          </div>
          <div className="absolute top-52 left-48 z-10">
            <Image src="/images/Ellipse 4342.png" alt="Profile 1" width={80} height={80} className="w-20 h-20 rounded-full" />
          </div>
          
          {/* Right Text Box */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 max-w-sm">
            <p className="text-gray-700 text-sm leading-relaxed">
              We believe that talent exists everywhere in Africa, and everyone deserves a fair chance to succeed. Whether you&apos;re a job seeker, a student, a professional, or an employer, we make it easier to grow, connect, and thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}