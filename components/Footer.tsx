import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/logo/logo_concise.png"
              alt="KOO Design Build"
              height={64}
              width={64}
              className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
              Architecture, precision, and craft — delivering design-build excellence across the Southwest.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">
              Contact
            </h4>
            <p>
              <a
                href="tel:+14805804433"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                (480) 580-4433
              </a>
            </p>
            <p className="mt-3">
              <a
                href="mailto:hoonHkoo@kooDB.com"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                hoonHkoo@kooDB.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#9B1C1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-white/40 text-xs">
            © 2019 All Rights Reserved by Koo Design Build
          </p>
        </div>
      </div>
    </footer>
  );
}
