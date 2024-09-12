import { useTheme } from '@/core/theme/theme-provider.tsx';

export function useButtonTheme() {
    const { theme } = useTheme();

    return theme === 'dark' ? 'bg-white text-black hover:bg-white' : 'bg-black text-white hover:bg-black';
}
