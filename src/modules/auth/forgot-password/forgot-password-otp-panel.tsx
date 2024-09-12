import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/shared/components/ui/input-otp.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useNavigate } from 'react-router-dom';

export function ForgotPasswordOtpPanel() {
  const navigate = useNavigate();

  const handleResetPassword = () => {
    navigate('/movesong-frontend/forgot-password/change');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Email Verification</CardTitle>
          <CardDescription>Keep this window open and type in the security code we just sent to test@test.com.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
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
          </form>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <Button className={`flex-row w-full gap-2 primaryButton`} onClick={handleResetPassword}>Reset Password</Button>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
