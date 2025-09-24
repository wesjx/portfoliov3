import Footer from "@/components/footer"
import Header from "@/components/header"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { getProject } from "@/data/getProject"
import Link from "next/link"
import { SiGithub } from "react-icons/si"
import { GoLinkExternal } from "react-icons/go"
import ImageCard from "@/components/ui/image-card"
import { Badge } from "@/components/ui/badge"
import { FaArrowLeft } from "react-icons/fa6"

export default async function ProjectDetails({
    params
}: {
    params: Promise<{ id: string }>
}) {
    const project = await params

    const projectValueArray = await getProject(project.id)
    const projectValue = projectValueArray[0]

    return (
        <>
            <Header />
            <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                <Breadcrumb>
                    <BreadcrumbList className="pb-6">
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage >
                                {projectValue.title}
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                    <Link href="/projects" className="absolute mt-1 mx-2">
                        <Button asChild variant="orange">
                            <FaArrowLeft size={50}/>
                        </Button>
                    </Link>
                <section className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
                        {projectValue.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto font-mono">
                        {projectValue.subtitle}
                    </p>
                    <div className="justify-center mt-4 flex flex-row gap-2 flex-wrap my-2">
                        {projectValue.texts.technologies_badge.map((tech) => {
                            return (
                                <Badge key={projectValue.id}>{tech}</Badge>
                            )
                        })}
                    </div>
                </section>

                <section className="mb-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 flex justify-center">
                        <div className="aspect-auto w-full max-w-lg mx-auto">
                            <ImageCard
                                className="h-auto w-auto object-contain rounded-xl shadow-lg"
                                caption={projectValue.images.image1.alt}
                                imageUrl={projectValue.images.image1.link}
                            />
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-mono">Introduction</h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            {projectValue.texts.introduction}
                        </p>
                    </div>
                </section>

                {/* Requirements */}
                <section className="mb-16 flex flex-col md:flex-row items-center gap-12 ">
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-lg mx-auto">
                            {projectValue.images.image2.link && (
                                <ImageCard
                                    className="aspect-auto w-full rounded-xl shadow-lg"
                                    caption={projectValue.images.image2.alt}
                                    imageUrl={projectValue.images.image2.link}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-mono">Requirements</h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            {projectValue.texts.requirements}
                        </p>
                    </div>
                </section>

                {/* Objective */}
                <section className="mb-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-mono">Objective</h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            {projectValue.texts.objective}
                        </p>
                    </div>
                </section>

                {/* Technologies */}
                <section data-aos="fade-up" className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
                        Technologies
                    </h2>
                    <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto font-mono text-md shadow-inner">
                        <pre className="whitespace-pre-wrap">
                            {projectValue.texts.technologies}
                        </pre>
                    </div>
                </section>

                {/* Challenges */}
                <section className="mb-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-mono">Challenges</h2>
                        <p className=" text-base md:text-lg leading-relaxed">
                            {projectValue.texts.challenges}
                        </p>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="mb-16 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-lg mx-auto">
                            {projectValue.images.image3.link && (
                                <ImageCard
                                    className="aspect-auto w-full rounded-xl shadow-lg"
                                    caption={projectValue.images.image3.alt}
                                    imageUrl={projectValue.images.image3.link}
                                />
                            )}
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-mono">Conclusion</h2>
                        <p className="text-base md:text-lg leading-relaxed">
                            {projectValue.texts.conclusion}
                        </p>
                    </div>
                </section>

                {/* Buttons */}
                <section className="flex justify-center gap-4 flex-wrap">
                    <Link
                        href={projectValue.linkGitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        <Button className="p-6 text-xl" variant="orange">
                            <SiGithub size={70} /> GitHub Project Page
                        </Button>
                    </Link>

                    <Link
                        href={projectValue.linkProject}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-auto w-auto"
                    >
                        <Button className="p-6 text-xl" variant="orange" >
                            <GoLinkExternal size={70} />
                            Access Project
                        </Button>
                    </Link>
                </section>
            </main >



            <Footer />
        </>
    )
}