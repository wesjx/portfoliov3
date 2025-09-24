import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import LoadingIndicator from "./loading-spiner";

export default function LetsTalkCard() {
    return (
        <Card className="flex justify-center sm:col-span-1 gap-2 md:col-span-2  space-y-4">
            <CardHeader>
                <h3 className="text-2xl font-mono" >Have an Interesting Project in Mind?</h3>
            </CardHeader>
            <CardContent className="p-6">
                <div className="text-xl flex items-center justify-center gap-4 pb-7 ">
                    <p>Got a project in mind? Need to bring an idea to life or want to chat about technology? Let’s talk!</p>
                </div>
                <Link href="/contact">
                    <Button variant="orange">
                        Lets talk! <LoadingIndicator/>
                    </Button>
                </Link>
            </CardContent>
        </Card>
    )
}