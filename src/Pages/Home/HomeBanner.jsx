import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import { Autoplay, Pagination, Navigation } from 'swiper';




const HomeBanner = () => {

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slider 1 */}
        <SwiperSlide>
          <div className='relative'>
            <img className='lg:w-screen lg:h-screen brightness-50' src={banner1} alt="" />

            <div className='absolute top-8 lg:top-36 left-[4rem] lg:left-[18rem] text-center'>
              <h3 className='text-2xl lg:text-8xl font-bold text-white'>Kids Toys & Gift Shop</h3>
              <h4 className='text-white text-md lg:text-3xl font-semibold mt-3 lg:mt-6'>Get Up To 30% Off Available</h4>
              <button className='md:btn md:btn-secondary btn-secondary py-1 px-2 rounded-md mt-6'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className='relative'>
            <img className='lg:w-screen lg:h-screen brightness-50' src={banner2} alt="" />

            <div className='absolute top-8 lg:top-36 left-[4rem] lg:left-[18rem] text-center'>
              <h3 className='text-2xl lg:text-8xl font-bold text-white'>New Toys For Your Kids</h3>
              <h4 className='text-white text-md lg:text-3xl font-semibold mt-3 lg:mt-6'>Get Up To 20% Off Available</h4>
              <button className='md:btn md:btn-secondary btn-secondary py-1 px-2 rounded-md mt-6'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HomeBanner;