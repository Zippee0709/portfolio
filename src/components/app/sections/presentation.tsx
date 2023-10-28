import React from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const Presentation = () => {
  return (
    <section className="flex flex-col justify-center gap-8 p-4 py-16 w-full sm:gap-16 sm:mt-16">
      <div className="flex flex-col justify-between items-center gap-8 w-full sm:flex-row">
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
        <div className="flex flex-col items-center gap-8 max-w-lg sm:items-start">
          <h1 className="text-4xl font-extrabold text-center max-w-[240px] sm:max-w-none">
            Développeur Full-Stack 👋
          </h1>
          <p className="text-center font-medium sm:text-left">
            Je m'appelle Zhiwen Wang, un développeur passionné par le
            développement web basé à Paris, en France. 📍
          </p>
          <div className="flex gap-2">
            <Icons.CircleDot className="h-6 w-6" color="green" />
            <p className="text-medium">Disponible</p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Icons.Github />
            </Link>
            <Link
              href="/"
              className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
            >
              <Icons.Linkedin />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-12 sm:flex-row">
        <b className="text-xl border-b-2 dark:border-white pb-1 sm:border-b-0 sm:border-r-2 sm:pb-0 sm:pr-12">
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
