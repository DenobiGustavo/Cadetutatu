import React from 'react';
import QuemSomos from "./QuemSomos/QuemSomos";
import { createBrowserRouter } from 'react-router-dom';
import Home from './PaginaPrincipal/home';
import Mapa from './PaginaPrincipal/mapa';
import Dados2 from './PaginaPrincipal/dados2';
import DadosPage from './PaginaPrincipal/DadosPage';

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
  {
    path: "dados",
    element: <DadosPage/>,
  },
]);
