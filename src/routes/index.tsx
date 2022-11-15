import { DashboardLayout } from 'layouts/dashboard';
import { HomePage } from 'pages/HomePage';
import { LoginPage } from 'pages/LoginPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routes = [
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: '',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
