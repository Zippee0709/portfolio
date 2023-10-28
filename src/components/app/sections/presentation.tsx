import React from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const Presentation = () => {
  return (
    <section className="mt-20 flex w-full flex-col justify-center gap-8 p-4 py-16 sm:gap-16 sm:pt-32">
      <div className="flex w-full flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="my-4 flex h-72 w-72 items-center justify-center bg-gray-900 sm:order-1">
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
        <div className="flex max-w-lg flex-col items-center gap-8 sm:items-start">
          <h1 className="max-w-[240px] text-center text-4xl font-extrabold sm:max-w-none sm:text-left sm:text-6xl">
            Développeur Full-Stack 👋
          </h1>
          <p className="text-center font-medium sm:text-left">
            Je m&apos;appelle Zhiwen Wang, un développeur passionné par le
            développement web basé à Paris, en France. 📍
          </p>
          <div className="flex gap-2">
            <Icons.CircleDot className="h-6 w-6" color="green" />
            <p className="text-medium">Disponible</p>
          </div>
          <div className="flex gap-2">
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Icons.Github />
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Icons.Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 sm:flex-row">
        <b className="border-b-2 pb-1 text-xl dark:border-white sm:border-b-0 sm:border-r-2 sm:pb-0 sm:pr-12">
          Tech Stack
        </b>
        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4">
          <div className="flex gap-4">
            <Icons.ReactJS />
            <Icons.NextJS />
          </div>
          <div className="flex gap-4">
            <Icons.NodeJS />
            <Icons.NestJS />
          </div>
          <div className="flex gap-4">
            <Icons.TailwindCSS />
            <Icons.Sass />
          </div>
          <div className="flex gap-4">
            <Icons.JavaScript />
            <Icons.TypeScript />
          </div>
        </div>
      </div>
    </section>
  )
}

export { Presentation }
