import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

export function PrivacyPolicyPanel() {
  // the hook is used, so the page will be re-rendered when the language is changed
  const { i18n } = useTranslation();
  // for linter
  console.log(i18n.language);
  return (
    <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.15 }}>
      <div className={`flex justify-center items-start w-full my-10`}>
        <Card className={`w-4/5 md:w-3/5`}>
          <CardHeader>
            <CardTitle
              className={`flex scroll-m-20 text-lg font-extrabold tracking-tight lg:text-5xl text-center lg:text-left`}
            >
              <Trans i18nKey="privacyPolicy.header" />
            </CardTitle>
          </CardHeader>
          <CardContent className={`flex flex-col gap-5`}>
            <p className="leading-7 [&:not(:first-child)]:mt-2 text-md">
              <Trans i18nKey="privacyPolicy.text" />
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
