import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="inline-block bg-white rounded-md px-4 py-3">
              <Image
                src="/logo/logo_kdb.jpg"
                alt="KOO Design Build"
                height={80}
                width={264}
                className="h-8 sm:h-9 md:h-10 w-auto object-contain"
              />
            </div>
            <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-xs">
              Assessment, planning, design, and construction — serving federal, state, tribal, and institutional clients since 1998.
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
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:Info@kooDB.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Info@kooDB.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.kooDB.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  www.kooDB.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-brand-red">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} KOO Design Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
