import { Moon, Sun } from 'lucide-react';

import { Button } from '@/shared/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/shared/components/ui/dropdown-menu';
import { useTheme } from '@/core/theme/theme-provider.tsx';
import { useTranslation } from 'react-i18next';
import { useTextTheme } from '@/core/theme/hooks/useTextTheme.ts';
import { useBgTheme } from '@/core/theme/hooks/useBgTheme.ts';

export function ThemeToggle() {
    const { setTheme } = useTheme();
    const { t } = useTranslation();

    return (
        <div className={`mr-5`}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Sun className={`h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ${useTextTheme()}`} />
                        <Moon className={`absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${useTextTheme()}`} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className={`${useBgTheme()}`} align="end">
                    <DropdownMenuLabel className={`${useTextTheme()}`}>{t('navbarThemeToggleTitle')}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className={`${useTextTheme()}`} onClick={() => setTheme('light')}>
                        <p className={`${useTextTheme()}`}>{t('themeLight')}</p>
                    </DropdownMenuItem>
                    <DropdownMenuItem className={`${useTextTheme()}`} onClick={() => setTheme('dark')}>
                        <p className={`${useTextTheme()}`}>{t('themeDark')}</p>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
