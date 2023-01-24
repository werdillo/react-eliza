import React from "react";
import '../assets/scss/_slider.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Pagination } from "swiper";
//  FreeMode,
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import Pic1 from "../assets/images/miniSlider/pic1.jpg";
import Pic2 from "../assets/images/miniSlider/pic2.jpg";
import Pic3 from "../assets/images/miniSlider/pic3.jpg";
import Pic4 from "../assets/images/miniSlider/pic4.jpg";
import Pic5 from "../assets/images/miniSlider/pic5.jpg";

// import required modules

export default function MiniSlider() {
  return (
    <>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
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
        <SwiperSlide><img src={Pic2} alt='' className='slider-mini'></img></SwiperSlide>
        <SwiperSlide><img src={Pic3} alt='' className='slider-mini'></img></SwiperSlide>
        <SwiperSlide><img src={Pic1} alt='' className='slider-mini'></img></SwiperSlide>
        <SwiperSlide><img src={Pic4} alt='' className='slider-mini'></img></SwiperSlide>
        <SwiperSlide><img src={Pic5} alt='' className='slider-mini'></img></SwiperSlide>
      </Swiper>
    </>
  );
}
