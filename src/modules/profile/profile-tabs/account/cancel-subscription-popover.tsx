import { useTranslation } from 'react-i18next';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import profileService from '@/modules/profile/profile-service.ts';
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui/popover.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { FindSubscriptionResp } from '@/swagger/subscription';

export function CancelSubscriptionPopover({
  subscription,
  setSubscription,
}: {
  subscription: FindSubscriptionResp | null;
  setSubscription: (_subscription: FindSubscriptionResp | null) => void;
}) {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { user } = useAuth();

  const handleCancelSubscription = () => {
    if (user?.email) {
      profileService.cancelSubscription(subscription!.subscriptionId!).then(() => {
        toast({
          title: t('profile.accountTab.cancelSubscriptionSuccessToast.title'),
          description: t('profile.accountTab.cancelSubscriptionSuccessToast.description'),
          variant: 'success',
        });
        setSubscription(null);
      });
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className={`text-red-500 w-full md:w-40 lg:w-40`} variant={`ghost`}>
          {t('profile.accountTab.cancelSubscriptionButtonText')}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className={`flex flex-col gap-3`}>
          <span className={`w scroll-m-20 text-l font-extrabold tracking-tight lg:textl`}>
            {t('profile.accountTab.cancelSubscriptionPopover.text')}
          </span>
          <div className={`flex justify-end gap-3`}>
            <Button variant={`outline`} onClick={handleCancelSubscription}>
              {t('profile.accountTab.cancelSubscriptionPopover.buttonText')}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
