import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/shared/navbar/navbar.tsx';
import Footer from '@/shared/footer/footer.tsx';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/shared/components/ui/toaster.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from '@/core/auth/auth-provider.tsx';
import { ThemeProvider } from '@/core/theme/theme-provider.tsx';
import { CustomerIdProvider } from '@/modules/premium/customer-context.tsx';

const AppLayout = () => {
  const location = useLocation();
  const isSharePage = location.pathname.startsWith('/movesong-frontend/share');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <GoogleOAuthProvider clientId={`521481276614-tu63avvj00gj4bu318t8sue1bc1dm5g4.apps.googleusercontent.com`}>
          <CustomerIdProvider>
            <Suspense fallback={null}>
              <div className="flex flex-col h-screen">
                <Navbar />
                <AnimatePresence>
                  <Outlet />
                </AnimatePresence>
                {!isSharePage && <Footer />}
              </div>
            </Suspense>
            <Toaster />
          </CustomerIdProvider>
        </GoogleOAuthProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default React.memo(AppLayout);
