import React from 'react';
import Header from './header';
import Titulo from './titulo';
import Body from './body';
import Footer from './footer';


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
     </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;
