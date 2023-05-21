import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";

const PopularToys = () => {
    return (
        <div className="px-16 my-10">
            <h1 className="text-center text-5xl font-semibold my-3">Explore Popular Toys</h1>
            <Swiper data-aos="fade-up"
                data-aos-duration="3000"
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="px-12 py-12">
                        <img className="w-80 h-36 rounded-md " src="https://m.media-amazon.com/images/I/71oAbluK58S._AC_UL600_FMwebp_QL65_.jpg" alt="" />
                        <h3 className="text-center ">Accessories</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-12 py-8">
                        <img className="w-80 h-36 rounded-md " src="https://m.media-amazon.com/images/I/71hgmP7Wo3S._AC_UL600_FMwebp_QL65_.jpg" alt="" />
                        <h3 className="text-center ">Uncategorized</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-12 py-8">
                        <img className="w-80 h-36 rounded-md " src="http://kiditos.themetechmount.net/kiditos-toys/wp-content/uploads/sites/3/2020/06/cat1.jpg" alt="" />
                        <h3 className="text-center ">Sofa</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-12 py-8">
                        <img className="w-80 h-36 rounded-md " src="https://m.media-amazon.com/images/I/819MXOzpPCL.jpg" alt="" />
                        <h3 className="text-center ">Trucks</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-12 py-8">
                        <img className="w-80 h-36 rounded-md " src="https://m.media-amazon.com/images/I/61oT2NtGOOL.jpg" alt="" />
                        <h3 className="text-center ">Vehicles</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-12 py-8">
                        <img className="w-80 h-36 rounded-md " src="https://m.media-amazon.com/images/I/71rxOiPrNTL._AC_UF894,1000_QL80_.jpg" alt="" />
                        <h3 className="text-center ">Cars</h3>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default PopularToys;