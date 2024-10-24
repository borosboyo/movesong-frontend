import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { PasswordInput } from '@/shared/components/ui/password-input.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import forgotPasswordService from '@/modules/auth/forgot-password/forgot-password-service.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { hasNumbers, hasSpecialCharacters, hasUppercaseCharacters } from '@/core/util/zod-util.ts';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form.tsx';
import { useTranslation } from 'react-i18next';

const ForgotPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .refine(hasSpecialCharacters, { message: 'Password must contain at least one special character' })
    .refine(hasUppercaseCharacters, { message: 'Password must contain at least one uppercase letter' })
    .refine(hasNumbers, { message: 'Password must contain at least one number' }),
  confirmNewPassword: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .refine(hasSpecialCharacters, { message: 'Password must contain at least one special character' })
    .refine(hasUppercaseCharacters, { message: 'Password must contain at least one uppercase letter' })
    .refine(hasNumbers, { message: 'Password must contain at least one number' }),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
  message: 'Passwords do not match',
  path: ['confirmNewPassword'], // This will attach the error to the confirmPassword field
});

export function ForgotPasswordChangePanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const { toast } = useToast();
  const handleErrors = useHandleError();
  const email = location?.state?.email;
  const { t } = useTranslation();

  const forgotPasswordForm = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof ForgotPasswordSchema>) => {
    setLoading(true);
    try {
      const resp = await forgotPasswordService.saveForgotPassword(email, values.newPassword);
      if (resp.success) {
        setLoading(false);
        toast({
          title: t('auth.forgotPassword.changePanel.successToast.title'),
          description: t('auth.forgotPassword.changePanel.successToast.description'),
          variant: 'success',
        });
        navigate('/movesong-frontend');
      } else {
        setLoading(false);
        toast({
          title: t('auth.forgotPassword.changePanel.errorToast.title'),
          description: t('auth.forgotPassword.changePanel.errorToast.description'),
          variant: 'destructive',
        });
      }
    } catch (error) {
      setLoading(false);
      handleErrors(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PanelContainer>
      <Card className={`w-[400px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>
            {t('auth.forgotPassword.changePanel.header')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...forgotPasswordForm}>
            <form onSubmit={forgotPasswordForm.handleSubmit(onSubmit)} className="space-y-2">
              <FormField
                control={forgotPasswordForm.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput placeholder={t('auth.forgotPassword.changePanel.passwordInputPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={forgotPasswordForm.control}
                name="confirmNewPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <PasswordInput placeholder={t('auth.forgotPassword.changePanel.confirmPasswordInputPlaceholder')} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <LoadingButton
                onClick={forgotPasswordForm.handleSubmit(onSubmit)}
                loading={loading}
                progress={progress}
                buttonText={t('auth.forgotPassword.changePanel.buttonText')}
                className="w-full primaryButton"
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
