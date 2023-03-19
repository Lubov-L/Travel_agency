import React from 'react';
import cl from "./slider.module.css";

import {Mousewheel, Keyboard, Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const Slider = () => {
    return (
        <div className={cl.slider}>
            <Swiper
                cssMode={true}
                mousewheel={true}
                loop={true}
                speed={6000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                effect={'fade'}
                fadeEffect={{
                    crossFade: true
                }}
                modules={[Mousewheel, Keyboard, Autoplay, EffectFade]}
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
    )
        ;
};

export default Slider;