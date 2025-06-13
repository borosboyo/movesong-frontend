import { useTheme } from '@/core/theme/theme-provider.tsx';

export function useBgTheme() {
    const { theme } = useTheme();

    return theme === 'dark' ? 'bg-black' : 'bg-white';
}
