import { projectsData } from "@/data/projects-data";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import ImageCard from "./ui/image-card";
import Link from "next/link";
import LoadingIndicator from "./loading-spiner";

export default function ProjectsCard() {
    const projects = projectsData

    return (
        <Card className="w-full flex-col items-center gap-4 flex bg-chart-1">
            <h3 className="text-2xl font-mono font-semibold text-background">Projects</h3>
            <Carousel className="w-full max-w-[320px]">
                <CarouselContent>
                    {projects.map((project) => {
                        return (
                            <CarouselItem key={project.id} className="flex items-center justify-center">
                                <div className="p-2 flex flex-col gap-3 items-center justify-center">
                                    <ImageCard
                                        className="h-auto w-auto"
                                        caption={project.title}
                                        imageUrl={project.images.image1.link}
                                    ></ImageCard>
                                    <div className="flex gap-3">
                                        <Link href={`/projects/${project.id}`}>
                                            <Button>
                                                View project <LoadingIndicator/>
                                            </Button>
                                        </Link>
                                        <Link href="/projects">
                                            <Button>
                                                View All <LoadingIndicator/>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        )
                    })}

                </CarouselContent>
                <CarouselPrevious className="absolute left-0.5 cursor-pointer" />
                <CarouselNext className="absolute right-0.5 cursor-pointer" />
            </Carousel>
        </Card>
    )
}