import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import Error from './core/error/error.component.tsx'
import './index.css'
import '@/core/translation/i18n-config.ts'

const router = createBrowserRouter([
    {
        path: "/movesong-frontend",
        element: <App/>,
        errorElement: <Error />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
