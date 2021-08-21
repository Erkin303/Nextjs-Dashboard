
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";



const info = () => {
    return (
        <div className='h-100'>
            <Swiper navigation={true}>
             <SwiperSlide>4
             </SwiperSlide>
             <SwiperSlide>Slide 2</SwiperSlide>
            
            </Swiper>
            
        </div>
    )
}

export default info
