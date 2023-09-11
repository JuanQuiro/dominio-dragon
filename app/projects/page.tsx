import Project from "@/components/Project";

import data from "@/data.json";

export const metadata = {
  title: "Portfolio - Proyectos",
};

export default function page() {
  const { projects } = data;

  return (
    <section className="relative grid grid-cols-1 pb-11 gap-9 lg:grid-cols-2 xl:grid-cols-3 justify-items-center ">
      {projects.map((project, idx) => {
        return <Project key={idx} idx={idx} project={project} />;
      })}
    </section>
  );
}
