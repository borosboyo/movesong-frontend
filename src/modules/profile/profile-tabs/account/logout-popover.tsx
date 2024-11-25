import { useTranslation } from 'react-i18next';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useNavigate } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover.tsx';
import { Button } from '@/shared/components/ui/button.tsx';

export function LogoutPopover() {
  const { t } = useTranslation();
  const { logout } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast({
      title: t('profile.accountTab.logoutSuccessToast.title'),
      description: t('profile.accountTab.logoutSuccessToast.description'),
      variant: 'success',
    });
    navigate('/movesong-frontend');
  };

  return <Popover>
    <PopoverTrigger asChild>
      <Button variant={`outline`} className={`w-full md:w-40 lg:w-40 mr-2`}>{t('profile.accountTab.logout')}</Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className={`flex flex-col gap-3`}>
                    <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>
                      {t('profile.accountTab.logOutPopover.text')}
                    </span>
        <div className={`flex justify-end gap-3`}>
          <Button variant={`outline`} onClick={handleLogout}>
            {t('profile.accountTab.logOutPopover.buttonText')}
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>;
}
