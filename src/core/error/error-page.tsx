import { useNavigate, useRouteError } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { Button } from '@/shared/components/ui/button';

export default function ErrorPanel() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/movesong-frontend');
  }

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-9xl font-extrabold tracking-tight lg:text-9xl`}>404</h1>
        <p className={`text-2xl font-light tracking-tight lg:text-2xl`}>
          The page you were looking for could not be found.
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleReturn}>Take me back</Button>
        <i>
          {(error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </div>
    </PanelContainer>
  );
}
