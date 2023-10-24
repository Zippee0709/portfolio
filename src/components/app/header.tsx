"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { ThemeButton } from "@/components/app/theme-button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        buttonRef.current &&
        e.target instanceof Node &&
        !buttonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header>
      <nav className="flex flex-col bg-background gap-4 h-16 px-4 py-2.5 md:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-h-full justify-between items-center">
          <Link href="/" className="text-xl font-semibold">
            &lt;ZW /&gt;
          </Link>
          <Button
            ref={buttonRef}
            className="lg:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icons.Menu className="h-6 w-6" />
          </Button>
        </div>
        <ul
          className={cn(
            "absolute z-10 w-full bg-background left-0 top-16 flex flex-col gap-4 text-sm px-4 pb-4 transition-all ease-in duration-300 md:px-10 lg:flex-row lg:static lg:opacity-100 lg:pb-0 lg:w-auto lg:items-center lg:gap-6 lg:px-0",
            isMenuOpen ? "opacity-100 top-16" : "opacity-0 top-[-400px]"
          )}
        >
          <li className="w-full h-[1px] bg-gray-200 dark:bg-white lg:hidden" />
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              A propos
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              Experiences
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className={cn(
                buttonVariants({ variant: "link", className: "p-0" })
              )}
            >
              Contact
            </Link>
          </li>
          <li className="w-full h-[1px] bg-gray-200 dark:bg-white lg:w-[1px] lg:h-6" />
          <li className="flex justify-between items-center">
            <p className="text-sm text-primary font-medium lg:hidden">
              Changer le theme
            </p>
            <ThemeButton />
          </li>
          <li>
            <Button className="w-full lg:w-fit">Télécharger mon CV</Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
