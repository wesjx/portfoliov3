'use client'
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerTrigger,
} from "@/components/ui/drawer"
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import LoadingIndicator from "./loading-spiner";
import { usePathname } from 'next/navigation';

const menuItems = [{
    name: 'Home',
    link: '/'
}, { name: 'About', link: '/about' }, { name: 'Projects', link: '/projects' }, { name: 'Contact', link: '/contact' }];

export default function DrawerMenuMobile() {
    const pathname = usePathname();

    const currentPage =
        menuItems.find((item) => item.link === pathname)?.name || 'Home';

    return (
        <Drawer direction="top">
            <DrawerTrigger asChild>
                <Button className="font-mono">{currentPage} <IoIosArrowDown /></Button>
            </DrawerTrigger>
            <DrawerContent className="flex flex-col justify-center">
                <div className="mx-auto pt-4 w-[200px]">
                    <nav className="flex flex-col items-center gap-3 md:gap-6 font-mono">
                        {menuItems.map((item) => {
                            return <>
                                <Link href={item.link} className="flex flex-row gap-1">{item.name} <LoadingIndicator /></Link>
                            </>
                        })}
                    </nav>

                    <DrawerFooter >
                        <DrawerClose asChild>
                            <Button
                                className="bg-secondary-background text-foreground"
                                variant="noShadow"
                            >
                                Cancel
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    )
}
