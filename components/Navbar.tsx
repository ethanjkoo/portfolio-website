"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { capabilities } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  ...capabilities.map((c) => ({ href: `/${c.id}`, label: c.navLabel })),
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pastHeroLogo, setPastHeroLogo] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Home shows the large hero logo, so the navbar logo only appears once that
  // one has scrolled up out of view behind the nav.
  useEffect(() => {
    const nav = navRef.current;
    const bar = barRef.current;
    const heroLogo = document.getElementById("hero-logo");
    if (!isHome || !nav || !bar || !heroLogo) return;

    let observer: IntersectionObserver | undefined;
    // The bar's height changes per breakpoint, so rebuild the observer on resize.
    const resizeObserver = new ResizeObserver(() => {
      // Bar plus the nav's top/bottom borders (leaves out the mobile drawer).
      const navHeight = bar.offsetHeight + nav.offsetHeight - nav.clientHeight;
      observer?.disconnect();
      observer = new IntersectionObserver(
        ([entry]) =>
          setPastHeroLogo(!entry.isIntersecting && entry.boundingClientRect.top < navHeight),
        { rootMargin: `-${navHeight}px 0px 0px 0px` },
      );
      observer.observe(heroLogo);
    });
    resizeObserver.observe(bar);

    return () => {
      resizeObserver.disconnect();
      observer?.disconnect();
      setPastHeroLogo(false);
    };
  }, [isHome]);

  const logoVisible = !isHome || pastHeroLogo;

  const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    if (!isHome || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    // Already on home: glide back up to the hero instead of re-navigating.
    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-t-[3px] border-t-brand-red border-b border-b-black/9"
    >
      <div
        ref={barRef}
        className="max-w-7xl mx-auto px-6 lg:px-8 h-20 sm:h-22 md:h-24 flex items-center justify-between"
      >
        <Link
          href="/"
          onClick={onLogoClick}
          inert={!logoVisible}
          className={`transition-[opacity,translate] duration-350 ease-out ${
            logoVisible ? "" : "opacity-0 motion-safe:-translate-x-2.5"
          }`}
        >
          <Image
            src="/logo/logo_kdb.jpg"
            alt="KOO Design Build"
            height={80}
            width={264}
            className="h-8 sm:h-10 md:h-12 w-auto object-contain"
            priority={!isHome}
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
                  className={`relative text-navy text-sm font-semibold tracking-wide pb-1 transition-colors hover:text-navy/60 ${
                    active
                      ? "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-red"
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
                  className="text-navy text-base font-semibold hover:text-navy/60 transition-colors"
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
