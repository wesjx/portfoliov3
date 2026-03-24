"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, TrendingUp } from "lucide-react"

export function Projects() {
  const { t } = useLanguage()

  const projectColors = ["bg-main", "bg-accent-pink", "bg-accent-blue"]

  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Badge variant="default" className="mb-4">{t.projects.badge}</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
            {t.projects.headline}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, index) => {
            const bgColor = projectColors[index]
            return (
              <Card
                key={project.name}
                className="overflow-hidden group hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_var(--shadow)] transition-all duration-150"
              >
                {/* Project Preview */}
                <div className={`h-48 ${bgColor} border-b-2 border-border flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-foreground/5" />
                  <div className="bg-secondary-background border-2 border-border rounded-[5px] shadow-[3px_3px_0px_0px_var(--shadow)] p-4">
                    <div className="w-32 h-20 bg-background border-2 border-border rounded-[3px]" />
                  </div>
                  
                  {/* Category Badge */}
                  <Badge
                    variant="neutral"
                    className="absolute top-4 left-4"
                  >
                    {project.category}
                  </Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 pt-0">
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-muted border border-border rounded-[3px] text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="flex items-center gap-2 text-sm font-bold text-accent-green">
                    <TrendingUp className="w-4 h-4" />
                    {project.result}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-4 border-t-2 border-border">
                  <Button variant="neutral" size="sm" className="w-full">
                    {t.projects.viewProject}
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
