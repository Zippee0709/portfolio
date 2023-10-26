import React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className="rounded-xl bg-gradient-card min-h-[160px] p-px">
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-1 w-full h-full bg-card rounded-xl",
        className
      )}
      {...props}
    />
  </div>
))

export { Card }
