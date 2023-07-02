import Link from "next/link"
import Image from "next/image"

export default function Project({ project }: { project: any }) {

  return (
    <article className="ring-2 ring-[#242423]/[33] bg-neutral-900 shadow-lg w-[75%] m-4 rounded relative transition-all hover:ring-[#f5cb5c]/[50]">
      <>
        {project.img && <Image className="rounded-t w-full" src={project.img} width={1920} height={1080} alt="project_image" />}
      </>
      <div className="p-4">
        <h3 className="font-bold my-3 text-xl text-[#f5cb5c]">{project.name}</h3>
        <p className="text-white mb-20">{project.short_description}</p>
        <Link href='/projects/[id]' as={`/projects/${project.id}`} className="grid place-content-center md:text-xl text-neutral-900 font-bold py-1 px-4 bg-[#f5cb5c] border-[#f5cb5c] shadow border-2 transition-all rounded hover:border-[#f5cb5c] hover:bg-transparent hover:text-[#f5cb5c]">Ver info</Link>
      </div>
    </article>
  )
}
