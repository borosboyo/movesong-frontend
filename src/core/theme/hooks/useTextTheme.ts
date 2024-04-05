import { useTheme } from '@/core/theme/theme-provider.tsx';

export function useTextTheme() {
    const { theme } = useTheme();

    return theme === 'dark' ? 'text-white' : 'text-black';
}
