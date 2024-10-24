import { Button } from '@/shared/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';
import { useTitleTheme } from '@/core/theme/hooks/useTitleTheme.ts';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleFaqClick = () => {
    navigate('/movesong-frontend/faq');
  };

  const handleContactClick = () => {
    navigate('/movesong-frontend/contact');
  }

  return (
    <footer className={`grid grid-cols-1 gap-5 py-6 w-full darkBg`}>
      <div className={`flex justify-center`}>
        <h1 className={`scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-6xl ${useTitleTheme()}`}>{t('footer.header')}</h1>
      </div>
      <div className={`flex justify-center`}>
        <h3 className={`scroll-m-20 text-2xl tracking-tight lg:text-md text-white`}>{t('footer.subtitle')}</h3>
      </div>
      <div className={`flex mt-2 gap-5 justify-center mx-2`}>
        <Button onClick={handleFaqClick} className={`primaryButton w-64 py-5 rounded-xl`}>
          <div className={`text-lg font-bold`}>{t('footer.faqButton')}</div>
        </Button>
        <Button onClick={handleContactClick} className={`primaryButton w-64 py-5 rounded-xl`}>
          <div className={`text-lg font-bold`}>{t('footer.contactUsButton')}</div>
        </Button>
      </div>
      <div className={`grid grid-cols-3 mt-10 mx-auto gap-26`}>
        <div className={`flex-col`}>
          <p className={`font-bold text-white`}>Movesong</p>
          <p className={`mt-3 text-white`}>{t('footer.homeText')}</p>
          <p className={`mt-3 text-white`}>{t('footer.registrationText')}</p>
          <p className={`mt-3 text-white`}>{t('footer.settingsText')}</p>
          <p className={`mt-3 text-white`}>{t('footer.syncedPlaylistsText')}</p>
        </div>
        <div className={`flex-col`}>
          <p className={`font-bold text-white`}>{t('footer.helpText')}</p>
          <p className={`mt-3 text-white`}>{t('footer.contactText')}</p>
          <p className={`mt-3 text-white`}>{t('footer.faqText')}</p>
        </div>
        <div className={`flex-col`}>
          <p className={`font-bold text-white`}>{t('footer.legalDocumentsText')}</p>
          <p className={`mt-3 text-white`}>{t('footer.termsOfUseText')}</p>
          <p className={`mt-3 text-white`}>{t('footer.privacyPolicyText')}</p>
        </div>
      </div>
    </footer>
  );
}
