import { createBrowserRouter } from 'react-router';
import { App } from './app';
import { ComingSoon } from './comingSoon';
import { Satisfactory } from './satisfactory';

export const router = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
  {
    path: '/satisfactory',
    element: <Satisfactory />,
  },
  {
    path: '/factorio',
    element: <ComingSoon />,
  },
  {
    path: '/foundry',
    element: <ComingSoon />,
  },
]);
