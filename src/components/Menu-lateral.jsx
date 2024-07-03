/**
 * v0 by Vercel.
 * @see https://v0.dev/t/095fgyQr8E0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Toggle } from "@/components/ui/toggle"

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [activePage, setActivePage] = useState("about")
  const [language, setLanguage] = useState("en")
  return (
    <div className={`flex h-screen w-full ${isDarkMode ? "dark" : ""}`}>
      <div
        className={`bg-gray-100 dark:bg-gray-900 p-4 md:p-6 md:w-64 md:shrink-0 md:border-r md:border-gray-200 dark:md:border-gray-700 flex flex-col gap-6 transition-all duration-300 ${
          isSidebarCollapsed ? "md:w-20" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 md:h-12 md:w-12">
              <AvatarImage src="./linkedink.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            {!isSidebarCollapsed && (
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Alberto Quiroz</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden inline-flex"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          >
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800 ${
              activePage === "about" ? "bg-gray-200 dark:bg-gray-800" : ""
            }`}
            onClick={() => setActivePage("about")}
            prefetch={false}
          >
            <UserIcon className="h-5 w-5" />
            {!isSidebarCollapsed && <span>{language === "en" ? "About" : "Sobre"}</span>}
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800 ${
              activePage === "experience" ? "bg-gray-200 dark:bg-gray-800" : ""
            }`}
            onClick={() => setActivePage("experience")}
            prefetch={false}
          >
            <BriefcaseIcon className="h-5 w-5" />
            {!isSidebarCollapsed && <span>{language === "en" ? "Experience" : "Experiencia"}</span>}
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800 ${
              activePage === "education" ? "bg-gray-200 dark:bg-gray-800" : ""
            }`}
            onClick={() => setActivePage("education")}
            prefetch={false}
          >
            <BookIcon className="h-5 w-5" />
            {!isSidebarCollapsed && <span>{language === "en" ? "Education" : "Educaci\u00F3n"}</span>}
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800 ${
              activePage === "skills" ? "bg-gray-200 dark:bg-gray-800" : ""
            }`}
            onClick={() => setActivePage("skills")}
            prefetch={false}
          >
            <CpuIcon className="h-5 w-5" />
            {!isSidebarCollapsed && <span>{language === "en" ? "Skills" : "Habilidades"}</span>}
          </Link>
          <Link
            href="#"
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-gray-900 hover:bg-gray-200 dark:text-gray-50 dark:hover:bg-gray-800 ${
              activePage === "contact" ? "bg-gray-200 dark:bg-gray-800" : ""
            }`}
            onClick={() => setActivePage("contact")}
            prefetch={false}
          >
            <MailIcon className="h-5 w-5" />
            {!isSidebarCollapsed && <span>{language === "en" ? "Contact" : "Contacto"}</span>}
          </Link>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <Select value={language} onValueChange={(value) => setLanguage(value)}>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder={language === "en" ? "English" : "Espa\u00F1ol"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
            </SelectContent>
          </Select>
          <Toggle aria-label="Toggle dark mode" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Toggle>
        </div>
      </div>
      <main className="flex-1 p-6">
        {activePage === "about" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{language === "en" ? "About" : "Sobre"}</h1>
            <p>
              {language === "en"
                ? "This is the about page content. You can add your information here."
                : "Este es el contenido de la p\u00E1gina sobre. Puedes agregar tu informaci\u00F3n aqu\u00ED."}
            </p>
          </div>
        )}
        {activePage === "experience" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{language === "en" ? "Experience" : "Experiencia"}</h1>
            <p>
              {language === "en"
                ? "This is the experience page content. You can add your work history here."
                : "Este es el contenido de la p\u00E1gina de experiencia. Puedes agregar tu historial laboral aqu\u00ED."}
            </p>
          </div>
        )}
        {activePage === "education" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{language === "en" ? "Education" : "Educaci\u00F3n"}</h1>
            <p>
              {language === "en"
                ? "This is the education page content. You can add your educational background here."
                : "Este es el contenido de la p\u00E1gina de educaci\u00F3n. Puedes agregar tu formaci\u00F3n acad\u00E9mica aqu\u00ED."}
            </p>
          </div>
        )}
        {activePage === "skills" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{language === "en" ? "Skills" : "Habilidades"}</h1>
            <p>
              {language === "en"
                ? "This is the skills page content. You can add your technical skills here."
                : "Este es el contenido de la p\u00E1gina de habilidades. Puedes agregar tus habilidades t\u00E9cnicas aqu\u00ED."}
            </p>
          </div>
        )}
        {activePage === "contact" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{language === "en" ? "Contact" : "Contacto"}</h1>
            <p>
              {language === "en"
                ? "This is the contact page content. You can add your contact information here."
                : "Este es el contenido de la p\u00E1gina de contacto. Puedes agregar tu informaci\u00F3n de contacto aqu\u00ED."}
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}