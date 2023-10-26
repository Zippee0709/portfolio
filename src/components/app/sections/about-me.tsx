import React from "react"
import Image from "next/image"

import { Card } from "@/components/app/cards/card"

const AboutMe = () => {
  return (
    <section className="relative flex flex-col gap-8 items-center p-4 w-full h-full">
      <div className="z-[-1] absolute w-full h-full left-0 flex justify-center items-center mx-auto blur-[180px]">
        <div className="w-full h-full bg-gradient-colored"></div>
      </div>
      <p className="text-4xl font-medium">À propos de moi</p>
      <div className="grid grid-cols-1 grid-rows-1 gap-4">
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">
          <Card>
            <div className="flex gap-1 font-medium items-end">
              <p className="text-5xl">3</p>
              <p className="text-lg">ans</p>
            </div>
            <p className="text-sm text-gray-400">d'expériences</p>
          </Card>
          <Card>
            <div className="flex gap-1 font-medium items-start">
              <p className="text-5xl">5</p>
              <p className="text-lg">+</p>
            </div>
            <p className="text-sm text-gray-400">clients statisfaits</p>
          </Card>
          <Card>
            <div className="flex gap-1 font-medium items-start">
              <p className="text-5xl">10</p>
              <p className="text-lg">+</p>
            </div>
            <p className="text-sm text-gray-400">projets participés</p>
          </Card>
          <Card>
            <div className="flex gap-1 font-medium items-end">
              <p className="text-5xl">100</p>
              <p className="text-lg">%</p>
            </div>
            <p className="text-sm text-gray-400">passion</p>
          </Card>
        </div>
        <Card className="items-start gap-2 p-6">
          <p className="text-2xl">Coder avec passion.</p>
          <p className="text-sm text-gray-400">
            Passionné par le code depuis mon admission en école d'ingénieurs, je
            ne cesse de me perfectionner à travers de divers projets.
            <br />
            <br />
            Spécialisé dans le développement web, je préfère travailler avec
            JavaScript, même si je peux m'adapter à d'autres langages.
          </p>
        </Card>
        <Card className="items-start gap-2 pt-6 pl-6">
          <p className="text-2xl pr-6">Un code propre et efficace.</p>
          <p className="text-sm text-gray-400 pr-6">
            Une attention particulière est portée sur la qualité et la
            lisibilité du code.
          </p>
          <div className="relative w-full h-36 bg-gradient-card rounded-tl-xl">
            <Image
              src="/images/code.png"
              alt="Screenshot showing HTML semntic code"
              fill
              style={{ objectFit: "cover", objectPosition: "left top" }}
            />
          </div>
        </Card>
        <Card className="items-start gap-2 pt-6 pl-6">
          <p className="text-2xl pr-6">Développement responsive.</p>
          <p className="text-sm text-gray-400 pr-6">
            Avec une approche "mobile-first", un standard de nos jours.
          </p>
          <div className="relative w-full h-60 rounded-xl">
            <Image
              src="/images/responsive.webp"
              alt="Screenshot showing the responsiveness of an website"
              fill
              style={{ objectFit: "cover", objectPosition: "left top" }}
            />
          </div>
        </Card>
      </div>
    </section>
  )
}

export { AboutMe }
