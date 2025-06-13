import { FindSubscriptionResp } from '@/swagger/subscription';
import { useTranslation } from 'react-i18next';

import { CancelSubscriptionPopover } from '@/modules/profile/profile-tabs/account/cancel-subscription-popover.tsx';

export function PremiumHeader({
  subscription,
  setSubscription,
}: {
  subscription: FindSubscriptionResp | null;
  setSubscription: (_subscription: FindSubscriptionResp | null) => void;
}) {
  const { t } = useTranslation();

  return (
    <>
      <div className={`grid w-full grid-cols-1`}>
        <span className={`w scroll-m-20 text-l col-span-4 font-extrabold tracking-tight lg:text-l`}>
          {t('profile.accountTab.premium')}
        </span>
      </div>
      <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
        <span
          className={`w scroll-m-20 text-s col-span-2 md:col-span-1 lg:col-span-1 font-light tracking-tight lg:text-s`}
        >
          {t('profile.accountTab.premiumBundle')}
        </span>
        <span
          className={`w scroll-m-20 text-s col-span-2 md:col-span-1 lg:col-span-1 font-bold tracking-tight lg:text-s`}
        >
          ${subscription!.price} - {subscription!.interval}
        </span>
      </div>
      <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
        <span
          className={`w scroll-m-20 text-s col-span-2 md:col-span-1 lg:col-span-1 font-light tracking-tight lg:text-s`}
        >
          {t('profile.accountTab.nextPayment')}
        </span>
        <span
          className={`w scroll-m-20 text-s col-span-2 md:col-span-1 lg:col-span-1 font-bold tracking-tight lg:text-s`}
        >
          {new Date(subscription!.currentPeriodEnd! * 1000).toUTCString()}
        </span>
      </div>
      <div className={`grid w-full grid-cols-4`} style={{ gridTemplateColumns: '1.25fr 1.75fr 1fr 2fr' }}>
        <span
          className={`w scroll-m-20 text-s col-span-2 md:col-span-1 lg:col-span-1 font-light tracking-tight lg:text-s`}
        >
          {t('profile.accountTab.paymentMethod')}
        </span>
        <span
          className={`w scroll-m-20 text-s col-span-2 md:col-span-1 lg:col-span-1 font-bold tracking-tight lg:text-s`}
        >
          {t('profile.accountTab.card')}
        </span>
      </div>
      {<CancelSubscriptionPopover subscription={subscription} setSubscription={setSubscription} />}
    </>
  );
}
