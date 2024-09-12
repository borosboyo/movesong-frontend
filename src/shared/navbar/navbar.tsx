import { Sheet, SheetContent, SheetTrigger } from '@/shared/components/ui/sheet.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { MenuItems } from '@/shared/navbar/menu/menu-items.tsx';
import MenuIcon from '@/shared/icons/menu-icon.tsx';
import { useTranslation } from 'react-i18next';
import { useTitleTheme } from '@/core/theme/hooks/useTitleTheme.ts';

export default function Navbar() {
  const { t } = useTranslation();

  return <header className={`bg-[size:20px_20px] top-* flex h-20 w-full shrink-0 items-center px-4 md:px-6 darkBg`}>
    <Sheet>
      <SheetTrigger asChild>
        <Button className={`lg:hidden transition-transform hover:scale-105`} size="icon">
          <MenuIcon className={`h-12 w-12`} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className={`bg-white`}>
        <div className={`grid grid-cols-1 gap-2 py-6`}>
          <div className={`mr-6`}>
            <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl select-none bg-transparent`}>{t('navbar.title')}</h1>
          </div>
          <MenuItems type="flex-col" />
        </div>
      </SheetContent>
    </Sheet>
    <div className={`mr-6 hidden lg:flex`}>
      <Button className={`bg-transparent`}>
        <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl ${useTitleTheme()} select-none`}>{t('navbar.title')}</h1>
      </Button>
    </div>
    <nav className={`ml-auto hidden lg:flex gap-6 mr-6`}>
      <MenuItems type="flex" />
    </nav>
  </header>;
}
