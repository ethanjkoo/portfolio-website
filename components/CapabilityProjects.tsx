import { capabilities, projects, type CapabilityId } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function CapabilityProjects({ id }: { id: CapabilityId }) {
  const capability = capabilities.find((c) => c.id === id)!;
  const items = projects.filter((p) => p.category === id);

  return (
    <>
      {/* Page hero */}
      <section className="bg-white pt-32 pb-16 px-6 lg:px-8 border-b border-black/10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-navy">{capability.title}</h1>
          <div className="mt-4 h-px w-16 bg-brand-red" />
          <p className="mt-6 max-w-2xl text-base lg:text-lg text-brand-black/70 leading-8">
            {capability.tagline}
          </p>
        </div>
      </section>

      <section className="bg-white py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
