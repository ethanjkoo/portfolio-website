"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  const photos = project.images;
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const show = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + photos.length) % photos.length),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % photos.length),
    [photos.length],
  );

  // Keyboard nav + scroll lock while the lightbox is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, prev, next]);

  return (
    <div className="group">
      {/* Primary photo — click to open the gallery */}
      <button
        type="button"
        onClick={() => show(0)}
        aria-label={`View photos of ${project.title}`}
        className="relative block w-full aspect-[3/2] bg-navy/5 border border-black/10 overflow-hidden cursor-pointer"
      >
        <Image
          src={photos[0]}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Hover detail overlay */}
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-colors duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
          <p className="text-white font-bold text-base">{project.title}</p>
          <p className="text-white/80 text-sm mt-1">{project.location}</p>
          <p className="text-white/60 text-xs mt-1">{project.client}</p>
        </div>
      </button>

      <div className="mt-4">
        <h3 className="font-bold text-navy text-base">{project.title}</h3>
        <p className="text-sm text-brand-black/50 mt-1">
          {project.client} · {project.location} · {project.year}
        </p>
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mt-2">
          {project.contractType}
        </p>
        <p className="text-sm text-brand-black/70 mt-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Full-screen portfolio takeover */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col lg:flex-row"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} photo gallery`}
        >
          {/* Close — fixed to the corner of the whole takeover */}
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur text-navy text-2xl leading-none shadow-sm hover:bg-white transition-colors"
          >
            ×
          </button>

          {/* Image — full-bleed, ~70% of the screen */}
          <div className="relative order-1 lg:order-2 h-[45vh] lg:h-full lg:flex-1 bg-navy/5">
            <Image
              src={photos[index]}
              alt={`${project.title} — photo ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="object-cover"
              priority
            />

            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur text-navy text-2xl shadow-sm hover:bg-white transition-colors"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur text-navy text-2xl shadow-sm hover:bg-white transition-colors"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {/* Side panel — the "printed portfolio" caption */}
          <div className="order-2 lg:order-1 flex flex-col lg:w-[34%] xl:w-[30%] lg:h-full overflow-y-auto p-8 lg:p-12 xl:p-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-red">
              {project.contractType}
            </p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-extrabold leading-tight text-navy">
              {project.title}
            </h2>
            <div className="mt-5 h-px w-16 bg-brand-red" />

            <dl className="mt-7 space-y-3 text-sm">
              {[
                ["Client", project.client],
                ["Location", project.location],
                ["Year", project.year],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4">
                  <dt className="w-20 flex-shrink-0 text-brand-black/40 uppercase tracking-widest text-[11px] pt-0.5">
                    {label}
                  </dt>
                  <dd className="text-brand-black font-medium">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-7 text-sm lg:text-base text-brand-black/70 leading-relaxed">
              {project.description}
            </p>

            {/* Counter + thumbnails pinned to the bottom of the panel */}
            {photos.length > 1 && (
              <div className="mt-auto pt-10">
                <p className="text-xs font-semibold tracking-widest text-brand-black/40">
                  {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
                </p>
                <div className="mt-4 flex gap-2 overflow-x-auto">
                  {photos.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setIndex(i)}
                      aria-label={`Go to photo ${i + 1}`}
                      className={`relative h-14 w-20 flex-shrink-0 overflow-hidden border-2 transition-all ${
                        i === index
                          ? "border-brand-red"
                          : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
