"use client"
import 'app/globals.css'
import Link from "next/link.js"
import Image from "next/image.js"
import EyeIcon from "@/public/icons/eye-solid.svg"
import GithubIcon from "@/public/icons/github.svg"
import { RoughNotation } from "react-rough-notation";
import data from '@/data.json' assert { type: 'JSON' };

export default function DetailsProject({ id }: { id: number }) {

  const { projects } = data

  const project = projects[id - 1]

  return (
    <article className='flex flex-col w-full'>
      <div className="flex flex-col items-center">
        <div className='relative w-full h-[600px] px-4 py-10 flex flex-col items-center justify-center'>
          <RoughNotation type="box" show={true} color="#f5cb5c" strokeWidth={2} iterations={3}>
            <h2 className="p-2 text-4xl font-bold text-[#f5cb5c] text-center">{project && project.name}</h2>
          </RoughNotation>
          <p className="text-[#cfdbd5] max-w-[140ch] font-medium text-lg my-6">{project && project.description}</p>
          <div className="w-full h-40 flex items-center justify-center gap-20">
            {project && project.demo !== null ?
              <Link href={project.demo} target='_blank' className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105">
                <Image src={EyeIcon} width={20} height={20} className="invert" alt="icon" />
              </Link> : null}
            {project && (project.repository !== null && project.repository !== undefined) ?
              <Link href={project.repository} target='_blank' className="ring-2 ring-[#242423]/[33] bg-neutral-900 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:ring-[#f5cb5c]/[50] hover:scale-105">
                <Image src={GithubIcon} width={20} height={20} className="invert" alt="icon" />
              </Link> : null}
          </div>
          <div className="custom-shape-divider-bottom-1682177013">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-center md:gap-20 px-4 py-20 bg-[#f5cb5c] w-full">
          <div className="flex flex-col items-center mb-14">
            <RoughNotation type="circle" show={true} color="#171717" strokeWidth={2} iterations={3}>
              <h3 className="text-2xl font-semibold p-2">Tecnologías</h3>
            </RoughNotation>
            <div className="w-72 mt-10 grid grid-cols-2 gap-4 text-lg text-neutral-700 font-medium tracking-tight">
              {project && project.technologies.map((el, idx) => {
                return (
                  <p key={idx}>{el}</p>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <RoughNotation type="circle" show={true} color="#171717" strokeWidth={2} iterations={3}>
              <h3 className="text-2xl font-semibold p-2">Recursos</h3>
            </RoughNotation>
            <div className="w-72 mt-10 grid grid-cols-2 gap-4 text-lg text-neutral-700 font-medium tracking-tight">
              {project && project.resources.map((el, idx) => {
                return (
                  <p key={idx}>{el}</p>
                )
              })}
            </div>
          </div>
        </div>

        <div className="relative w-full px-4 pt-36 pb-10">
          <h2 className="text-2xl font-bold text-[#f5cb5c] text-center mb-10">Contribuidores</h2>
          <div className='grid grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center max-w-[1240px] mx-auto'>
            {project && project.contributors.map((el, idx) => {
              return (
                <div key={idx} className="w-48 md:w-72 ring-2 ring-[#242423]/[33] shadow-lg p-4 rounded transition-all hover:ring-[#f5cb5c]/[50]">
                  <h3 className="text-[#f5cb5c] text-lg">{el.username}</h3>
                  <hr className="my-4 h-1 bg-[#cfdbd5]" />
                  <Link href={el.profile} target='_blank' className="text-[#cfdbd5] font-medium transition-all hover:underline">Ir al Perfil</Link>
                </div>
              )
            })}
          </div>
          <div className="custom-shape-divider-top-1677534207">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div>
        </div>
      </div>

    </article>
  )
}
