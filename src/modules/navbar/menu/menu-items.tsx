"use client"

import * as React from "react"

import { cn } from "@/core/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/shared/components/ui/navigation-menu"
import { ThemeToggle } from '@/core/theme/theme-toggle.tsx';
import { TranslationToggle } from '@/core/translation/translation-toggle.tsx';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/components/ui/button.tsx';
import { useTextTheme } from '@/core/theme/hooks/useTextTheme.ts';
import { useButtonTheme } from '@/core/theme/hooks/useButtonTheme.ts';
import { useButtonTextTheme } from '@/core/theme/hooks/useButtonTextTheme.ts';

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
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

export function MenuItems(props: {type: string}) {
    const { t} = useTranslation();

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <div className={props.type}>
                    <NavigationMenuItem className={`mr-5`}>
                        <NavigationMenuTrigger className={`${useTextTheme()} rounded-xl`}>{t('navbarActions')}</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className={`grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]`}>
                                <li className={`row-span-3`}>
                                    <NavigationMenuLink
                                        className={`flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none `}
                                        href="/">
                                        <div className={`mb-2 mt-4 text-lg font-medium`}>
                                            shadcn/ui
                                        </div>
                                        <p className={`text-sm leading-tight text-muted-foreground`}>
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                        </p>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/docs" title="Introduction">
                                    Re-usable components built using Radix UI and Tailwind CSS.
                                </ListItem>
                                <ListItem href="/docs/installation" title="Installation">
                                    How to install dependencies and structure your app.
                                </ListItem>
                                <ListItem href="/docs/primitives/typography" title="Typography">
                                    Styles for headings, paragraphs, lists...etc
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem className={`mr-5`}>
                        <NavigationMenuTrigger className={`${useTextTheme()} rounded-xl`}>{t('navbarPlans')}</NavigationMenuTrigger>
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
                    <NavigationMenuItem className={`mr-5 rounded-xl`}>
                        <NavigationMenuLink href="/docs" className={`${navigationMenuTriggerStyle()} rounded-xl`}>
                            <p className={`${useTextTheme()}`}>{t('navbarHelp')}</p>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <div className={`relative inline-flex group mr-4`}>
                        <div
                            className={`absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#C0C0C0] via-[#C0C0C0] to-[#C0C0C0] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt`}>
                        </div>
                        <Button
                                className={`relative inline-flex items-center justify-center px-7 py-4 font-bold text-white transition-all duration-200 font-pj rounded-xl focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-900 ${useButtonTheme()} hover:${useButtonTheme()}`}>
                            <p className={`${useButtonTextTheme()}`}>{t('navbarLogin')}</p>
                        </Button>
                    </div>
                    <ThemeToggle />
                    <TranslationToggle />
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
