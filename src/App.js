import React from 'react';
import Header from './PaginaPrincipal/header';
import Titulo from './PaginaPrincipal/titulo';
import Body from './PaginaPrincipal/body';
import Footer from './PaginaPrincipal/footer';
import QuemSomos from './QuemSomos/QuemSomos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';


function App() {
  return (
    <div className="flex flex-col">
     <div className="h-screen">
        <div className='h-1/5 sm:h-1/5'>
        <Titulo/>
        </div>
        <Header />
      <div className='h-4/5 sm:h-3/4'>
      <Body className="flex-grow"/>
      <AppRoutes/>
     </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;
