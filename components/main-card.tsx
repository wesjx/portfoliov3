'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "./ui/tooltip";
import { useTheme } from "next-themes";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useEffect, useState } from "react";


export default function MainCards() {
    const { theme, resolvedTheme } = useTheme()
    const [color, setColor] = useState('#fff');

    useEffect(() => {
        if (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark')) {
            setColor('#ca8343')
        } else {
            setColor('#fff')
        }

    }), [theme, resolvedTheme]

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            className="col-span-1 max-h-[120px] w-full h-full"
                            href="https://www.linkedin.com/in/wesley-junio/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                asChild
                                className="p-4 h-full w-full"
                            >
                                <FiLinkedin color={color} size={110} className="stroke-1" />

                            </Button>
                        </Link>

                    </TooltipTrigger>
                    <TooltipContent>
                        <p>LinkedIn</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            className="col-span-1 max-h-[120px] w-full h-full"
                            href="https://github.com/wesjx"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                asChild
                                className="p-4 h-full w-full"
                            >
                                <FiGithub color={color} size={110} className="stroke-1" />

                            </Button>
                        </Link>

                    </TooltipTrigger>
                    <TooltipContent>
                        <p>GitHub</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            className="col-span-1 max-h-[120px] w-full h-full"
                            href="/Wesley_Silva_CV_Dev2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                asChild
                                className="p-4 h-full w-full"
                            >
                                <HiOutlineDocumentText color={color} size={110} className="stroke-1" />

                            </Button>
                        </Link>

                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Download CV</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

        </>
    )
}

