import Link from 'next/link'

export default function Header() {
  return (
            <header className="bg-white shadow-sm sticky top-0 z-50">
              <div className="mx-auto max-w-7xl px-6 md:px-10 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center ml-4">
          <img 
            src="/images/story-image.png" 
            alt="Enabled Africa Logo" 
            className="w-28 h-28 object-contain"
          />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#" className="text-gray-600 hover:text-orange-500 text-lg">Who we are</Link>
                  <Link href="#why-enabled-africa" className="text-gray-600 hover:text-orange-500 text-lg">Why Enabled Africa</Link>
                  <Link href="#what-you-get" className="text-gray-600 hover:text-orange-500 text-lg">What you get</Link>
                  <Link href="#about-us" className="text-gray-600 hover:text-orange-500 text-lg">About us</Link>
          <Link href="#our-story" className="text-gray-600 hover:text-orange-500 text-lg">Our story</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-600 hover:text-orange-500 text-sm font-medium">
            Login
          </Link>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm font-medium">
            Sign up
          </button>
        </div>
      </div>
    </header>
  )
}
