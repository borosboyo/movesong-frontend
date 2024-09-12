import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { useButtonTheme } from '@/core/theme/hooks/useButtonTheme.ts';
import { useNavigate } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';

export function LoginPasswordPanel() {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/movesong-frontend/login');
  }

  const handleLoginClick = () => {
    navigate('/movesong-frontend');
  }

  const handleForgotPasswordClick = () => {
    navigate('/movesong-frontend/forgot-password');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Log in to Movesong</CardTitle>
        </CardHeader>
        <CardContent>
          <form className={`grid gap-2`}>
            <div className={`grid w-full items-center`}>
              <div className={`flex flex-col space-y-1.5`}>
                <Input id={`name`} placeholder={`Password`} />
              </div>
            </div>
            <Button className={`w-full primaryButton`} onClick={handleLoginClick}>Log in</Button>
            <Button className={`w-full ${useButtonTheme()} transition-transform hover:scale-105`} onClick={handleReturnClick}>Log in with different account</Button>
          </form>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>

          <div className={`flex`}>
            <CardDescription>Forgot your password?
              <Button onClick={handleForgotPasswordClick} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>Click here</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
