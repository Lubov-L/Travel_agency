import React from 'react';
import cl from "./slider.module.css";

import {Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';

const Slider = () => {
    return (<div className={cl.slider}>
        <Swiper
            navigation={false}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            speed={2000}
            effect={"fade"}
            modules={[Autoplay, EffectFade]}
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
    </div>);
};

export default Slider;