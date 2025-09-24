import Footer from "@/components/footer";
import Header from "@/components/header";
import LoadingIndicator from "@/components/loading-spiner";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projectsData } from "@/data/projects-data";
import Image from "next/image";
import Link from "next/link";

export default function ProjectMain() {
    const projects = projectsData

    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto px-4 py-4 md:py-12">
                <Breadcrumb >
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbPage>Projects</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="mx-1 mb-6">
                    <h2 className="text-6xl py-6 font-semibold font-mono">Projects</h2>
                    <p className="text-lg py-6 font-mono italic">{'Every project I create is a step, whether small or big, toward becoming a good developer who solves problems in the best way, always listening to and learning from feedback, and carrying all the valuable knowledge with me along this journey.&apos; -Wesley Silva'}</p>
                </div>
                <div className="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        projects.map((project) => {
                            return (
                                <Card className="flex flex-col justify-between gap-4" key={project.id}>
                                    <CardHeader>
                                        <Button className="m-auto h-auto w-full md:w-auto p-0">
                                            <Image className="h-full w-full" src={project.images.image1.link} height={100} width={320} alt="" />
                                        </Button>
                                        <h2 className="pt-4 text-2xl font-mono">{project.title}</h2>
                                        <p className="font-mono italic">{project.subtitle}</p>
                                        <div className="flex flex-row gap-2 flex-wrap my-2">
                                            {project.texts.technologies_badge.map((tech) => {
                                                return (
                                                    <Badge key={project.id} color="#ca8343">{tech}</Badge>
                                                )
                                            })}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="line-clamp-4">{project.texts.introduction}</p>
                                        <Link href={`/projects/${project.id}`}>
                                            <Button variant="orange" className="cursor-pointer mt-4 w-full">
                                                View details <LoadingIndicator/>
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </main >
            <Footer />
        </>
    )
}