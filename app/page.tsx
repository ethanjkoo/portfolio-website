import Link from "next/link";
import Image from "next/image";
import { capabilities } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto w-full py-24 lg:py-32 flex flex-col items-center text-center">
          <Image
            src="/logo/logo_kdb.jpg"
            alt="KOO Design Build"
            width={880}
            height={267}
            className="w-full max-w-md sm:max-w-lg lg:max-w-2xl h-auto object-contain"
            priority
          />
          <div className="mt-8 h-px w-24 bg-brand-red" />
          <p className="mt-8 text-xl lg:text-2xl text-brand-black font-light tracking-wide">
            Assessment • Design • Construction
          </p>
          <div className="mt-10 max-w-2xl text-left">
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
          <div className="mt-10 flex flex-wrap justify-center gap-4">
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
        className="bg-white py-24 px-6 lg:px-8 border-t border-black/10 scroll-mt-28"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-navy">Core Capabilities</h2>
            <div className="mt-3 h-px w-16 bg-brand-red" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <Link
                key={capability.id}
                href={`/${capability.id}`}
                className="flex flex-col border border-black/10 p-8 hover:border-navy/20 transition-colors group"
              >
                <h3 className="text-base font-bold text-navy group-hover:text-navy/70 transition-colors">
                  {capability.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-brand-black/60 leading-relaxed border-l border-brand-red/40 pl-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 text-navy text-xs font-semibold tracking-widest uppercase group-hover:text-brand-red transition-colors">
                  View Projects →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
