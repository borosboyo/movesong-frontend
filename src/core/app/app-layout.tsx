import React, { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/shared/navbar/navbar.tsx';
import Footer from '@/shared/footer/footer.tsx';
import { AnimatePresence } from 'framer-motion';

const AppLayout = () => {
  const isSharePage = location.pathname === '/movesong-frontend/share';

  return (
    <Suspense fallback={null}>
      <div className="flex flex-col h-screen">
        {!isSharePage && <Navbar />}
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
        {!isSharePage && <Footer />}
        <ScrollRestoration />
      </div>
    </Suspense>
  );
};

export default React.memo(AppLayout);
