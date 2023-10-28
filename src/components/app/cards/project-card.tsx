"use client"

import React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface ProjectCardProps {
  className: string
  path: string
  alt: string
}

const ProjectCard = ({ className, path, alt }: ProjectCardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={cn(
          "flex h-60 w-full items-end justify-center rounded-xl",
          className
        )}
      >
        <div className="relative h-[90%] w-[90%] transition-all duration-300 ease-in hover:h-full hover:w-full">
          <Image
            className="rounded-t-xl transition-all duration-300 ease-in hover:rounded-xl"
            src={path}
            alt={alt}
            fill
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export { ProjectCard }
