import React from "react";
import "../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Autoplay } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
// import required modules

export default function SimpleSlider() {
  return (
    <>
      <Swiper 
        loop={true}
         centeredSlides={true}

         autoplay={{
           delay: 10000,
           disableOnInteraction: false,
         }}
         pagination={{
           clickable: true,
         }}
         navigation={true}
         modules={[Autoplay, Navigation]}

         >
        <SwiperSlide><div className='slider-img1'></div></SwiperSlide>
        <SwiperSlide><div className='slider-img2'></div></SwiperSlide>
        <SwiperSlide><div className='slider-img3'></div></SwiperSlide>
      </Swiper>
    </>
  );
}
