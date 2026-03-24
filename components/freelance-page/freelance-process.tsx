"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Search, Palette, Code, Rocket } from "lucide-react"

export function Process() {
  const { t } = useLanguage()

  const stepIcons = [Search, Palette, Code, Rocket]
  const stepColors = ["bg-main", "bg-accent-pink", "bg-accent-blue", "bg-accent-green"]

  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="default" className="mb-4">{t.process.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {t.process.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step, index) => {
            const Icon = stepIcons[index]
            const bgColor = stepColors[index]
            return (
              <div
                key={step.number}
                className="relative p-6 bg-secondary-background border-2 border-border rounded-[5px] shadow-[4px_4px_0px_0px_var(--shadow)]"
              >
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-foreground text-background rounded-[5px] border-2 border-border flex items-center justify-center font-bold text-sm shadow-[2px_2px_0px_0px_var(--main)]">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 ${bgColor} rounded-[5px] border-2 border-border flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_var(--shadow)]`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>

                {/* Connection line (hidden on last item and mobile) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
