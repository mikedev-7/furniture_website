import React from 'react';

// import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import data
import { newInStore } from '../data'
const NewItemsSlider = () => {
  return  (
  <Swiper grabCursor={true} breakpoints={{
     320: {
      slidesPerView: 2,
      spaceBetween: 18,
     },
      768: {
      slidesPerView: 3,
      spaceBetween: 20,
     },
  }}>
    {newInStore.products.map((product, index)=> {
      return ( 
         <SwiperSlide className='max-w-[265px]'  key={index}>
        <div className='relative'>
          <img src= {product.image.type} alt='' />
          <div className='absolute text-white bottom-[20px] w-full text-center text-[18px] lg:text-2xl font-medium capitalize'>
            {product.name}</div>
        </div>
      </SwiperSlide>
    );
    })}
  </Swiper>
  );
};

export default NewItemsSlider;
