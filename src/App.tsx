import React from 'react';
import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/home/Home';
import AppLayout from './layouts/AppLayout';
import Dashboard from './pages/dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
