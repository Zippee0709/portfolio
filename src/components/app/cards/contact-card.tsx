import React from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"

const ContactCard = () => {
  return (
    <div className="group relative flex h-80 w-full items-center justify-center">
      <Image
        className="rounded-xl brightness-75 transition-all duration-300 ease-in group-hover:brightness-100"
        src="/images/desert.webp"
        alt="Desert Night Wallpaper"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className="absolute flex flex-col items-center justify-center gap-4 group-hover:brightness-100">
        <p className="text-center text-2xl font-semibold text-white">
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
