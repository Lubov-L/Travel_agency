import React from 'react';
import cl from "./slider.module.css";

import {Mousewheel, Keyboard} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <div className={cl.slider}>
            <Swiper className=""
                    cssMode={true}
                    mousewheel={true}
                    loop={true}
                    modules={[Mousewheel, Keyboard]}
            >
                <SwiperSlide className={cl.slider__img}>
                    <img src="/images/slider1.jpg" alt="Slider"></img>
                </SwiperSlide>
                <SwiperSlide className={cl.slider__img}>
                    <img src="/images/slider2.jpg" alt="Slider"></img>
                </SwiperSlide>
                <SwiperSlide className={cl.slider__img}>
                    <img src="/images/slider3.jpg" alt="Slider"></img>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;