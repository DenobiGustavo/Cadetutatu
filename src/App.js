import React from 'react';
import QuemSomos from "./QuemSomos/QuemSomos";
import { createBrowserRouter } from 'react-router-dom';
import Home from './PaginaPrincipal/home';
import Mapa from './PaginaPrincipal/mapa';
import DadosPage from './PaginaPrincipal/DadosPage';
import LayoutAcessivel from './Acessibilidade';

export const router = createBrowserRouter([{
    // Layout comum: VLibras, "pular para o conteudo" e titulo de cada pagina
    element: < LayoutAcessivel / > ,
    children: [{
            path: "/",
            element: < Home / >
        },
        {
            path: "quem-somos",
            element: < QuemSomos / > ,
        },
        {
            path: "mapa",
            element: < Mapa / > ,
        },
        {
            path: "dados",
            element: < DadosPage / > ,
        },
    ],
}]);
