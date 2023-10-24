import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const Presentation = () => {
  return (
    <section className="flex flex-col gap-8 items-center p-4">
      <div className="flex justify-center items-center w-72 h-72 bg-gray-900 my-4">
        <div className="relative w-11/12 h-80">
          <Image
            className="bg-background p-2 -translate-y-8"
            src="/images/pp.jpg"
            alt="photo-de-profil"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center">
        Hello, je m'appelle Zhiwen 👋
      </h1>
      <p className="font-medium text-center">
        En tant que développeur full-stack, je maîtrise l'ensemble du processus
        de développement des applications web, que ce soit en front-end et/ou en
        back-end, avec pour objectif de vous assister dans la réalisation de vos
        projets.
      </p>
      <div className="flex gap-8">
        <div className="flex gap-2">
          <Icons.MapPin className="h-6 w-6" />
          <p className="text-medium">Île-de-France</p>
        </div>
        <div className="flex gap-2">
          <Icons.CircleDot className="h-6 w-6" color="green" />
          <p className="text-medium">Disponible</p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <Icons.ChevronsDown className="h-6 w-6" />
      </Button>
    </section>
  )
}

export { Presentation }
