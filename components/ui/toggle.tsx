"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ToggleGroupProps {
  value: string
  onValueChange: (value: string) => void
  options: { value: string; label: string }[]
  className?: string
}

function ToggleGroup({ value, onValueChange, options, className }: ToggleGroupProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-[5px] border-2 border-border bg-secondary-background shadow-[2px_2px_0px_0px_var(--shadow)] overflow-hidden",
        className
      )}
    >
      {options.map((option, index) => (
        <button
          key={option.value}
          onClick={() => onValueChange(option.value)}
          className={cn(
            "px-3 py-1.5 text-sm font-bold transition-colors",
            value === option.value
              ? "bg-foreground text-background"
              : "bg-transparent text-foreground hover:bg-muted",
            index > 0 && "border-l-2 border-border"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export { ToggleGroup }
