import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/components/util/panel-container';

export default function PremiumCancelPanel() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/movesong-frontend');
  };

  return (
    <PanelContainer>
      <Card className={`w-[500px]`}>
        <CardHeader>
          <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
            {t('premium.cancelPanel.text')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t('premium.cancelPanel.text')}</p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleBack} className="primaryButton">
            {t('premium.cancelPanel.buttonText')}
          </Button>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
