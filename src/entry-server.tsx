import { StrictMode } from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Router } from './core/app/router';

interface IRenderProps {
  path: string;
}
export const render = ({ path }: IRenderProps) => {
  return ReactDOMServer.renderToString(
    <StrictMode>
      <StaticRouter location={path}>
        <Router />
      </StaticRouter>
    </StrictMode>,
  );
};
