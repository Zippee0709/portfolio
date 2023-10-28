import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const ContactCard = () => {
  return (
    <div className="relative flex justify-center items-center w-full h-80 group">
      <Image
        className="rounded-xl brightness-75 group-hover:brightness-100 transition-all duration-300 ease-in"
        src="/images/desert.webp"
        alt="Desert Night Wallpaper"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute flex flex-col justify-center items-center gap-4 group-hover:brightness-100">
        <p className="text-white text-2xl text-center font-semibold">
          Intéresser pour travailler ensemble ?
        </p>
        <Button variant="link">
          <p className="text-white">Commencer à discuter -&gt;</p>
        </Button>
      </div>
    </div>
  )
}

export { ContactCard }
