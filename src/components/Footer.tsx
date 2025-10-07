import Image from "next/image";

export default function Footer() {
  return (
        <footer className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Card container with rounded top corners */}
        <div className="mt-16 rounded-t-2xl bg-zinc-950/95 ring-1 ring-white/10">
          {/* Top content */}
          <div className="grid grid-cols-1 gap-10 px-6 py-12 md:grid-cols-12 md:px-10">
            {/* Brand */}
            <div className="md:col-span-3 flex items-start gap-3">
              <Image
                src="/images/Group 1171276407.png"
                alt="Enabled Africa"
                width={32}
                height={32}
                className="rounded"
              />
              <div className="leading-tight">
                <p className="font-semibold text-sm">Enabled Africa</p>
              </div>
            </div>

            {/* Company */}
            <nav className="md:col-span-2">
              <h3 className="mb-3 text-sm font-semibold text-zinc-300">Company</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                <li><a href="#about-us" className="hover:text-orange-500">About us</a></li>
              </ul>
            </nav>

            {/* Services */}
            <nav className="md:col-span-3">
              <h3 className="mb-3 text-sm font-semibold text-zinc-300">Services</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="#" className="hover:text-orange-500">For Employers</a></li>
                <li><a href="#" className="hover:text-orange-500">For Professionals</a></li>
              </ul>
            </nav>

            {/* Legal */}
            <nav className="md:col-span-2">
              <h3 className="mb-3 text-sm font-semibold text-zinc-300">Legal</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li><a href="/privacy" className="hover:text-orange-500">Privacy Policy</a></li>
              </ul>
            </nav>

            {/* Social */}
            <div className="md:col-span-2">
              <h3 className="mb-3 text-sm font-semibold text-zinc-300">Follow us</h3>
              <div className="flex items-center gap-3">
                {/* LinkedIn (orange circle) */}
                <a
                  aria-label="LinkedIn"
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition"
                >
                  <span className="text-xs font-bold text-white">in</span>
                </a>

                {/* Instagram (gray circle) */}
                <a
                  aria-label="Instagram"
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-600 transition"
                >
                  <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.26.07 1.64.07 4.85s-.01 3.59-.07 4.85c-.15 3.22-1.67 4.77-4.92 4.92-1.25.06-1.64.07-4.85.07s-3.6-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.2 15.6 2.2 15.2 2.2 12s0-3.59.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.4 2.21 8.8 2.2 12 2.2zm0 3.68a6.12 6.12 0 1 0 0 12.24 6.12 6.12 0 0 0 0-12.24zm6.41-1.36a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88zM12 9.2a2.8 2.8 0 1 1 0 5.6 2.8 2.8 0 0 1 0-5.6z" />
                  </svg>
                </a>

                {/* Facebook (gray circle) */}
                <a
                  aria-label="Facebook"
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-700 hover:bg-zinc-600 transition"
                >
                  <span className="text-xs font-bold text-white">f</span>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mx-6 border-t border-white/10 md:mx-10" />

          {/* Bottom row */}
          <div className="flex items-center justify-between px-6 py-5 md:px-10">
            <p className="text-xs text-zinc-400">
              © 2025 EnabledAfrica. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}