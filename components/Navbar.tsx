"use client"

import Link from "next/link"
import 'app/globals.css'
import Image from "next/image"
import { useState } from "react"
import BarsSolid from "@/public/icons/bars-solid.svg"
import XMark from "@/public/icons/xmark-solid.svg"
import logo from "@/public/logo.png"

const navigation = [
  {
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Conocimientos',
    route: '/skills'
  },
  {
    label: 'Proyectos',
    route: '/projects'
  }
]

export default function Navbar() {

  const [navbar, setNavbar] = useState(false)

  return (
    <header className="font-semibold text-[#fafafa] h-20 w-full md:relative" onClick={() => setNavbar(!navbar)}>

      <div className="md:hidden h-16 w-full fixed top-0 left-0 z-[2] bg-neutral-900">
        <button className="m-4 invert" onClick={() => setNavbar(!navbar)}>
          <Image src={BarsSolid} width={25} height={25} alt='bars_icon' />
        </button>
      </div>


      <div className={`fixed md:relative md:block bottom-0 md:bottom-auto w-full md:max-w-[768px] md:left-0 top-0 md:h-[inherit] bg-white/50 md:bg-transparent z-[3] transition-all opacity-0 md:opacity-100 ${navbar ? "left-[0] opacity-100" : "left-[-100%] opacity-0"}`}>
        <nav className="h-96 md:h-full bg-slate-100 md:bg-transparent m-2 p-4 flex items-end text-black md:text-white md:text-lg">
          <button className="absolute top-6 left-6 md:hidden" onClick={() => setNavbar(!navbar)}>
            <Image src={XMark} width={25} height={25} alt='bars_icon' />
          </button>
          <div className="absolute top-6 right-6 md:hidden">
            <figure className="flex items-center gap-2">
              <Image src={logo} alt="logo" width={40} height={40} />
              <figcaption>
                <p className="text-2xl font-medium">A|D</p>
              </figcaption>
            </figure>
          </div>
          <ul className="h-2/3 w-2/3 flex flex-col md:flex-row justify-around">
            {navigation.map(({ label, route }) => (
              <li key={route} className="md:transition-all md:hover:text-[#f5cb5c] md:hover:underline">
                <Link href={route} onClick={() => setNavbar(!navbar)}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

    </header>
  )
}
