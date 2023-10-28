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
          "flex justify-center items-end w-full h-60 rounded-xl",
          className
        )}
      >
        <div className="relative w-[90%] h-[90%] hover:w-full hover:h-full transition-all duration-300 ease-in">
          <Image
            className="rounded-t-xl hover:rounded-xl transition-all duration-300 ease-in"
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
