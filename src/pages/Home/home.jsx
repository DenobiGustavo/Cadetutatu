import React from 'react';
import Titulo from './titulo';
import Body from './body';
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"


const Home = () => {
  return (
    <div className="bg flex flex-col">
     <div className='h-screen'>
        <div className='sm:h-1/5'>
        <Titulo className="pb-8"/>
        <Header/>
        </div>
      <div className="grid h-4/5">
      <Body className="items-center justify-items-center flex flex-grow"/>
     </div>
    </div>
      <Footer />
    </div>
  );
};

export default Home;