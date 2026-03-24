"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16 sm:py-24 bg-main">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative icon */}
          <div className="w-16 h-16 bg-foreground rounded-[5px] border-2 border-border shadow-[4px_4px_0px_0px_var(--secondary-background)] flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-8 h-8 text-main" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-main-foreground mb-6 text-balance">
            {t.cta.headline}
          </h2>

          <p className="text-lg sm:text-xl text-main-foreground/80 mb-10 max-w-2xl mx-auto text-pretty">
            {t.cta.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="reverse"
              size="lg"
              className="shadow-[4px_4px_0px_0px_var(--secondary-background)]"
              asChild
            >
              <a href="/contact">
                {t.cta.button1}
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center gap-4 mt-16">
          <div className="w-4 h-4 bg-foreground rounded-[3px] border border-border" />
          <div className="w-4 h-4 bg-secondary-background rounded-[3px] border border-border" />
          <div className="w-4 h-4 bg-foreground rounded-[3px] border border-border" />
          <div className="w-4 h-4 bg-secondary-background rounded-[3px] border border-border" />
          <div className="w-4 h-4 bg-foreground rounded-[3px] border border-border" />
        </div>
      </div>
    </section>
  )
}
