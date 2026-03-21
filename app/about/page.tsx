import Footer from "@/components/footer";
import Header from "@/components/header";
import TecnologiesCard from "@/components/tecnologies-card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AbouMe() {
    const textFrontEnd: string = "<Front-end developer />"

    return (
        <>
            <Header />
            <section className="max-w-6xl mx-auto px-4 py-4 md:py-12">
                <article>
                    <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                        <div className="flex flex-col m-auto pr-8 items-center gap-4 min-w-[140px]">
                            <Button className="h-auto w-auto p-0">
                                <Image
                                    src="/profile-picture.jpg"
                                    alt="Profile picture"
                                    width={170}
                                    height={170}
                                />
                            </Button>

                            <div>
                                <h2 className="text-3xl text-center md:text-4xl font-semibold mb-1 font-mono">Wesley Silva</h2>
                                <p className="text-lg md:text-xl font-mono italic">{textFrontEnd}</p>
                            </div>
                        </div>

                        <p className="mb-9 text-lg leading-relaxed flex-1">
                            Hi, I’m Wesley Silva, a Brazilian full-stack developer currently living in Ireland. I have 3 years of hands-on experience building modern web applications, with a strong background in front-end development using React, Next.js, and TypeScript.
                            <br />
                            I&apos;m a team player who enjoys collaborating and tackling challenges with a
                            positive attitude. My Brazilian roots influence my approach: I solve
                            problems with creativity, persistence, and a smile. I enjoy creating clean, user-focused interfaces and turning ideas into practical digital products. At the same time, I’m growing my back-end skills with Java, Spring Boot, REST APIs, and database design.
                            <br />
                            I’m currently studying Software Engineering, which helps me build with a stronger foundation in architecture, problem-solving, and scalable systems. I’m looking for opportunities where I can contribute, keep learning, and grow as a full-stack developer. I aim to make every project a showcase for new ideas and
                            user-focused solutions.
                        </p>
                    </div>

                    <TecnologiesCard />
                </article>
            </section>
            <Footer />
        </>
    )
}