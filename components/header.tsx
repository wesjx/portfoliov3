"use client"
import Image from "next/image";
import { ModeToggle } from "./theme-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DrawerMenuMobile from "./drawer-header";
import { usePathname } from "next/navigation";
import LanguageToggle from "./freelance-page/freelance-toggle-language";

export default function Header() {
    const { theme, resolvedTheme } = useTheme()
    const [logoHeader, setLogoHeader] = useState('/logo_redondo_preto.png')
    const usePathName = usePathname()
    useEffect(() => {
        if (theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark')) {
            setLogoHeader('/logo_redondo_branco.png')
        } else {
            setLogoHeader('/logo_redondo_preto.png')
        }

    })

    return (
        <header className="top-0 left-0 p-0 md:p-6 max-w-7xl h-20 flex justify-between items-center mx-auto">
            <Image src={logoHeader} alt="Header Image" width={85} height={85} />
            <DrawerMenuMobile />
            <div className="flex flex-row items-end gap-2">
                {usePathName === "/freelance" && (
                    <LanguageToggle />
                )}
                <ModeToggle />
            </div>
        </header>
    )
}