import React from "react"

import { ProjectCard } from "@/components/app/cards/project-card"

const Projects = () => {
  return (
    <section className="flex w-full flex-col items-center gap-16 p-4 py-16 sm:gap-32">
      <h2 className="max-w-lg text-center text-4xl font-semibold sm:text-5xl">
        Une petite sélection de mon travail.
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2">
        <ProjectCard
          className="bg-gradient-to-b from-blue-900 to-indigo-900"
          path="/images/projects/maneo.jpg"
          alt="Maneo Website"
        />
        <ProjectCard
          className="bg-gradient-to-b from-emerald-500 to-emerald-900"
          path="/images/projects/livert.jpg"
          alt="Maneo Website"
        />
        <ProjectCard
          className="bg-gradient-to-b from-slate-500 to-slate-800"
          path="/images/projects/telys.jpg"
          alt="Maneo Website"
        />
        <ProjectCard
          className="bg-gradient-to-b from-slate-300 to-slate-500"
          path="/images/projects/hdrones.png"
          alt="Maneo Website"
        />
      </div>
    </section>
  )
}

export { Projects }
