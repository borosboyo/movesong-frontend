import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterBuilder from './app-router.tsx';
import { ThemeProvider } from '../theme/theme-provider.tsx';

const App = () => {
  const routes = useMemo(() => RouterBuilder(), []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={createBrowserRouter(routes)} />
    </ThemeProvider>
    );
};
export default App;
