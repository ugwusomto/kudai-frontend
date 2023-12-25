import React from 'react';

import App from './pages/app';
import { RoutesPath } from './constants/routes';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/page-not-found';
import Login from './pages/login/login';
import Register from './pages/register/register';

const router = createBrowserRouter([
  {
    path: RoutesPath.HOME,
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: RoutesPath.LOGIN,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: RoutesPath.LOGIN,
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: RoutesPath.CREATE_ACCOUNT,
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);

function Provider() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Provider;
