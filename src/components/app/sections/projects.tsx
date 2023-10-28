import React from "react"

import { ProjectCard } from "@/components/app/cards/project-card"

const Projects = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-4 py-10 w-full bg-background">
      <p className="text-3xl font-medium">Projets</p>
      <div className="flex flex-col w-full gap-4">
        <ProjectCard
          className="bg-gradient-to-b from-blue-900 to-indigo-900"
          path="/images/projects/maneo.png"
          alt="Maneo Website"
        />
        <ProjectCard
          className="bg-gradient-to-b from-emerald-500 to-emerald-900"
          path="/images/projects/livert.png"
          alt="Maneo Website"
        />
        <ProjectCard
          className="bg-gradient-to-b from-slate-900 to-slate-700"
          path="/images/projects/telys.png"
          alt="Maneo Website"
        />
      </div>
    </section>
  )
}

export { Projects }
