// src/modules/auth/already-logged-in-panel.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/panel/panel-container.tsx';
import { RocketIcon } from '@/shared/icons/rocket-icon.tsx';

const AlreadyLoggedInPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/movesong-frontend');
  };

  return (
    <PanelContainer>
      <div className={`flex flex-col items-center gap-8`}>
        <h1 className={`text-9xl font-extrabold tracking-tight lg:text-9xl`}>
          <RocketIcon size={100} />
        </h1>
        <p className={`text-2xl font-light tracking-tight lg:text-2xl`}>
          The page you were looking for could not be found.
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleReturn}>Take me back</Button>
      </div>
    </PanelContainer>
  );
};

export default AlreadyLoggedInPage;
