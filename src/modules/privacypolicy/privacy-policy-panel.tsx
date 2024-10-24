import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';

export function PrivacyPolicyPanel() {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15 }}
    >
      <div className={`flex justify-center items-start w-full my-10`}>
        <Card className={`w-3/5`}>
          <CardHeader>
            <CardTitle className={`flex scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl`}>
              <Trans i18nKey="privacyPolicy.header" />
            </CardTitle>
          </CardHeader>
          <CardContent className={`flex flex-col gap-5`}>
            <p className="leading-7 [&:not(:first-child)]:mt-2">
              <Trans i18nKey="privacyPolicy.text" />
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
