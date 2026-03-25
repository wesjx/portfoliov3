"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Sparkles, Code, TrendingUp } from "lucide-react"

export function Hero() {
  const { t } = useLanguage()

  const stats = [
    { value: "50+", label: t.hero.stats.projects },
    { value: "5+", label: t.hero.stats.experience },
    { value: "40+", label: t.hero.stats.clients },
  ]

  const highlightIcons = [Shield, Zap, Sparkles, Code, TrendingUp]

  return (
    <section id="home" className="pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <Badge variant="neutral" className="text-xs sm:text-sm">
              {t.hero.badge}
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              {t.hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl text-pretty">
              {t.hero.subheadline}
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#projects">
                  {t.hero.cta1}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="neutral" size="lg" asChild>
                <a href="#contact">{t.hero.cta2}</a>
              </Button>
            </div>

            {/* Highlight Pills */}
            <div className="flex flex-wrap gap-2 pt-4">
              {t.hero.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index]
                return (
                  <div
                    key={highlight}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary-background border-2 border-border rounded-[5px] text-sm font-bold"
                  >
                    <Icon className="w-4 h-4" />
                    {highlight}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Stats & Visual Block */}
          <div className="relative">
            {/* Main Visual Block */}
            <div className="bg-chart-3 text-background p-6 sm:p-8 rounded-[5px] border-2 border-border shadow-[8px_8px_0px_0px_var(--main)]">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-main">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-background/80 mt-1 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-main rounded-[5px] border-2 border-border shadow-[4px_4px_0px_0px_var(--shadow)] hidden sm:block" />
            
            {/* Code snippet decoration */}
            <div className="absolute -bottom-4 right-8 bg-chart-1 border-2 border-border rounded-[5px] shadow-[3px_3px_0px_0px_var(--shadow)] p-3 hidden lg:block">
              <code className="text-xs font-mono text-foreground/80">
                {"{ quality: 'premium' }"}
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
