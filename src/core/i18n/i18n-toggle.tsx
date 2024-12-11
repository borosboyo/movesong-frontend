import { Button } from '@/shared/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/components/ui/avatar';
import { useTranslation } from 'react-i18next';
import enIcon from '@/assets/en.png';
import huIcon from '@/assets/hu.png';

export function I18nToggle() {
  const { i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={`focus-visible:ring-0 transition-transform hover:scale-105 hover:bg-transparent`}
          variant="ghost"
          size="icon"
        >
          {i18n.language === 'en' ? (
            <Avatar className={`h-[1.5rem] w-[1.5rem]`}>
              <AvatarImage asChild src={enIcon}>
                <img src={enIcon} alt="en" />
              </AvatarImage>
              <AvatarFallback>English</AvatarFallback>
            </Avatar>
          ) : (
            <Avatar className={`absolute h-[1.5rem] w-[1.5rem]`}>
              <AvatarImage asChild src={huIcon}>
                <img src={huIcon} alt="hu" />
              </AvatarImage>
              <AvatarFallback>Hungarian</AvatarFallback>
            </Avatar>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => {
            i18n.changeLanguage('en').then(() => localStorage.setItem('lng', 'en'));
          }}
        >
          <div className={`flex`}>
            <Avatar className={`h-[1.8rem] w-[1.8rem]`}>
              <AvatarImage asChild src={enIcon}>
                <img src={enIcon} alt="en" />
              </AvatarImage>
              <AvatarFallback>English</AvatarFallback>
            </Avatar>
            <div className={`ml-2 mt-1`}>English</div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            i18n.changeLanguage('hu').then(() => localStorage.setItem('lng', 'hu'));
          }}
        >
          <div className={`flex`}>
            <Avatar className={`h-[1.8rem] w-[1.8rem]`}>
              <AvatarImage asChild src={huIcon}>
                <img src={huIcon} alt="hu" />
              </AvatarImage>
              <AvatarFallback>Magyar</AvatarFallback>
            </Avatar>
            <div className={`ml-2 mt-1`}>Magyar</div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
