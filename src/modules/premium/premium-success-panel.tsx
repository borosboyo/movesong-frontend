import { useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { useEffect } from 'react';
import { useAuth } from '@/core/hooks/useAuth';
import { useCustomerId } from './customer-context';
import premiumService from './premium-service';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/shared/components/ui/use-toast';

export default function PremiumSuccessPanel() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { customerId } = useCustomerId();
  const handleError = useHandleError();
  const { toast } = useToast();

  useEffect(() => {
    if (user?.email && user?.id && user?.username && customerId) {
      premiumService.saveSubscription(user.id, user.email, user.username, customerId)
        .then(() => {
          // Save subscription
          toast({
            title: t('premium.successPanel.toast.title'),
            description: t('premium.successPanel.toast.description'),
            variant: 'success',
          })
        })
        .catch((error) => {
          // Handle error
          // handleError(error);
        });
    }
  }, [user, customerId]);

  const handleReturn = () => {
    navigate('/movesong-frontend');
  }

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-2xl font-extrabold tracking-tight lg:text-9xl`}>
          <CheckmarkIcon size={100} />
        </h1>
        <p className={`text-l font-light tracking-tight lg:text-2xl`}>
          {t('premium.successPanel.text')}
        </p>
        <Button className={`primaryButton text-md lg:text-lg py-6 px-8`} onClick={handleReturn}>
          {t('premium.successPanel.buttonText')}
        </Button>
      </div>
    </PanelContainer>
  );
}
