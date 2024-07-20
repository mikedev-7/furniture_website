import React from 'react';

// import data
import { hero } from '../data'; 

// import components
import Stats from '../components/Stats'; // Corrected import

const HeroComponent = () => { 
  // destructure hero
  const { title, subtitle, buttonText } = hero;
  return (
    <section className='h-[850px] w-full bg-hero bg-right bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28 '>
      <div className='container mx-auto text-center'>
        {/* title */}
        <h1 className='text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px]'>{title}</h1>
        {/* subtitle */}
        <h2 className='mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl'>{subtitle}</h2>
        {/* eta button */}
        <button className='bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition
          lg:px-[80px] lg:py-[16px] lg:mb-[194px]'>
            {buttonText}
        </button>
        {/* stats */}
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
