// src/modules/auth/already-logged-in-panel.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button.tsx';
import { PanelContainer } from '@/shared/components/util/panel-container.tsx';
import { RocketIcon } from '@/shared/icons/rocket-icon.tsx';
import { useTranslation } from 'react-i18next';

const AlreadyLoggedInPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
          {t('alreadyLoggedIn.text')}
        </p>
        <Button className={`primaryButton text-lg py-6 px-8`} onClick={handleReturn}>
          {t('alreadyLoggedIn.buttonText')}
        </Button>
      </div>
    </PanelContainer>
  );
};

export default AlreadyLoggedInPage;
