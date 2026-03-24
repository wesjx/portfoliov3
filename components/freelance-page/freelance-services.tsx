"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Globe, Link2, Server, BarChart3, ArrowRight } from "lucide-react"

export function Services() {
  const { t } = useLanguage()

  const serviceIcons = [Globe, Link2, Server, BarChart3]
  const serviceColors = ["bg-main", "bg-accent-pink", "bg-accent-blue", "bg-accent-green"]

  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="default" className="mb-4">{t.services.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {t.services.headline}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            const bgColor = serviceColors[index]
            return (
              <Card
                key={service.title}
                className="group hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--shadow)] transition-all duration-150"
              >
                <CardHeader className="pb-4">
                  <div className={`w-14 h-14 ${bgColor} rounded-[5px] border-2 border-border flex items-center justify-center mb-4 shadow-[3px_3px_0px_0px_var(--shadow)]`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="pt-4 border-t-2 border-border">
                  <div className="flex items-center gap-2 text-sm font-bold text-main">
                    <ArrowRight className="w-4 h-4" />
                    {service.value}
                  </div>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
