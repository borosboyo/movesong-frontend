import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { FaqAccordion } from '@/modules/faq/faq-accordion.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { useTranslation } from 'react-i18next';

export function FaqPanel() {
  const { t } = useTranslation();
  return (
    <PanelContainer>
      <Card className={`w-4/5 md:w-3/5`}>
        <CardHeader>
          <CardTitle className={`flex scroll-m-20 text-2xl text-center lg:text-left font-extrabold tracking-tight lg:text-5xl`}>{t('faq.header')}</CardTitle>
          <CardDescription className={`text-md lg:text-xl`}>
            {t('faq.text')}
          </CardDescription>
        </CardHeader>
        <CardContent className={`flex flex-col gap-5`}>
          <FaqAccordion/>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}

