import Project from "@/components/Project"

import data from '@/data.json' assert { type: 'JSON' };

export const metadata = {
  title: 'Portfolio - Proyectos'
}

export default function page() {

  const { projects } = data

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-items-center w-full">
      {projects.map((project, idx) => {
        return (
          <Project key={idx} project={project} />
        )
      })}
    </section>
  )
}
