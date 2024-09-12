import React, { Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '@/shared/navbar/navbar.tsx';
import Footer from '@/shared/footer/footer.tsx';
import { AnimatePresence } from 'framer-motion';

const AppLayout = () => {
  return (
    <Suspense fallback={null}>
      <div className="flex flex-col h-screen">
        <Navbar />
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
        <Footer />
        <ScrollRestoration />
      </div>
    </Suspense>
  );
};

export default React.memo(AppLayout);
