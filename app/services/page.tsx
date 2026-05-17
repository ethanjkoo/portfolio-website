import { services } from "@/lib/data";
import ServiceIcon from "@/components/ServiceIcon";

export const metadata = {
  title: "Services — KOO Design Build",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-white pt-32 pb-16 px-6 lg:px-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-navy">Services</h1>
          <div className="mt-4 h-px w-16 bg-[#9B1C1C]" />
          <p className="mt-6 text-lg text-[#0A0A0A]/70 max-w-xl">
            From architecture and design through federal inspections, we cover every phase of
            your project with ICC-certified expertise.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-10">
                <ServiceIcon id={service.id} />
                <h2 className="mt-5 text-xl font-bold text-navy">{service.title}</h2>
                <p className="mt-3 text-[#0A0A0A]/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="bg-navy py-6 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-2">
          {["ICC Certified", "Licensed in AZ & CA", "22+ Projects Completed"].map((item) => (
            <span key={item} className="text-white text-sm font-medium tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
