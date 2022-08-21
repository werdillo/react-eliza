import React from "react";
import "../App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import { Navigation, Autoplay } from "swiper";
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import pic1 from '../assets/images/slider/Pic1.jpg'
import pic2 from '../assets/images/slider/Pic2.jpg'
import pic3 from '../assets/images/slider/Pic3.jpg'
import pic4 from '../assets/images/slider/Pic4.jpg'
// import required modules

export default function SimpleSlider() {
  return (
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
      <SwiperSlide><img src={pic1} className='slider-img'></img></SwiperSlide>
      <SwiperSlide><img src={pic2} className='slider-img'></img></SwiperSlide>
      <SwiperSlide><img src={pic3} className='slider-img'></img></SwiperSlide>
      <SwiperSlide><img src={pic4} className='slider-img'></img></SwiperSlide>
    </Swiper>
  );
}
