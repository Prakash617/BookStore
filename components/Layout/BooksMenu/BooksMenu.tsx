import React from 'react'
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils'
import AccordionMenu from './AccordionMenu'
import MenuMiddleSection from './MenuMiddleSection'

type Props = {}


const BooksMenu = (props: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className='text-lg hover:text-sky-600'>Books</NavigationMenuTrigger>
          <NavigationMenuContent className='grid grid-cols-10 md:w-[400px] lg:w-[1100px] h-[500px]'>
            <AccordionMenu />
            <div className='col-span-5'>
              <MenuMiddleSection />
            </div>
            <div className='col-span-2 space-y-2 p-5'>
              <span className='text-lg font-semibold m-2'>Others</span>

              <Link href={'#'}><div className='text-lg p-2 font-medium rounded-sm hover:bg-gray-200'>Bundle Deals</div></Link>
              <Link href={'#'}><div className='text-lg p-2 font-medium rounded-sm hover:bg-gray-200'>Used Books</div></Link>
              <Link href={'#'}><div className='text-lg p-2 font-medium rounded-sm hover:bg-gray-200'>Pre Orders</div></Link>
              <Link href={'#'}><div className='text-lg p-2 font-medium rounded-sm hover:bg-gray-200'>Book Request</div></Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default BooksMenu


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"




