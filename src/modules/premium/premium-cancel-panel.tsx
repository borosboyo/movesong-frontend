import { useNavigate, useRouteError } from 'react-router-dom';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { Button } from '@/shared/components/ui/button.tsx';
import { CrossCircledIcon } from '@/shared/icons/cross-circled-icon.tsx';

export default function PremiumCancelPanel() {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/movesong-frontend');
  }

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-9xl font-extrabold tracking-tight lg:text-9xl`}>
          <CrossCircledIcon size={100} />
        </h1>
        <p className={`text-2xl font-light tracking-tight lg:text-2xl`}>
          Your premium subscription was not successful. Please try again later.
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
