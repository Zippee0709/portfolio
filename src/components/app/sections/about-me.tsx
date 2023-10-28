import React from "react"
import Image from "next/image"

import { Card } from "@/components/app/cards/card"

const AboutMe = () => {
  return (
    <section className="relative flex h-full w-full flex-col items-center gap-16 p-4 py-16 sm:gap-32">
      <div className="absolute left-0 z-[-1] mx-auto mt-auto flex h-full w-full items-center justify-center blur-[180px]">
        <div className="bg-gradient-colored h-full w-full"></div>
      </div>
      <h2 className="max-w-lg text-center text-4xl font-semibold sm:text-5xl">
        À propos de mon histoire.
      </h2>
      <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:grid-cols-2">
        <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-4">
          <Card>
            <div className="flex items-end gap-1 font-medium">
              <p className="text-5xl">3</p>
              <p className="text-lg">ans</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              d&apos;expériences
            </p>
          </Card>
          <Card>
            <div className="flex items-start gap-1 font-medium">
              <p className="text-5xl">5</p>
              <p className="text-lg">+</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              clients statisfaits
            </p>
          </Card>
          <Card>
            <div className="flex items-start gap-1 font-medium">
              <p className="text-5xl">6</p>
              <p className="text-lg">+</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              projets participés
            </p>
          </Card>
          <Card>
            <div className="flex items-end gap-1 font-medium">
              <p className="text-5xl">100</p>
              <p className="text-lg">%</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">passion</p>
          </Card>
        </div>
        <Card className="items-start gap-2 p-6 sm:p-14">
          <p className="text-2xl font-semibold sm:text-3xl">
            Coder avec passion.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Passionné par le code depuis mon admission en école
            d&apos;ingénieurs, je ne cesse de me perfectionner à travers de
            divers projets.
            <br />
            <br />
            Spécialisé dans le développement web depuis 3 ans, j&apos;utilise
            principalement JavaScript, en tant que développeur Full-Stack, je
            suis capable d&apos;apporter ma contribution tout au long du cycle
            de développement, jusqu&apos;à la phase de production.
          </p>
        </Card>
        {/* <Card className="items-start gap-4 pl-6 pt-6 sm:justify-between">
          <p className="pr-6 text-2xl font-semibold sm:text-3xl">
            Un code propre et efficace.
          </p>
          <p className="pr-6 text-sm text-gray-600 dark:text-gray-400">
            Une attention particulière est portée sur la qualité et la
            lisibilité du code.
          </p>
          <div className="relative h-36 w-full rounded-br-xl rounded-tl-xl bg-gradient-to-b from-slate-900 to-slate-900 sm:h-56">
            <Image
              src="/images/code.png"
              alt="Screenshot showing HTML semntic code"
              fill
              style={{ objectFit: "cover", objectPosition: "left top" }}
            />
          </div>
        </Card> */}
        {/* <Card className="items-start gap-4 pl-6 pt-6 sm:justify-between">
          <p className="pr-6 text-2xl font-semibold sm:text-3xl">
            Développement responsive.
          </p>
          <p className="pr-6 text-sm text-gray-600 dark:text-gray-400">
            Avec une approche &apos;mobile-first&apos;, un standard de nos
            jours.
          </p>
          <div className="relative h-60 w-full rounded-br-xl rounded-tl-xl">
            <Image
              className="rounded-br-xl"
              src="/images/responsive.webp"
              alt="Screenshot showing the responsiveness of an website"
              fill
              style={{ objectFit: "cover", objectPosition: "left top" }}
            />
          </div>
        </Card> */}
      </div>
    </section>
  )
}

export { AboutMe }
