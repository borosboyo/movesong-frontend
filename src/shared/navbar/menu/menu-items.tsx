"use client"

import * as React from "react"

import { cn } from "@/core/lib/utils.ts"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/shared/components/ui/navigation-menu.tsx"
import { ThemeToggle } from '@/core/theme/theme-toggle.tsx';
import { I18nToggle } from '@/core/i18n/i18n-toggle.tsx';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/components/ui/button.tsx';

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Panel",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

export function MenuItems(props: Readonly<{ type: string }>) {
    const { t} = useTranslation();

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <div className={props.type}>
                    <NavigationMenuItem className={`transition-transform hover:scale-105 mr-5`}>
                        <NavigationMenuTrigger className={` transition-transform hover:scale-105 rounded-xl`}>{t('navbar.actions')}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className={`grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]`}>
                                <li className={`row-span-3`}>
                                    <NavigationMenuLink
                                        className={`flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none `}
                                        href="/">
                                        <div className={`mb-2 mt-4 text-lg font-medium`}>
                                            lorem ipsum
                                        </div>
                                        <p className={`text-sm leading-tight text-muted-foreground`}>
                                            Nullam sed ipsum in odio euismod mollis at in orci. Cras eu molestie turpis.
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Sample Text">
                                    Nullam sed ipsum in odio euismod mollis at in orci.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Sample Text">
                                    Nullam sed ipsum in odio euismod mollis at in orci.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Sample Text">
                                    Nullam sed ipsum in odio euismod mollis at in orci.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={`transition-transform hover:scale-105 mr-5`}>
                        <NavigationMenuTrigger className={` rounded-xl`}>{t('navbar.plans')}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] `}>
                                {components.map((component) => (
                                    <ListItem
                                        key={component.title}
                                        title={component.title}
                                        href={component.href}
                                    >
                                        {component.description}
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={`transition-transform hover:scale-105 mr-5 rounded-xl`}>
                        <NavigationMenuLink href={"/movesong-frontend/faq"} className={`${navigationMenuTriggerStyle()} select-none rounded-xl`}>
                            <p>{t('navbar.help')}</p>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className={`relative inline-flex group mr-4`}>
                        <div
                            className={`absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#FF5003] via-[#FF5003] to-[#FF5003] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}>
                        </div>
                        <Button
                                className={`hover:bg-[#FF5003] hover:scale-105 relative inline-flex items-center justify-center px-7 py-4 font-bold text-white transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-900`}>
                            <p>{t('navbar.login')}</p>
                        </Button>
                    </div>
                    <ThemeToggle />
                    <I18nToggle />
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
// eslint-disable-next-line react/prop-types
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}
                >
                    <div className={`text-sm font-medium leading-none`}>{title}</div>
                    <p className={`line-clamp-2 text-sm leading-snug text-muted-foreground`}>
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
