import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import DiamondIcon from '@/shared/icons/diamond-icon.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
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
import { useTranslation } from 'react-i18next';

export default function PremiumPanel() {
  const { t } = useTranslation();
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
        {subscription ? <AlreadyPremiumCard /> : <PremiumCard />}
        <Card className={`w-[500px]`}>
          <CardHeader>
            <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
              {t('premium.freePackage.header')}
            </CardTitle>
          </CardHeader>
          <CardContent className={`flex-col grid gap-4`}>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
              <DiamondIcon />{t('premium.freePackage.benefit1')}
            </CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
              <DiamondIcon />{t('premium.freePackage.benefit2')}
            </CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
              <DiamondIcon />{t('premium.freePackage.benefit3')}
            </CardTitle>
          </CardContent>
        </Card>
      </div>
    </PanelContainer>
  );
}

function PremiumCard() {
  const { t } = useTranslation();
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
              title: t('premium.errorToast.title'),
              description: t('premium.errorToast.description'),
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
    if (user?.email && user.username) {
      premiumService.subscription(user.email, user.username, 'year', 'prod_QuqcNVtCp060Lm')
        .then((resp) => {
          if (resp.url && resp.customerId) {
            setCustomerId(resp.customerId);
            setYearlyLoading(false);
            window.location.href = resp.url;
          } else {
            setYearlyLoading(false);
            toast({
              title: t('premium.errorToast.title'),
              description: t('premium.errorToast.description'),
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
        <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
          {t('premium.premiumPackage.header')}
        </CardTitle>
      </CardHeader>
      <CardContent className={`flex-col grid gap-4`}>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
          <DiamondIcon />{t('premium.premiumPackage.benefit1')}
        </CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
          <DiamondIcon />{t('premium.premiumPackage.benefit2')}
        </CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
          <DiamondIcon />{t('premium.premiumPackage.benefit3')}
        </CardTitle>
      </CardContent>
      <CardFooter className={`flex-col grid gap-2 items-start`}>
        <LoadingButton
          onClick={handleMonthlySubscriptionNavigate}
          loading={monthlyLoading}
          progress={monthlyProgress}
          buttonText={t('premium.monthlyButtonText')}
          className="w-full primaryButton"
        />
        <LoadingButton
          onClick={handleYearlySubscriptionNavigate}
          loading={yearlyLoading}
          progress={yearlyProgress}
          buttonText={t('premium.yearlyButtonText')}
          className="w-full primaryButton"
        />
      </CardFooter>
    </Card>
  );
}

function AlreadyPremiumCard() {
  const { t } = useTranslation();

  return (
    <Card className={`w-[500px]`}>
      <CardHeader>
        <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
          {t('premium.alreadyPremium.text')}
        </CardTitle>
      </CardHeader>
      <CardContent className={`flex-col grid gap-4`}>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
          <DiamondIcon />{t('premium.premiumPackage.benefit1')}
        </CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
          <DiamondIcon />{t('premium.premiumPackage.benefit2')}
        </CardTitle>
        <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}>
          <DiamondIcon />{t('premium.premiumPackage.benefit3')}
        </CardTitle>
      </CardContent>
    </Card>
  );
}
