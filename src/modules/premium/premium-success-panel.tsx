import { useNavigate, useRouteError } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CheckmarkIcon } from '@/shared/icons/checkmark-icon.tsx';
import { useEffect } from 'react';
import { useAuth } from '@/core/hooks/useAuth';
import { useCustomerId } from './customer-context';
import premiumService from './premium-service';
import { useHandleError } from '@/core/hooks/useHandleError.ts';

export default function PremiumSuccessPanel() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();
  const { user } = useAuth();
  const { customerId } = useCustomerId();
  const handleErrors = useHandleError();

  useEffect(() => {
    if (user?.email && user?.id && user?.username && customerId) {
      premiumService.saveSubscription(user.id, user.email, user.username, customerId)
        .then(() => {
          // Subscription saved
        })
        .catch((error) => {
          // Handle error
          handleErrors(error);
        });
    }
  }, [user, customerId, handleErrors]);


  const handleReturn = () => {
    navigate('/movesong-frontend');
  }

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-9xl font-extrabold tracking-tight lg:text-9xl`}>
          <CheckmarkIcon size={100} />
        </h1>
        <p className={`text-2xl font-light tracking-tight lg:text-2xl`}>
          Your premium subscription was successful. Thank you for your support!
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleReturn}>Take me back.</Button>
        <i>
          {(error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </div>
    </PanelContainer>
  );
}
