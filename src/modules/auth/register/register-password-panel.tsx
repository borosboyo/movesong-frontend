import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useButtonTheme } from '@/core/theme/hooks/useButtonTheme.ts';
import { useNavigate } from 'react-router-dom';

export function RegisterPasswordPanel() {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/movesong-frontend/register');
  }

  const handleRegisterClick = () => {
    navigate('/movesong-frontend/register/confirm');
  }

  const handleLoginClick = () => {
    navigate('/movesong-frontend/login');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Create Your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className={`grid gap-2`}>
            <div className={`grid w-full items-center gap-3`}>
              <div className={`flex flex-col space-y-1.5`}>
                <Input id={`name`} placeholder={'Username'} />
              </div>
              <div className={`flex flex-col space-y-1.5`}>
                <Input id={`password`} placeholder={'Password'} />
              </div>
              <div className={`flex flex-col space-y-1.5`}>
                <Input id={`confirmPassword`} placeholder={'Confirm Password'} />
              </div>
            </div>
            <Button className={`primaryButton flex-row w-full gap-2`} onClick={handleRegisterClick}>Register</Button>
            <Button className={`w-full ${useButtonTheme()} transition-transform hover:scale-105`} onClick={handleReturnClick}>Register with different email</Button>
          </form>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex`}>
            <CardDescription>
              Already have an account?
              <Button onClick={handleLoginClick} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>Log in</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
