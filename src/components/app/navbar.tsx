"use client"

import React, { useRef } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { OutsideClick } from "@/hooks/outside-click"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { ThemeButton } from "@/components/app/theme-button"

interface NavbarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null)
  OutsideClick(sidebarRef, setIsMenuOpen)

  return (
    <nav
      className={cn(
        "fixed right-0 top-0 min-h-screen w-full bg-gray-900/80 duration-300 ease-in-out lg:opacity-100 lg:bg-transparent lg:static lg:z-10 lg:flex lg:min-h-0 lg:w-auto",
        isMenuOpen
          ? "opacity-1 pointer-events-auto z-10"
          : "pointer-events-none -z-10 opacity-0"
      )}
      onClick={() => console.log("CLICK ON NAV")}
    >
      <aside
        ref={sidebarRef}
        className={cn(
          "flex flex-col absolute right-0 top-0 min-h-screen w-full bg-background duration-300 ease-in-out max-w-md lg:translate-x-0 lg:static lg:max-w-full lg:min-h-0",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center w-full h-20 p-4 lg:hidden">
          <b className="text-xl">&lt;ZW /&gt;</b>
          <Button
            className="lg:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(false)}
          >
            <Icons.X className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 px-4 lg:flex-row lg:p-0 lg:items-center">
          <div className="flex flex-col gap-4 py-4 border-slate-200 dark:border-white border-y text-sm lg:border-0 lg:flex-row">
            <Link href="/" className="w-fit">
              Accueil
            </Link>
            <Link href="/" className="w-fit">
              A propos
            </Link>
            <Link href="/" className="w-fit">
              Experiences
            </Link>
            <Link href="/" className="w-fit">
              Contact
            </Link>
          </div>
          <p className="hidden lg:block">|</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:top-0 lg:right-0 lg:items-center">
            <div className="flex justify-between items-center">
              <p className="text-sm lg:hidden">Changer le theme</p>
              <ThemeButton />
            </div>
            <Button onClick={() => console.log("okok")}>
              Télécharger mon CV
            </Button>
          </div>
        </div>
      </aside>
    </nav>
  )
}

export { Navbar }
