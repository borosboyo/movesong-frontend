import Navbar from '@/modules/navbar/navbar.tsx';
import { MenuItems } from '@/modules/navbar/menu/menu-items.tsx';
import { useBgTheme } from '@/core/theme/hooks/useBgTheme.ts';
import { Footer } from '@/modules/footer/footer.tsx';
import LandingBackground from '@/modules/landing/landing-background.tsx';

export default function Landing() {

    return (
        <>
            <Navbar />
            <div className={`relative h-full w-full bg-${useBgTheme()}`}>
                <LandingBackground/>

                <div className={`grid grid-cols-1 gap-2 py-6`}>
                    <div className={`mr-6`}>
                        <h1 className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl`}>aspdjasopdijasiopdjasoi</h1>
                    </div>
                    <MenuItems type="flex-col" />
                </div>
                <div className={`grid grid-cols-1 gap-2 py-6`}>
                    <div className={`mr-6`}>
                        <h1 className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl`}>aspdjasopdijasiopdjasoi</h1>
                    </div>
                    <MenuItems type="flex-col" />
                </div>
                <div className={`grid grid-cols-1 gap-2 py-6`}>
                    <div className={`mr-6`}>
                        <h1 className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl`}>aspdjasopdijasiopdjasoi</h1>
                    </div>
                    <MenuItems type="flex-col" />
                </div>
                <div className={`grid grid-cols-1 gap-2 py-6`}>
                    <div className={`mr-6`}>
                        <h1 className={`scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-3xl`}>aspdjasopdijasiopdjasoi</h1>
                    </div>
                    <MenuItems type="flex-col" />
                </div>
            </div>
            <Footer />
        </>
    );
}
