import { createBrowserRouter } from 'react-router';
import { App } from './app';
import { ComingSoon } from './comingSoon';
import { Satisfactory } from './satisfactory';
import { MainLayout } from './mainLayout';
import { RootErrorBoundary } from './errorBoundary';

export const router = createBrowserRouter([
  {
    index: true,
    element: <App />,
  },
  {
    Component: MainLayout,
    ErrorBoundary: RootErrorBoundary,
    children: [
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
    ],
  },
]);
