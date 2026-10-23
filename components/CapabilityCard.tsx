"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Capability } from "@/lib/data";

const PHOTO_INTERVAL_MS = 2000;

// A third of the max-w-7xl row on desktop; full width when the cards stack.
const PHOTO_SIZES = "(min-width: 1280px) 406px, (min-width: 768px) 33vw, 100vw";

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

export default function CapabilityCard({
  capability,
  photos,
}: {
  capability: Capability;
  photos: string[];
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const canHover = useMediaQuery("(hover: hover)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [nearViewport, setNearViewport] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [index, setIndex] = useState(0);

  // Hold off loading the photos until the card is about to scroll into view.
  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
    );
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // Step through the photos while the card is hovered or keyboard-focused.
  const cycling = ((hovered && canHover) || focused) && !reduceMotion && photos.length > 1;
  useEffect(() => {
    if (!cycling) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), PHOTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [cycling, photos.length]);

  // Touch-only devices never reach the hover state, so skip the download there.
  const loadPhotos = nearViewport && canHover;
  const current = reduceMotion ? 0 : index;

  return (
    <Link
      ref={ref}
      href={`/${capability.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={(e) => setFocused(e.currentTarget.matches(":focus-visible"))}
      onBlur={() => setFocused(false)}
      className="group relative isolate flex flex-col bg-white p-8 transition-[translate,box-shadow] duration-300 ease-out hover:shadow-card focus-visible:shadow-card motion-safe:hover:-translate-y-1 motion-safe:focus-visible:-translate-y-1"
    >
      {/* Project photos under a navy wash, revealed on hover */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-navy opacity-0 transition-opacity duration-450 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        {loadPhotos &&
          photos.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              sizes={PHOTO_SIZES}
              className={`object-cover transition-opacity duration-800 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Red rule that draws across the top edge */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-brand-red transition-transform duration-450 ease-out motion-reduce:transition-none group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />

      <h3 className="text-base font-bold text-navy transition-colors duration-450 group-hover:text-white group-focus-visible:text-white">
        {capability.title}
      </h3>
      <ul className="mt-4 space-y-2">
        {capability.items.map((item) => (
          <li
            key={item}
            className="text-sm text-brand-black/60 leading-relaxed border-l border-brand-red/40 pl-3 transition-colors duration-450 group-hover:text-white group-hover:border-white/35 group-focus-visible:text-white group-focus-visible:border-white/35"
          >
            {item}
          </li>
        ))}
      </ul>
      <span className="mt-6 text-navy text-xs font-semibold tracking-widest uppercase transition-colors duration-450 group-hover:text-white group-focus-visible:text-white">
        View Projects →
      </span>
    </Link>
  );
}
