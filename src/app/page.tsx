import React from "react"

import { AboutMe } from "@/components/app/sections/about-me"
import { FAQ } from "@/components/app/sections/faq"
import { Presentation } from "@/components/app/sections/presentation"
import { Projects } from "@/components/app/sections/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center max-w-screen-lg mx-auto">
      <Presentation />
      <AboutMe />
      <Projects />
      <FAQ />
    </main>
  )
}
