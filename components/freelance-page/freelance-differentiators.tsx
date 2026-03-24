"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Palette, Zap, Shield, Cpu, TrendingUp, Eye } from "lucide-react"

export function Differentiators() {
  const { t } = useLanguage()

  const icons = [Palette, Zap, Shield, Cpu, TrendingUp, Eye]
  const colors = [
    "bg-main",
    "bg-accent-yellow",
    "bg-accent-blue",
    "bg-accent-green",
    "bg-accent-pink",
    "bg-foreground text-background",
  ]

  return (
    <section className="py-16 sm:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="neutral" className="mb-4 bg-main text-main-foreground border-main">
            {t.differentiators.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance text-background">
            {t.differentiators.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.differentiators.items.map((item, index) => {
            const Icon = icons[index]
            const bgColor = colors[index]
            return (
              <div
                key={item.title}
                className="p-6 bg-secondary-background border-2 border-border rounded-[5px] shadow-[4px_4px_0px_0px_var(--main)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--main)] transition-all duration-150"
              >
                <div className={`w-12 h-12 ${bgColor} rounded-[5px] border-2 border-border flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_var(--shadow)]`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
