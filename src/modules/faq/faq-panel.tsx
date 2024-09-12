import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { FaqAccordion } from '@/modules/faq/faq-accordion.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';

export function FaqPanel() {
  return (
    <PanelContainer>
      <Card className={`w-3/5`}>
        <CardHeader>
          <CardTitle className={`flex scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl`}>Frequently Asked Questions</CardTitle>
          <CardDescription className={`text-xl`}>Nullam sed ipsum in odio euismod mollis at in orci. Cras eu molestie turpis. Integer ultrices urna vitae tellus ultrices, egestas tristique nisl volutpat.
            Nulla facilisi. </CardDescription>
        </CardHeader>
        <CardContent className={`flex flex-col gap-5`}>
          <FaqAccordion/>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}

