// import React from 'react';

// // import swiper from react components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import swiper styles
// import 'swiper/modules';

// // import 'swiper/modules/navigation'; // Import autoplay styles

// // import required modules from the Swiper core package
// import { Navigation, Autoplay } from 'swiper';

// import { testimonial } from '../data';

// const TestimonialSlider = () => {
//   return (
//     <Swiper
//       className='testimonialSlider' // Fixed typo from classNmae to className
//       modules={[Navigation, Autoplay]}
//       navigation
//       autoplay={{
//         delay: 3000, // Adjust the delay as needed
//         disableOnInteraction: false,
//       }}
//     >
//       {testimonial.persons.map((person, index) => {
//         // destructure person
//         const { avatar, name, occupation, message } = person;
//         return (
//           <SwiperSlide key={index}>
//             <div className='flex flex-col min-h-[250px]'>
//               <div className='flex items-center gap-x-5 mb-9'>
//                 {/* image */}
//                 <img src={avatar.type} alt='' /> {/* Not touching the avatar code */}
//                 <div>
//                   <div className='text-xl font-semibold'>{name}</div>
//                   <div className='text-gray-500'>{occupation}</div>
//                 </div>
//               </div>
//               {/* text */}
//               <div className='text-xl max-w-[570px]'>{message}</div>
//             </div>
//           </SwiperSlide>
//         );
//       })}
//     </Swiper>
//   );
// };

// export default TestimonialSlider;
