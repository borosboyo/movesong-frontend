import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import forgotPasswordService from '@/modules/auth/forgot-password/forgot-password-service.ts';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useTranslation } from 'react-i18next';

const ForgotPasswordSchema = z.object({
  email: z.string().min(2, { message: 'Email is invalid.' }).email(),
});

export function ForgotPasswordEmailPanel() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const handleError = useHandleError();
  const { toast } = useToast();
  const { t } = useTranslation();

  const forgotPasswordForm = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof ForgotPasswordSchema>) => {
    setLoading(true);
    try {
      const resp = await forgotPasswordService.forgotPassword(values.email);
      if (resp.success) {
        setLoading(false);
        navigate('/movesong-frontend/forgot-password/otp', { state: { email: values.email } });
      } else {
        setLoading(false);
        toast({
          title: t('auth.forgotPassword.emailPanel.errorToast.title'),
          description: t('auth.forgotPassword.emailPanel.errorToast.description'),
          variant: 'destructive',
        });
      }
    } catch (error) {
      setLoading(false);
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
            {t('auth.forgotPassword.emailPanel.header')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...forgotPasswordForm}>
            <form onSubmit={forgotPasswordForm.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={forgotPasswordForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder={t('auth.forgotPassword.emailPanel.emailInputPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoadingButton
                onClick={forgotPasswordForm.handleSubmit(onSubmit)}
                loading={loading}
                progress={progress}
                buttonText={t('auth.forgotPassword.emailPanel.buttonText')}
                className="w-full primaryButton"
                icon={<EmailIcon />}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
