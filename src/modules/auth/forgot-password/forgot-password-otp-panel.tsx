import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/shared/components/ui/input-otp.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoading } from '@/core/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import forgotPasswordService from '@/modules/auth/forgot-password/forgot-password-service.ts';
import { useHandleError } from '@/core/hooks/useHandleError.ts';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/shared/components/ui/form.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';

const ForgotPasswordSchema = z.object({
  pin: z
    .string()
    .min(6, { message: "Your one-time password must be 6 characters.", })
})

export function ForgotPasswordOtpPanel() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const { toast } = useToast();
  const handleErrors = useHandleError();
  const email = location?.state?.email;

  const forgotPasswordForm = useForm<z.infer<typeof ForgotPasswordSchema>>({
    resolver: zodResolver(ForgotPasswordSchema),
    defaultValues: {
      pin: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof ForgotPasswordSchema>) => {
    setLoading(true);
    try {
      const resp = await forgotPasswordService.checkForgotPasswordToken(email, values.pin);
      if(resp.success) {
        setLoading(false);
        navigate('/movesong-frontend/forgot-password/change' , { state: { email } });
      } else {
        setLoading(false);
        toast({
          title: 'Password reset failed.',
          description: 'Please try again with a valid email address.',
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

  const handleResendEmail = async () => {
    try {
      const resp = await forgotPasswordService.resendForgotPassword(email);
      if(resp.success) {
        toast({
          title: 'Yay!',
          description: 'Confirmation email has been resent.',
          variant: 'success',
        });
      } else {
        toast({
          title: 'Uh oh! Something went wrong.',
          description: 'Could not resend email. Please try again.',
        });
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Email Verification</CardTitle>
          <CardDescription>Keep this window open and type in the security code we just sent to test@test.com.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`flex justify-center`}>
            <Form {...forgotPasswordForm}>
              <form onSubmit={forgotPasswordForm.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={forgotPasswordForm.control}
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
                  onClick={forgotPasswordForm.handleSubmit(onSubmit)}
                  loading={loading}
                  progress={progress}
                  buttonText="Change password"
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
              Didn&apos;t get the code?
              <Button onClick={handleResendEmail} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>Resend email</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
