import React from 'react';
import QuemSomos from "./QuemSomos/QuemSomos";
import { createBrowserRouter } from 'react-router-dom';
import Home from './PaginaPrincipal/home';
import Mapa from './PaginaPrincipal/mapa';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "quem-somos",
    element: <QuemSomos/>,
  },
  {
    path: "mapa",
    element: <Mapa/>,
  },
]);
