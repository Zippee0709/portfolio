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
    <header className="max-w-screen-lg mx-auto">
      <nav className="flex h-16 flex-col gap-4 bg-background px-4 py-2.5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex min-h-full items-center justify-between">
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
            "absolute left-0 top-16 z-10 flex w-full flex-col gap-4 bg-background px-4 pb-4 text-sm transition-all duration-300 ease-in md:px-10 lg:static lg:w-auto lg:flex-row lg:items-center lg:gap-6 lg:px-0 lg:pb-0 lg:opacity-100",
            isMenuOpen ? "top-16 opacity-100" : "top-[-400px] opacity-0"
          )}
        >
          <li className="h-[1px] w-full bg-gray-200 dark:bg-white lg:hidden" />
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
          <li className="h-[1px] w-full bg-gray-200 dark:bg-white lg:h-6 lg:w-[1px]" />
          <li className="flex items-center justify-between">
            <p className="text-sm font-medium text-primary lg:hidden">
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
