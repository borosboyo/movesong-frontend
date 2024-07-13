import { useTheme } from '@/core/theme/theme-provider.tsx';

export function useButtonTextTheme() {
    const { theme } = useTheme();

    return theme === 'dark' ? 'text-black' : 'text-white';
}
