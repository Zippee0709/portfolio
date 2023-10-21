import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="flex justify-between w-full h-20 p-4 sm:px-10">
      <b>&lt;ZW /&gt;</b>
      <nav className="flex gap-8">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          A propos
        </Link>
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          Experiences
        </Link>
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          About
        </Link>
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          Contact
        </Link>
        <Button>Télécharger mon CV</Button>
      </nav>
    </header>
  )
}

export { Header }
