import React from 'react';
import QuemSomos from "./QuemSomos/QuemSomos";
import { createBrowserRouter } from 'react-router-dom';
import Home from './PaginaPrincipal/home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "quem-somos",
    element: <QuemSomos/>,
  },
]);
