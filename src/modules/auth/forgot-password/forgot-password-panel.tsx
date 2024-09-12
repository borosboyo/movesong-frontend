import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useNavigate } from 'react-router-dom';

export function ForgotPasswordPanel() {
  const navigate = useNavigate();

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
          <form className={`grid gap-2`}>
            <div className={`grid w-full items-center`}>
              <div className={`flex flex-col space-y-1.5`}>
                <Input id={`email`} placeholder={'Email Address'}/>
              </div>
            </div>
            <Button className={`primaryButton flex-row w-full gap-2`} onClick={handleContinueClick}><EmailIcon /> Continue with Email</Button>
          </form>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
