"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Layers, Timer } from "lucide-react"
import Image from "next/image"

export function About() {
  const { t } = useLanguage()

  const valueIcons = [Users, Layers, Timer]

  return (
    <section id="about" className="py-16 sm:py-24 bg-secondary-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 bg-chart-3 rounded-[5px] border-2 border-border shadow-[8px_8px_0px_0px_var(--shadow)] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-50 h-50 sm:w-50 sm:h-50 mx-auto bg-foreground rounded-[5px] border-2 border-border shadow-[4px_4px_0px_0px_var(--secondary-background)] flex items-center justify-center mb-6">
                  <span className="">
                    <Image src="/profile-picture.jpg" alt="Profile picture" width={250} height={250}></Image>
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="bg-secondary-background border-2 border-border rounded-[5px] px-4 py-2 shadow-[2px_2px_0px_0px_var(--shadow)]">
                    <span className="font-bold text-sm">Web Designer</span>
                  </div>
                  <div className="bg-secondary-background border-2 border-border rounded-[5px] px-4 py-2 shadow-[2px_2px_0px_0px_var(--shadow)]">
                    <span className="font-bold text-sm">Software Engineer</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent-green rounded-[5px] border-2 bg-main shadow-[3px_3px_0px_0px_var(--shadow)] hidden sm:block" />
          </div>

          {/* Right Content - Text */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <Badge variant="neutral">{t.about.badge}</Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-balance">
              {t.about.headline}
            </h2>

            <p className="text-lg text-muted-foreground text-pretty">
              {t.about.description}
            </p>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {t.about.values.map((value, index) => {
                const Icon = valueIcons[index]
                return (
                  <Card key={value.title} className="--main-foreground">
                    <CardContent className="p-4 sm:p-5">
                      <div className="w-10 h-10 bg-chart-1 rounded-[5px] border-2 border-border flex items-center justify-center mb-3 shadow-[2px_2px_0px_0px_var(--shadow)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-sm mb-1">{value.title}</h3>
                      <p className="text-xs text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
