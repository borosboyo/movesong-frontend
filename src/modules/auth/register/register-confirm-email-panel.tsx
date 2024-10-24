import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/shared/components/ui/input-otp.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import registerService from '@/modules/auth/register/register-service.ts';
import { useTranslation } from 'react-i18next';
import { useHandleError } from '@/core/hooks/useHandleError.ts';

const ConfirmSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function RegisterConfirmEmailPanel() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const { toast } = useToast();
  const { t } = useTranslation();
  const handleError = useHandleError();
  const location = useLocation();
  const userEmail = location?.state?.email;

  const confirmForm = useForm<z.infer<typeof ConfirmSchema>>({
    resolver: zodResolver(ConfirmSchema),
    defaultValues: {
      pin: "",
    },
  })

  async function onSubmit(values: z.infer<typeof ConfirmSchema>) {
    setLoading(true);
    registerService.enable(values.pin).then(() => {
      toast({
        title: t('auth.register.confirmEmailPanel.successToast.title'),
        description: t('auth.register.confirmEmailPanel.successToast.description'),
        variant: 'success',
      });
      setLoading(false);
      navigate('/movesong-frontend/');
    }).catch((error) => handleError(error)).finally(() => setLoading(false));
  }

  const handleResendEmail = () => {
    setLoading(true);
    registerService.resendEnable(userEmail).then(() => {
      toast({
        title: t('auth.register.confirmEmailPanel.resendEmailSuccessToast.title'),
        description: t('auth.register.confirmEmailPanel.resendEmailSuccessToast.description'),
        variant: 'success',
      });
    }).catch((error) => handleError(error)).finally(() => setLoading(false));
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
            {t('auth.register.confirmEmailPanel.header')}
          </CardTitle>
          <CardDescription>
            {t('auth.register.confirmEmailPanel.text')} test@test.com.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`flex justify-center`}>
            <Form {...confirmForm}>
              <form onSubmit={confirmForm.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={confirmForm.control}
                  name="pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <InputOTP maxLength={6} {...field}>
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <LoadingButton
                  onClick={confirmForm.handleSubmit(onSubmit)}
                  loading={loading}
                  progress={progress}
                  buttonText={t('auth.register.confirmEmailPanel.buttonText')}
                  className="w-full primaryButton"
                  icon={<EmailIcon />}
                />
              </form>
            </Form>
          </div>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex`}>
            <CardDescription>
              {t('auth.register.confirmEmailPanel.resendEmailText')}
              <Button onClick={handleResendEmail} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>{t('auth.register.confirmEmailPanel.resendEmailButtonText')}</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  )
}
