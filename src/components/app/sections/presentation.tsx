import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const Presentation = () => {
  return (
    <section className="flex flex-col items-center gap-8 p-4 py-10 bg-background">
      <div className="my-4 flex h-72 w-72 items-center justify-center bg-gray-900">
        <div className="relative h-80 w-11/12">
          <Image
            className="-translate-y-8 bg-background p-2"
            src="/images/pp.jpg"
            alt="photo-de-profil"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>
      <h1 className="text-center text-2xl font-bold">
        Hello, je m&quot;appelle Zhiwen 👋
      </h1>
      <p className="text-center font-medium">
        En tant que développeur full-stack, je maîtrise l&quot;ensemble du
        processus de développement des applications web, que ce soit en
        front-end et/ou en back-end, avec pour objectif de vous assister dans la
        réalisation de vos projets.
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
