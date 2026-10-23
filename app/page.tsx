import Link from "next/link";
import Image from "next/image";
import { capabilities, projects } from "@/lib/data";
import CapabilityCard from "@/components/CapabilityCard";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto w-full py-24 lg:py-32 flex flex-col items-center text-center">
          {/* The navbar watches this id to know when to reveal its own logo */}
          <Image
            id="hero-logo"
            src="/logo/logo_kdb.jpg"
            alt="KOO Design Build"
            width={880}
            height={267}
            className="w-full max-w-md sm:max-w-lg lg:max-w-2xl h-auto object-contain motion-safe:animate-intro-logo"
            priority
          />
          <div className="mt-8 h-px w-24 bg-brand-red motion-safe:animate-intro-rule" />
          <p className="mt-8 text-xl lg:text-2xl text-brand-black font-light tracking-wide motion-safe:animate-intro-tagline">
            Assessment • Design • Construction
          </p>
          <div className="mt-10 max-w-2xl text-left motion-safe:animate-intro-content">
            <p className="text-base lg:text-lg text-brand-black/70 leading-8">
              Since 1998, KOO design-build, inc. (dba: KDB) has provided assessment, planning,
              design, and construction services for institutional, state, tribal, and federal
              clients. Our expertise spans property condition assessments, capital planning,
              architecture, engineering, construction management, and design-build project delivery.
            </p>
            <p className="text-base lg:text-lg text-brand-black/70 leading-8 mt-5">
              By combining technical evaluation with practical construction experience, we help
              owners assess existing facilities, plan future improvements, modernize aging
              infrastructure, and successfully deliver projects that enhance performance and
              maximize long-term asset value.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4 motion-safe:animate-intro-content">
            {capabilities.map((capability) => (
              <Link
                key={capability.id}
                href={`/${capability.id}`}
                className="inline-block border border-navy/20 text-navy px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-navy/50 hover:text-brand-red transition-colors"
              >
                {capability.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Core Capabilities */}
      <section
        id="capabilities"
        className="bg-navy py-24 px-6 lg:px-8 border-b border-white/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-white">Core Capabilities</h2>
            <div className="mt-3 h-px w-16 bg-brand-red" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <CapabilityCard
                key={capability.id}
                capability={capability}
                // The lead photo of each project listed on that capability's page
                photos={projects
                  .filter((p) => p.category === capability.id)
                  .map((p) => p.images[0])}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
