import React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className="bg-gradient-card min-h-[160px] rounded-xl p-px">
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-1 rounded-xl bg-card",
        className
      )}
      {...props}
    />
  </div>
))
Card.displayName = "Card"

export { Card }
