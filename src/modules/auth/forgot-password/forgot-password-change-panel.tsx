import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PasswordInput } from '@/shared/components/ui/password-input.tsx';
import { useNavigate } from 'react-router-dom';

export function ForgotPasswordChangePanel() {
  const navigate = useNavigate();

  const handleChangePassword = () => {
    navigate('/movesong-frontend');
  }

  return (
    <PanelContainer>
      <Card className={`w-[400px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Change your password</CardTitle>
        </CardHeader>
        <CardContent>
          <form className={`grid gap-2`}>
            <div className={`grid w-full items-center gap-3`}>
              <div className={`flex flex-col space-y-1.5`}>
                <PasswordInput id={`password`} placeholder={'New password'} />
              </div>
              <div className={`flex flex-col space-y-1.5`}>
                <PasswordInput id={`confirmPassword`} placeholder={'Confirm new password'} />
              </div>
            </div>
            <Button className={`primaryButton flex-row w-full gap-2`} onClick={handleChangePassword}>Change password</Button>
          </form>
        </CardContent>
      </Card>
    </PanelContainer>
  );
}
