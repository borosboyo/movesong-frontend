'use client';

import * as React from 'react';

import { cn } from '@/core/lib/utils.ts';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuLoginTriggerStyle,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/shared/components/ui/navigation-menu.tsx';
import { ThemeToggle } from '@/core/theme/theme-toggle.tsx';
import { I18nToggle } from '@/core/i18n/i18n-toggle.tsx';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/core/hooks/useAuth.tsx';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'premiumTitle',
    href: '/movesong-frontend/premium',
    description: 'premiumDescription',
  },
  {
    title: 'freeTitle',
    href: '/movesong-frontend/premium',
    description: 'freeDescription',
  },
];

export function HorizontalMenuItems() {
  const { t } = useTranslation();
  const { isLoggedIn, user } = useAuth();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className={`flex gap-2 items-left ml-4`}>
          <NavigationMenuItem className={`mr-5`}>
            <NavigationMenuTrigger className={`rounded-xl`}>{t('navbar.actions')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={`grid gap-3 p-4 md:w-[400px] lg:w-[500px]`}>
                <li className={`row-span-1`}>
                  <NavigationMenuLink
                    className={`flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none `}
                    href="/movesong-frontend/transform"
                  >
                    <div className={`mb-2 text-lg font-medium`}>{t('navbar.transferSongsTitle')}</div>
                    <p className={`text-sm leading-tight text-muted-foreground`}>
                      {t('navbar.transferSongsDescription')}
                    </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className={`mr-5`}>
            <NavigationMenuTrigger className={` rounded-xl`}>{t('navbar.plans')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={`grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px]`}>
                {components.map((component) => (
                  <ListItem key={component.title} title={t(component.title)} href={component.href}>
                    {t(component.description)}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className={`mr-5 rounded-xl`}>
            <NavigationMenuLink
              href={'/movesong-frontend/faq'}
              className={`${navigationMenuTriggerStyle()} select-none rounded-xl`}
            >
              <p>{t('navbar.help')}</p>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className={`relative inline-flex group  mr-5 rounded-xl`}>
            {isLoggedIn() ? (
              <NavigationMenuLink
                href={'/movesong-frontend/profile'}
                className={`${navigationMenuLoginTriggerStyle()} select-none rounded-xl`}
              >
                {user?.username}
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href={'/movesong-frontend/login'}
                className={`${navigationMenuLoginTriggerStyle()} select-none rounded-xl`}
              >
                <p>{t('navbar.login')}</p>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
          <ThemeToggle />
          <I18nToggle />
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function VerticalMenuItems() {
  const { t } = useTranslation();
  const { isLoggedIn, user } = useAuth();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div className={`flex flex-col gap-2 items-left ml-4`}>
          <NavigationMenuItem className={`mr-5`}>
            <NavigationMenuTrigger className={`rounded-xl`}>{t('navbar.actions')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={`grid w-[400px] gap-3 p-4 md:w-[400px] lg:w-[500px]`}>
                <li className={`row-span-1`}>
                  <NavigationMenuLink
                    className={`flex h-full w-full select-none flex-col justify-end rounded-md from-muted/50 to-muted p-6 no-underline outline-none `}
                    href="/movesong-frontend/transform"
                  >
                    <div className={`mb-2 text-lg font-medium`}>Transfer songs</div>
                    <p className={`text-sm leading-tight text-muted-foreground`}>
                      Transfer your playlists between music streaming services.
                    </p>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className={`mr-5`}>
            <NavigationMenuTrigger className={` rounded-xl`}>{t('navbar.plans')}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={`grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-1 lg:w-[400px]`}>
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className={`mr-5 rounded-xl`}>
            <NavigationMenuLink
              href={'/movesong-frontend/faq'}
              className={`${navigationMenuTriggerStyle()} select-none rounded-xl`}
            >
              <p>{t('navbar.help')}</p>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className={`relative inline-flex group mr-5 rounded-xl`}>
            {isLoggedIn() ? (
              <NavigationMenuLink
                href={'/movesong-frontend/profile'}
                className={`${navigationMenuLoginTriggerStyle()} select-none rounded-xl`}
              >
                {user?.username}
              </NavigationMenuLink>
            ) : (
              <NavigationMenuLink
                href={'/movesong-frontend/login'}
                className={`${navigationMenuLoginTriggerStyle()} select-none rounded-xl`}
              >
                <p>{t('navbar.login')}</p>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
          <div className={`flex flex-row`}>
            <ThemeToggle />
            <I18nToggle />
          </div>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
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
          <p className={`line-clamp-2 text-sm leading-snug text-muted-foreground`}>{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
