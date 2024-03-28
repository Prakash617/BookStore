import React from 'react'
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { Globe } from 'lucide-react'
import { usePathname } from 'next/navigation'

type Props = {}

const LanguageSwitcher = (props: Props) => {

    const pathName = usePathname()


    const redirectedPathName = (lang: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        if (lang === "en") {
            segments[1] = "np"
        } else if (lang === "np") {
            segments[1] = "en"
        }
        return segments.join('/')
    }

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-lg focus:bg-transparent' onPointerMove={event => event.preventDefault()} onPointerLeave={event => event.preventDefault()}> <Globe className='mr-2' />{pathName.split('/')[1] === "en" ? "EN" : "NP"}</NavigationMenuTrigger>
                    <NavigationMenuContent onPointerMove={event => event.preventDefault()} onPointerLeave={event => event.preventDefault()}>
                        <ul className="m-4 space-y-3">
                            <li><NavigationMenuLink href={redirectedPathName("en")} >Nepali</NavigationMenuLink> </li>
                            <li><NavigationMenuLink href={redirectedPathName("np")} >English</NavigationMenuLink></li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default LanguageSwitcher