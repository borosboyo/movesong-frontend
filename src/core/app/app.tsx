import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterBuilder from './app-router.tsx';
import { ThemeProvider } from '../theme/theme-provider.tsx';
import { AuthProvider } from '@/core/auth/auth-provider.tsx';
import { Toaster } from '@/shared/components/ui/toaster.tsx';
import { CustomerIdProvider } from '@/modules/premium/customer-context.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

const App = () => {
  const routes = useMemo(() => RouterBuilder(), []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <GoogleOAuthProvider clientId={`391522306160-qa3lb3m09pgrr9dd3549sufuegajldmk.apps.googleusercontent.com`}>
          <CustomerIdProvider>
            <RouterProvider router={createBrowserRouter(routes)}/>
            <Toaster/>
          </CustomerIdProvider>
        </GoogleOAuthProvider>
      </AuthProvider>
    </ThemeProvider>
    );
};
export default App;
