"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        scrolled ? "border-b border-black/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 sm:h-22 md:h-24 flex items-center justify-between">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="/logo/logo_kdb.jpg"
            alt="KOO Design Build"
            height={80}
            width={264}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-navy text-sm font-medium tracking-wide pb-1 transition-colors hover:text-navy/60 ${
                    active
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#9B1C1C]"
                      : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col justify-center gap-[5px]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block w-6 h-px bg-navy transition-transform duration-200 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-navy transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-navy transition-transform duration-200 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          <ul className="flex flex-col px-6 py-6 gap-5">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-navy text-base font-medium hover:text-navy/60 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
