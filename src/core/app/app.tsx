import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouterBuilder from './app-router.tsx';

const App = () => {
  const routes = useMemo(() => RouterBuilder(), []);

  return <RouterProvider router={createBrowserRouter(routes)} />;
};
export default App;
