import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layouts/root-layout';
import { authRoutes } from '@/modules/auth';
import { pricingRoutes } from '@/modules/pricing';
import HomePage from '@/pages/home';
import { NotFoundPage } from '@/pages/error/not-found';
import { UnauthorizedPage } from '@/pages/error/unauthorized';
import { ServerErrorPage } from '@/pages/error/server-error';
import { HeroSectionDemo } from '@/components/blocks/hero-section-demo';

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HeroSectionDemo />,
      },
      ...authRoutes,
      ...pricingRoutes,
      {
        path: '401',
        element: <UnauthorizedPage />,
      },
      {
        path: '500',
        element: <ServerErrorPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
