import { capabilities, projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — KOO Design Build",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-white pt-32 pb-16 px-6 lg:px-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-navy">Projects</h1>
          <div className="mt-4 h-px w-16 bg-brand-red" />
          <p className="mt-6 text-lg text-brand-black/70 max-w-xl">
            Representative work across our three core capabilities — design-build delivery,
            facility modernization, and facility assessment &amp; capital planning.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {capabilities.map((capability) => {
            const items = projects.filter((p) => p.category === capability.id);
            return (
              <div key={capability.id} id={capability.id} className="scroll-mt-28">
                <div className="flex items-center gap-6 mb-12">
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-black/40 whitespace-nowrap">
                    {capability.title}
                  </h2>
                  <div className="flex-1 h-px bg-black/10" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {items.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
