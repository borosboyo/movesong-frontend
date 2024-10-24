import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import DiamondIcon from '@/shared/icons/diamond-icon.tsx';
import { PanelContainer } from '@/shared/panel/panel-container';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useAuth } from '@/core/hooks/useAuth.tsx';
import premiumService from './premium-service';
import { useHandleError } from '@/core/hooks/useHandleError';
import { useToast } from '@/shared/components/ui/use-toast';
import { FindSubscriptionResp } from '@/swagger/subscription';
import { useCustomerId } from '@/modules/premium/customer-context.tsx';

export default function PremiumPanel() {
  // eslint-disable-next-line no-unused-vars
  const [subscription, setSubscription] = useState<FindSubscriptionResp | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.email) {
      premiumService.findSubscriptionByUserEmail(user.email)
        .then((resp) => {
          setSubscription(resp);
        })
    }
  }, [user]);

  return (
    <PanelContainer>
      <div className={`flex flex-col gap-4`}>
        {subscription ? <AlreadyPremiumCard /> : <PremiumCard/>}
        <Card className={`w-[500px]`}>
          <CardHeader>
            <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Free package summary</CardTitle>
          </CardHeader>
          <CardContent className={`flex-col grid gap-4`}>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Max 500 song transfers</CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />No automatic synchronization</CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Export to TXT / CSV</CardTitle>
          </CardContent>
        </Card>
      </div>
    </PanelContainer>
  );
}

function PremiumCard() {
  const navigate = useNavigate();
  const [monthlyLoading, setMonthlyLoading] = useState(false);
  const [yearlyLoading, setYearlyLoading] = useState(false);
  const monthlyProgress = useLoading(monthlyLoading);
  const yearlyProgress = useLoading(yearlyLoading);
  const { isLoggedIn, user } = useAuth();
  const handleErrors = useHandleError();
  const { toast } = useToast();
  const { setCustomerId } = useCustomerId();

  const handleMonthlySubscriptionNavigate = () => {
    isLoggedIn() ? handleMonthlySubscription() : navigate('/movesong-frontend/login');
  };

  const handleYearlySubscriptionNavigate = () => {
    isLoggedIn() ? handleYearlySubscription() : navigate('/movesong-frontend/login');
  };

  const handleMonthlySubscription = () => {
    setMonthlyLoading(true);
    if (user?.email && user.username) {
      premiumService.subscription(user.email, user.username, 'month', 'prod_QuqcwXaww68NTo')
        .then((resp) => {
          if (resp.url && resp.customerId) {
            setCustomerId(resp.customerId);
            setMonthlyLoading(false);
            window.location.href = resp.url;
          } else {
            setMonthlyLoading(false);
            toast({
              title: 'Error!',
              description: 'Something went wrong. Please try again later.',
              variant: 'destructive',
            });
          }
        })
        .catch((error) => {
          setMonthlyLoading(false);
          handleErrors(error);
        });
    }
  };

  const handleYearlySubscription = () => {
    setYearlyLoading(true);
    if(user?.email && user.username) {
      premiumService.subscription(user.email, user.username, 'year', 'prod_QuqcNVtCp060Lm')
        .then((resp) => {
          if(resp.url && resp.customerId) {
            setCustomerId(resp.customerId);
            setYearlyLoading(false);
            window.location.href = resp.url;
          } else {
            setYearlyLoading(false);
            toast({
              title: 'Error!',
              description: 'Something went wrong. Please try again later.',
              variant: 'destructive',
            });
          }
        })
        .catch((error) => {
          setYearlyLoading(false);
          handleErrors(error);
        });
    }
  }

  return (
    <Card className={`w-[500px]`}>
      <CardHeader>
        <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Switch to Premium!</CardTitle>
      </CardHeader>
      <CardContent className={`flex-col grid gap-4`}>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Unlimited transfers</CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Playlist synchronization</CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Export to TXT / CSV</CardTitle>
      </CardContent>
      <CardFooter className={`flex-col grid gap-2 items-start`}>
        <LoadingButton
          onClick={handleMonthlySubscriptionNavigate}
          loading={monthlyLoading}
          progress={monthlyProgress}
          buttonText="$ 4.99 / month"
          className="w-full primaryButton"
        />
        <LoadingButton
          onClick={handleYearlySubscriptionNavigate}
          loading={yearlyLoading}
          progress={yearlyProgress}
          buttonText="$ 24.99 / year"
          className="w-full primaryButton"
        />
      </CardFooter>
    </Card>
  );
}

function AlreadyPremiumCard() {
  return (
    <Card className={`w-[500px]`}>
      <CardHeader>
        <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>You are already a premium member, with the following benefits:</CardTitle>
      </CardHeader>
      <CardContent className={`flex-col grid gap-4`}>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Unlimited transfers</CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Playlist synchronization</CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Export to TXT / CSV</CardTitle>
      </CardContent>
    </Card>
  );
}

