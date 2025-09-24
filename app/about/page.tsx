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
                            Hi, I&apos;m Wesley Silva a front-end developer from Brazil currently living in
                            Ireland. With two years of hands-on experience and a passion for freelancing,
                            I love crafting SaaS products and modern web applications. I always reach
                            for the latest tools to create secure, lightweight sites with great UI/UX
                            and engaging designs, bringing a fresh perspective to every project.
                            <br />
                            <br />
                            I&apos;m a team player who enjoys collaborating and tackling challenges with a
                            positive attitude. My Brazilian roots influence my approach: I solve
                            problems with creativity, persistence, and a smile. My main tools include
                            Next.js, TypeScript, HTML, CSS, Tailwind, Neon Database, and UI/UX
                            strategies.
                            <br />
                            <br />
                            Right now, I&apos;m studying software engineering with a focus on Java, and in my
                            free time, I like to experiment with Golang. Whether I&apos;m working solo or
                            with a group, I aim to make every project a showcase for new ideas and
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