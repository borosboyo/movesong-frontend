import { Button } from '@/shared/components/ui/button.tsx';
import { useTranslation } from 'react-i18next';
import { useTitleTheme } from '@/core/theme/hooks/useTitleTheme.ts';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/core/hooks/useAuth.tsx';

export default function Footer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useAuth();

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
      <div className={`grid grid-cols-3 mt-10 mx-auto gap-24`}>
        <div className={`flex flex-col`}>
          <p className={`font-bold text-white`}>Movesong</p>
          <Button onClick={() => navigate('/movesong-frontend/')} variant={`link`} className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.homeText')}</Button>
          {user
            ? <Button onClick={() => navigate('/movesong-frontend/transform')} variant={`link`}  className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.transformText')}</Button>
            : <Button onClick={() => navigate('/movesong-frontend/register')} variant={`link`}  className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.registrationText')}</Button>
          }
          <Button onClick={() => navigate('/movesong-frontend/profile')} variant={`link`}  className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.settingsText')}</Button>
          <Button onClick={() => navigate('/movesong-frontend/premium')} variant={`link`}  className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.packagesText')}</Button>
        </div>
        <div className={`flex flex-col`}>
          <p className={`font-bold text-white`}>{t('footer.helpText')}</p>
          <Button onClick={() => navigate('/movesong-frontend/contact')} variant={`link`} className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.contactText')}</Button>
          <Button onClick={() => navigate('/movesong-frontend/faq')} variant={`link`}  className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.faqText')}</Button>
        </div>
        <div className={`flex flex-col text-left`}>
          <p  className={`font-bold text-white`}>{t('footer.legalDocumentsText')}</p>
          <Button onClick={() => navigate('/movesong-frontend/terms-of-service')} variant={`link`} className={`mt-3 text-white p-0 inline-flex justify-start w-0`}>{t('footer.termsOfUseText')}</Button>
          <Button onClick={() => navigate('/movesong-frontend/privacy-policy')} variant={`link`} className={`mt-3 text-white p-0  inline-flex justify-start w-0`}>{t('footer.privacyPolicyText')}</Button>
        </div>
      </div>
    </footer>
  );
}
