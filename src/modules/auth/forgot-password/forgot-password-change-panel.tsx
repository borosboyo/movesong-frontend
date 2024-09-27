import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { PasswordInput } from '@/shared/components/ui/password-input.tsx';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useState } from 'react';
import { useLoading } from '@/shared/hooks/useLoading.tsx';
import { useToast } from '@/shared/components/ui/use-toast.ts';

export function ForgotPasswordChangePanel() {
  const navigate = useNavigate();
  const [loading] = useState(false);
  const progress = useLoading(loading);
  const { toast } = useToast();

  const handleChangePassword = () => {
    toast({
      title: 'Yay!',
      description: 'Password has been changed successfully. You can now log in with your new password.',
      variant: 'success',
    });
    navigate('/movesong-frontend');
  }

  return (
    <PanelContainer>
      <Card className={`w-[400px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Change your password</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`grid gap-2`}>
            <div className={`grid w-full items-center gap-3`}>
              <div className={`flex flex-col space-y-1.5`}>
                <PasswordInput id={`password`} placeholder={'New password'} />
              </div>
              <div className={`flex flex-col space-y-1.5`}>
                <PasswordInput id={`confirmPassword`} placeholder={'Confirm new password'} />
              </div>
            </div>
            <LoadingButton
              onClick={handleChangePassword}
              buttonText="Change password"
              className="w-full primaryButton"
              loading={loading}
              progress={progress}
            />
          </div>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
