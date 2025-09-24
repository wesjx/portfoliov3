import Link from "next/link";
import { Button } from "./ui/button";
import { MailIcon } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="border-t-4 border-black py-8 mt-12" >
            <div className="max-w-6xl mx-auto items-top p-6 flex md:flex-row flex-col justify-between">
                <div className="mb-9 pb-3">
                    <h2 className="">
                        Wesley Silva
                    </h2>
                    <p>Font-end developer</p>
                </div>
                <div className="mb-9">
                    <h3>Navigation</h3>
                    <nav className="pt-3 pb-6 flex flex-col gap-3">
                        <Link href="/about">About me</Link>
                        <Link href="/contact">Contact</Link>
                        <Link target="_blank" href="/Wesley_Silva_CV_Dev2">Download CV</Link>
                        <Link href="/projects">Project</Link>
                    </nav>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul className="py-3 flex flex-row gap-3">
                        <li>
                            <Button className="bg-chart-1" asChild size="icon">
                                <Link target="_blank" href="mailto:wesjrpirii@icloud.com">
                                    <MailIcon />
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button className="bg-chart-1" asChild size="icon">
                                <Link target="_blank" href="https://www.linkedin.com/in/wesley-junio/">
                                    <FiLinkedin />
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button className="bg-chart-1" asChild size="icon">
                                <Link target="_blank" href="https://github.com/wesjx">
                                    <FiGithub />
                                </Link>
                            </Button>
                        </li>
                        <li>
                            <Button className="bg-chart-1" asChild size="icon">
                                <Link 
                                href="https://instagram.com/wesjx"
                                target="_blank"
                                >
                                    <FaInstagram />
                                </Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center border-t border-black py-8 mt-12">
                <p>© 2025 Wesley Silva. All rights reserved.</p>
            </div>
        </footer>
    )
}
