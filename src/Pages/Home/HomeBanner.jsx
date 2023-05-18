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
            <img className='w-screen h-screen' src={banner1} alt="" />
            <div className='absolute top-36 left-[18rem] text-center'>
              <h3 className='text-8xl font-bold text-indigo-500'>Kids Toys & Gift Shop</h3>
              <h4 className='text-white text-3xl font-semibold mt-6'>Get Up To 30% Off Available</h4>
              <button className='btn btn-secondary mt-6'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className='relative'>
            <img className='w-screen h-screen' src={banner2} alt="" />
            <div className='absolute top-36 left-[18rem] text-center'>
              <h3 className='text-8xl font-bold text-white'>New Toys For Your Kids</h3>
              <h4 className='text-white text-3xl font-semibold mt-6'>Get Up To 20% Off Available</h4>
              <button className='btn btn-secondary mt-6'>Shop Now</button>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default HomeBanner;