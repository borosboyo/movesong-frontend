import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import DiamondIcon from '@/shared/icons/diamond-icon.tsx';
import { PanelContainer } from '@/shared/panel/panel-container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useLoading } from '@/shared/hooks/useLoading.tsx';
import { LoadingButton } from '@/shared/components/util/loading-button.tsx';
import { useAuth } from '@/shared/hooks/useAuth.tsx';

export default function PremiumPanel() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const progress = useLoading(loading);
  const { isLoggedIn } = useAuth();

  const handleMonthlySubscriptionNavigate = () => {
    isLoggedIn() ? navigate('/premium/monthly') : navigate('/movesong-frontend/login');
  };

  const handleYearlySubscriptionNavigate = () => {
    isLoggedIn() ? navigate('/premium/yearly') : navigate('/movesong-frontend/login');
  };

  return (
    <PanelContainer>
      <div className={`flex flex-col gap-4`}>
        <Card className={`w-[500px]`}>
          <CardHeader>
            <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Switch to Premium!</CardTitle>
          </CardHeader>
          <CardContent className={`flex-col grid gap-4`}>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Unlimited transfers</CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Playlist synchronization</CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Export to TXT / CSV</CardTitle>
          </CardContent>
          <CardFooter className={`flex-col grid gap-2 items-start`}>
            <LoadingButton
              onClick={handleMonthlySubscriptionNavigate}
              loading={loading}
              progress={progress}
              buttonText="$ 4.99 / month"
              className="w-full primaryButton"
            />
            <LoadingButton
              onClick={handleYearlySubscriptionNavigate}
              loading={loading}
              progress={progress}
              buttonText="$ 24.99 / year"
              className="w-full primaryButton"
            />
          </CardFooter>
        </Card>
        <Card className={`w-[500px]`}>
          <CardHeader>
            <CardTitle className={`flex scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl`}>Free package summary</CardTitle>
          </CardHeader>
          <CardContent className={`flex-col grid gap-4`}>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Max 500 song transfers</CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />No automatic synchronization</CardTitle>
            <CardTitle className={`flex flex-row gap-2 scroll-m-20 text-m font-bold tracking-tight lg:text-m`}><DiamondIcon />Export to TXT / CSV</CardTitle>
          </CardContent>
        </Card>
      </div>
    </PanelContainer>
  );
}
