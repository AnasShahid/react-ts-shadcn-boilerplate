import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/home';
import AppLayout from '@/layouts/app-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      }
    ]
  }
]);
