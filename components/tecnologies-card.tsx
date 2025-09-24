import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Card, CardHeader } from "./ui/card";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function TecnologiesCard() {

    return (
        <Card className="col-span-1 flex flex-col gap-2 space-y-4 bg-chart-1">
            <CardHeader>
                <h3 className="text-2xl font-mono text-background">Tecnologies</h3>
            </CardHeader>
            <div className="grid grid-cols-4 gap-4 p-2 w-full place-items-center">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <SiTypescript size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Typescript</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <SiJavascript size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Javascript</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <SiHtml5 size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>HTML5</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <SiCss3 size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>CSS3</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <SiNextdotjs size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Next Framework</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <SiReact size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>React Framework</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <SiTailwindcss size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Tailwind CSS</p>
                        </TooltipContent>
                    </Tooltip>
                   
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                asChild
                                className="p-1 flex items-center justify-center h-16 w-16"
                                size="icon"
                            >
                                <VscVscode size={30} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>VSCode</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </Card>

    )
}