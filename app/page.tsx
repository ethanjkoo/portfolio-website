import Link from "next/link";
import { capabilities } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center bg-white px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto w-full py-24 lg:py-32">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-navy leading-none tracking-tight">
            KOO
            <br />
            Design Build
          </h1>
          <div className="mt-6 h-px w-24 bg-[#9B1C1C]" />
          <p className="mt-8 text-xl lg:text-2xl text-[#0A0A0A] font-light tracking-wide">
            Assessment • Planning • Design • Construction
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-block bg-[#9B1C1C] text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#7a1515] transition-colors"
            >
              View Our Work
            </Link>
            <Link
              href="#capabilities"
              className="inline-block border border-navy/20 text-navy px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:border-navy/50 transition-colors"
            >
              Core Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-24 px-6 lg:px-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-navy mb-6">About KDB</h2>
            <p className="text-[#0A0A0A] leading-relaxed">
              Since 1998, KOO design-build, inc. (dba: KDB) has provided assessment, planning,
              design, and construction services for institutional, state, tribal, and federal
              clients. Our expertise spans property condition assessments, capital planning,
              architecture, engineering, construction management, and design-build project delivery.
            </p>
            <p className="text-[#0A0A0A] leading-relaxed mt-4">
              By combining technical evaluation with practical construction experience, we help
              owners assess existing facilities, plan future improvements, modernize aging
              infrastructure, and successfully deliver projects that enhance performance and
              maximize long-term asset value.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {[
              { stat: "25+", label: "Years of Building Experience" },
              { stat: "1,000+", label: "HUD Construction Inspections" },
              { stat: "100s", label: "ASTM E2018 Property Condition Assessments" },
            ].map(({ stat, label }) => (
              <div key={label} className="border-l-2 border-[#9B1C1C] pl-6">
                <p className="text-3xl font-extrabold text-navy">{stat}</p>
                <p className="text-xs text-[#0A0A0A]/60 uppercase tracking-widest mt-1">
                  {label}
                </p>
              </div>
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
            <div className="mt-3 h-px w-16 bg-[#9B1C1C]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability) => (
              <Link
                key={capability.id}
                href={`/projects#${capability.id}`}
                className="flex flex-col border border-black/10 p-8 hover:border-navy/20 transition-colors group"
              >
                <ServiceIcon id={capability.id} />
                <h3 className="mt-5 text-base font-bold text-navy group-hover:text-navy/70 transition-colors">
                  {capability.title}
                </h3>
                <ul className="mt-4 space-y-1.5">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[#0A0A0A]/60 leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-[#9B1C1C] mt-px">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 text-navy text-xs font-semibold tracking-widest uppercase group-hover:text-[#9B1C1C] transition-colors">
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
