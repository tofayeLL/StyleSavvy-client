
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import AuthProviders from './Providers/AuthProviders';
import { ToastContainer} from 'react-toastify';









createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
    <ToastContainer />
  </React.StrictMode>,
)
