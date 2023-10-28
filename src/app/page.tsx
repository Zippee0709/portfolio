import React from "react"

import { AboutMe } from "@/components/app/sections/about-me"
import { FAQ } from "@/components/app/sections/faq"
import { Presentation } from "@/components/app/sections/presentation"
import { Projects } from "@/components/app/sections/projects"

export default function Home() {
  return (
    <main className="mx-auto flex max-w-screen-lg flex-col items-center justify-center">
      <Presentation />
      <AboutMe />
      <Projects />
      <FAQ />
    </main>
  )
}
