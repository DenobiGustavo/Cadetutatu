import React from 'react';
import SiteFooter from '../../components/layout/SiteFooter';
import SiteHeader from '../../components/layout/SiteHeader';
import TopBanner from '../../components/layout/TopBanner';
import HomeContent from './HomeContent';

const HomePage = () => {
  return (
    <div className="bg flex flex-col">
     <div className='h-screen'>
        <div className='sm:h-1/5'>
        <TopBanner className="pb-8"/>
        <SiteHeader/>
        </div>
      <div className="grid h-4/5">
      <HomeContent className="items-center justify-items-center flex flex-grow"/>
     </div>
    </div>
      <SiteFooter />
    </div>
  );
};

export default HomePage;
