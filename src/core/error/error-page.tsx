import { useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { Button } from '@/shared/components/ui/button';
import { useTranslation } from 'react-i18next';

export default function ErrorPanel() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/movesong-frontend');
  }

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-9xl font-extrabold tracking-tight lg:text-9xl`}>
          {t('errorPage.header')}
        </h1>
        <p className={`text-2xl font-light tracking-tight lg:text-2xl`}>
          {t('errorPage.text')}
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleReturn}>
          {t('errorPage.buttonText')}
        </Button>
      </div>
    </PanelContainer>
  );
}
