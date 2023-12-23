import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import About from './route/About';
import Registration from './route/Registration';
import { action as registrationAction } from './components/authentication/RegistrationForm'
import FirstAction from './route/FirstAction';
import RootLayout from './route/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/first-fetch', element: <FirstAction /> },
      { path: '/about', element: <About /> },
      { path: '/registration', element: <Registration />, action: registrationAction }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
