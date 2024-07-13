import { useTheme } from '@/core/theme/theme-provider.tsx';

export function useTitleTheme() {
  const { theme } = useTheme();

  return theme === 'dark' ? 'titleDark' : 'titleLight';
}
