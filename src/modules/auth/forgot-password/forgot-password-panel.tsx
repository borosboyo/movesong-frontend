import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoading } from '@/shared/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';

export function ForgotPasswordPanel() {
  const navigate = useNavigate();
  const [loading] = useState(false);
  const progress = useLoading(loading);

  const handleContinueClick = () => {
    navigate('/movesong-frontend/forgot-password/otp');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Reset Your Password</CardTitle>
        </CardHeader>
        <CardContent>
          <div className={`grid gap-2`}>
            <div className={`grid w-full items-center`}>
              <div className={`flex flex-col space-y-1.5`}>
                <Input id={`email`} placeholder={'Email Address'}/>
              </div>
            </div>
            <LoadingButton
              onClick={handleContinueClick}
              loading={loading}
              progress={progress}
              buttonText="Continue with Email"
              className="w-full primaryButton"
            />
          </div>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
