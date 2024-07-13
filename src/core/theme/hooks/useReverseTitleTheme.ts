import { useTheme } from '@/core/theme/theme-provider.tsx';

export function useReverseTitleTheme() {
  const { theme } = useTheme();

  return theme === 'dark' ? 'titleLight' : 'titleDark';
}
