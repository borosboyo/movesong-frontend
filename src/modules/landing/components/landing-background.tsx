import { useTheme } from '@/core/theme/theme-provider.tsx';

export default function LandingBackground() {
    const { theme } = useTheme();
    return <>
        {theme === 'dark' ?
          <div
            className={`absolute h-full w-full bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[-1]`}>
          </div>
          :
          <div
            className={`absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] z-[-1]`}>
          </div>
        }
    </>;
}
