import React from 'react';
import cl from "./slider.module.css";

import {Autoplay, EffectFade} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import MainSearch from "../MainInf/MainSearch";

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        fetch("dataSlider.json")

            .then((response) => response.json())
            .then((data) => {
                this.setState({data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        return (
            <div className={cl.slider}>
                <Swiper
                    className={cl.swiper}
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
                    {this.state.data
                        .map((slider, index) => (
                            <SwiperSlide key={index} className={cl.slider__img}>
                                <img src={slider.image} alt="Slider"></img>
                            </SwiperSlide>
                        ))}
                </Swiper>
                <MainSearch/>
            </div>
        )
    }
}


export default Slider;