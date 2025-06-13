import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion.tsx';
import { useTranslation } from 'react-i18next';

export function FaqAccordion() {
  const { t } = useTranslation();

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{t('faq.item1.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item1.answer')}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>{t('faq.item2.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item2.answer')}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>{t('faq.item3.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item3.answer')}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>{t('faq.item4.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item4.answer')}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>{t('faq.item5.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item5.answer')}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>{t('faq.item6.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item6.answer')}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>{t('faq.item7.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item7.answer')}</AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>{t('faq.item8.question')}</AccordionTrigger>
        <AccordionContent>{t('faq.item8.answer')}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
