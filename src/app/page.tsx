import React from "react"

import { AboutMe } from "@/components/app/sections/about-me"
import { Presentation } from "@/components/app/sections/presentation"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10">
      <Presentation />
      <AboutMe />
    </main>
  )
}
