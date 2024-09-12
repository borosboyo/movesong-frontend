import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Input } from '@/shared/components/ui/input.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import EmailIcon from '@/shared/icons/email-icon.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { useNavigate } from 'react-router-dom';

export function LoginEmailPanel() {
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate('/movesong-frontend/login/password');
  }

  const handleRegisterClick = () => {
    navigate('/movesong-frontend/register');
  }

  return (
    <PanelContainer>
      <Card className={`w-[350px]`}>
        <CardHeader>
          <CardTitle className={`flex justify-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Log in to Movesong</CardTitle>
        </CardHeader>
        <CardContent className={`mb-0`}>
          <form>
            <div className={`grid w-full items-center`}>
              <div className={`flex flex-col space-y-1.5`}>
                <Input id={`name`} placeholder={`Email Address`} />
              </div>
            </div>
            <Button className={`primaryButton flex-row w-full gap-2 mt-2`} onClick={handleContinueClick}><EmailIcon />Log in with Email</Button>
          </form>
        </CardContent>
        <CardFooter className={`flex-col grid gap-2 items-start`}>
          <div className={`flex`}>
            <CardDescription>
              Don&apos;t have an account?
              <Button onClick={handleRegisterClick} className={`p-0 ml-1`} variant={`link`}>
                <p className={`sm:text-s`}>Register now</p>
              </Button>
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
    </PanelContainer>
  );
}
