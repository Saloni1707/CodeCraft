"use client"
import {cn} from "../../lib/utils"

export function GridBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 pattern-grid",
        className,
      )}
    />
  )
}
