import { useTranslation } from 'react-i18next';

export function FreeHeader() {
  const { t } = useTranslation();

  return (
    <div className={`flex justify-center items-center`}>
      <span className={`text-xl text-muted-foreground font-bold`}>
        {t('profile.accountTab.notPremium')}
      </span>
    </div>
  );
}
