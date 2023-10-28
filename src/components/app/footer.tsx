import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"

const Footer = () => {
  return (
    <footer className="mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-8 border-t py-8 sm:flex-row">
      <p className="text-sm font-medium">
        © 2023 | Coded with ❤️️ by Zhiwen Wang.
      </p>
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
    </footer>
  )
}

export { Footer }
