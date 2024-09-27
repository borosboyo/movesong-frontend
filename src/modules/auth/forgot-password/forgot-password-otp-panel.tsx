import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/shared/components/ui/input-otp.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoading } from '@/shared/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';

export function ForgotPasswordOtpPanel() {
  const navigate = useNavigate();
  const [loading] = useState(false);
  const progress = useLoading(loading);
  const { toast } = useToast();

  const handleResetPassword = () => {
    navigate('/movesong-frontend/forgot-password/change');
  };

  const handleResendEmail = () => {
    toast({
      title: 'Yay!',
      description: 'Confirmation email has been resent.',
      variant: 'success',
    });
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
            <InputOTP maxLength={6}>
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
          </div>
          <LoadingButton
            onClick={handleResetPassword}
            loading={loading}
            progress={progress}
            buttonText="Reset Password"
            className="w-full primaryButton mt-5"
          />
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
