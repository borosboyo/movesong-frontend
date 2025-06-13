import { Moon, Sun } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';
import { useTheme } from '@/core/theme/theme-provider.tsx';
import { useTranslation } from 'react-i18next';

export function ThemeToggle() {
    const { setTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={`mr-5`}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className={` focus-visible:ring-0 hover:bg-transparent transition-transform hover:scale-105`} variant="ghost" size="icon">
                        <Sun color={`white`} className={`h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0`} />
                        <Moon className={`absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 `} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={``} align="end">
                    <DropdownMenuLabel className={``}>{t('theme.toggleTitle')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={``} onClick={() => setTheme('light')}>
                        <p className={``}>{t('theme.light')}</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={``} onClick={() => setTheme('dark')}>
                        <p className={``}>{t('theme.dark')}</p>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
