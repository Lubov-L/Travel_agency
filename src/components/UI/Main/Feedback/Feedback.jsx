import React from 'react';
import './feedback.css';

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import 'swiper/css/scrollbar';

import {EffectCoverflow, Navigation} from "swiper";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {

        fetch("dataFeedback.json")

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
            <div className="feedback">
                <h2>Feedbacks from our travelers</h2>
                <Swiper
                    loop={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    slidesPerView={3}
                    navigation={true}
                    initialSlide={3}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    modules={[Navigation, EffectCoverflow]}
                    className="feedback__slider"
                >
                    {this.state.data
                        .map((feedback, index) => (
                            <SwiperSlide key={index} className="feedback__block">
                                <div className="feedback__inf">
                                    <h2>{feedback.heading}</h2>
                                    <h3>{feedback.name}</h3>
                                    <span>{feedback.date}</span>
                                    <p className="feedback__text">{feedback.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        )
    }
}

export default Feedback;