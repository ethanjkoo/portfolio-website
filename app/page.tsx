import Link from "next/link";
import { services, projects } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  const featuredServices = services.slice(0, 3);

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
            Architecture. Precision. Craft.
          </p>
          <div className="mt-10">
            <Link
              href="/about"
              className="inline-block bg-[#9B1C1C] text-white px-8 py-4 text-xs font-semibold tracking-widest uppercase hover:bg-[#7a1515] transition-colors"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="bg-white py-24 px-6 lg:px-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-navy mb-6">
              About KOO Design Build
            </h2>
            <p className="text-[#0A0A0A] leading-relaxed">
              KOO Design Build is a full-service architecture and construction management firm
              specializing in government, commercial, and multifamily projects. With decades of
              combined experience, we deliver precision-built environments that meet the highest
              standards of design and code compliance.
            </p>
            <p className="text-[#0A0A0A] leading-relaxed mt-4">
              From concept to certificate of occupancy, we manage every phase with clarity,
              accountability, and craft.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {[
              { stat: "22+", label: "Projects Completed" },
              { stat: "AZ & CA", label: "Licensed States" },
              { stat: "ICC", label: "Certified" },
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

      {/* Services teaser */}
      <section className="bg-white py-24 px-6 lg:px-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-navy">What We Do</h2>
            <div className="mt-3 h-px w-16 bg-[#9B1C1C]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href="/services"
                className="border border-black/10 p-8 hover:border-navy/20 transition-colors group"
              >
                <ServiceIcon id={service.id} />
                <h3 className="mt-5 text-base font-bold text-navy group-hover:text-navy/70 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[#0A0A0A]/60 leading-relaxed">
                  {service.description.split(".")[0]}.
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="text-navy text-sm font-semibold tracking-wide underline underline-offset-4 hover:text-navy/60 transition-colors"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-white py-24 px-6 lg:px-8 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-navy">Featured Projects</h2>
            <div className="mt-3 h-px w-16 bg-[#9B1C1C]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link key={project.id} href="/projects" className="group block">
                <div className="aspect-video bg-navy/5 border border-black/10 flex items-center justify-center">
                  <span className="text-navy/20 text-xs uppercase tracking-widest">
                    Project Photo
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="font-bold text-navy group-hover:text-navy/60 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#0A0A0A]/50 mt-1">
                    {project.location} · {project.client}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/projects"
              className="text-navy text-sm font-semibold tracking-wide underline underline-offset-4 hover:text-navy/60 transition-colors"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
