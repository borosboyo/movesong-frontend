import { useTranslation } from 'react-i18next';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useNavigate } from 'react-router-dom';
import profileService from '@/modules/profile/profile-service.ts';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover.tsx';
import { Button } from '@/shared/components/ui/button.tsx';

export function DeleteAccountPopover(subscriptionId: string | undefined) {
  const { t } = useTranslation();
  const { logout, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const handleDeleteAccount = () => {
    if (user?.email) {
      profileService.deleteAccount(
        user.email,
        subscriptionId || '',
      ).then(() => {
        logout();
        toast({
          title: t('profile.accountTab.deleteAccountSuccessToast.title'),
          description: t('profile.accountTab.deleteAccountSuccessToast.description'),
          variant: 'success',
        });
        navigate('/movesong-frontend');
      });
    }
  };

  return <Popover>
    <PopoverTrigger asChild>
      <Button variant={`outline`} className={`text-red-500 w-full md:w-40 lg:w-40 items-center`}>
        {t('profile.accountTab.deleteAccountButtonText')}
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <div className={`flex flex-col gap-3`}>
                    <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>
                      {t('profile.accountTab.deleteAccountPopover.header')}
                    </span>
        <span className={`w scroll-m-20 text-s font-light tracking-tight lg:text-s`}>
                      {t('profile.accountTab.deleteAccountPopover.text')}
                    </span>
        <div className={`flex justify-end gap-3`}>
          <Button variant={`destructive`} onClick={handleDeleteAccount}>
            {t('profile.accountTab.deleteAccountPopover.buttonText')}
          </Button>
        </div>
      </div>
    </PopoverContent>
  </Popover>;
}
