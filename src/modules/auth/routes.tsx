import { RouteObject } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { SignupPage } from './pages/signup'

export const authRoutes: RouteObject[] = [
  {
    path: 'auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
]
