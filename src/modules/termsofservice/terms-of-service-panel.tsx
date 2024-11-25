import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

export function TermsOfServicePanel() {
  // the hook is used, so the page will be re-rendered when the language is changed
  const { i18n } = useTranslation();
  // for linter
  console.log(i18n.language);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15 }}
    >
      <div className={`flex justify-center items-start w-full my-10`}>
        <Card className={`w-4/5 md:w-3/5`}>
          <CardHeader>
            <CardTitle className={`flex scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl`}><Trans i18nKey="termsOfService.header" /></CardTitle>
          </CardHeader>
          <CardContent className={`flex flex-col gap-5`}>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.firstHeader"/>
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.firstText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.secondHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.secondText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.thirdHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.thirdText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.fourthHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.fourthText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.fifthHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.fifthText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.sixthHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.sixthText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.seventhHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.seventhText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.eighthHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.eighthText" />
            </p>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-xl lg:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              <Trans i18nKey="termsOfService.ninthHeader" />
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-justify">
              <Trans i18nKey="termsOfService.ninthText" />
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
