import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterBuilder from './app-router.tsx';
import { ThemeProvider } from '../theme/theme-provider.tsx';
import { AuthProvider } from '@/shared/auth/auth-provider.tsx';
import { Toaster } from '@/shared/components/ui/toaster.tsx';

const App = () => {
  const routes = useMemo(() => RouterBuilder(), []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <RouterProvider router={createBrowserRouter(routes)}/>
        <Toaster/>
      </AuthProvider>
    </ThemeProvider>
    );
};
export default App;
