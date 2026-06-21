import { capabilities, projects, type Project } from "@/lib/data";

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
          <div className="mt-4 h-px w-16 bg-[#9B1C1C]" />
          <p className="mt-6 text-lg text-[#0A0A0A]/70 max-w-xl">
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
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-[#0A0A0A]/40 whitespace-nowrap">
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group">
      {/* Image / placeholder with hover overlay */}
      <div className="relative aspect-video bg-navy/5 border border-black/10 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-navy/20 text-xs uppercase tracking-widest">
          Project Photo
        </div>
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/80 transition-colors duration-300 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100">
          <p className="text-white font-bold text-base">{project.title}</p>
          <p className="text-white/80 text-sm mt-1">{project.location}</p>
          <p className="text-white/60 text-xs mt-1">{project.client}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-navy text-base">{project.title}</h3>
        <p className="text-sm text-[#0A0A0A]/50 mt-1">
          {project.client} · {project.location} · {project.year}
        </p>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9B1C1C] mt-2">
          {project.contractType}
        </p>
        <p className="text-sm text-[#0A0A0A]/70 mt-3 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
