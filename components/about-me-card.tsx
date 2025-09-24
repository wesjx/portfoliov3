'use client'
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LoadingIndicator from "./loading-spiner";

export default function AboutMeCard() {

    const textFrontEnd: string = "<Front-end developer />"
    return (

        <Card className="sm:col-span-1 md:col-span-2 bg-chart-3">
            <CardContent className="px-6">
                <div className="flex items-center justify-baseline gap-4 mb-4 ">
                    <Button className="h-auto w-auto p-0 mr-3">
                        <Image src="/profile-picture.jpg" alt="Profile picture" width={150} height={150}></Image>
                    </Button>
                    <div>
                        <h2 className="text-4xl font-semibold mb-2 font-mono text-background">Wesley Silva</h2>
                        <p className="text-xl font-mono italic text-background" >{textFrontEnd}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end-safe">
                    <p className="pt-6 text-lg text-chart-5">
                        I am Wesley, a front-end developer with 2 years of experience applying best practices in front-end development. I have a passion for UI/UX and design, aiming to deliver clean and user-friendly projects while building strong and secure solutions.
                    </p>
                    <Link href="/about">
                        <Button>
                            Read more <ArrowRight /> <LoadingIndicator/>
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}