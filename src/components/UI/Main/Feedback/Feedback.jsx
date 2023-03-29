import React from 'react';
import './feedback.css';

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import {EffectCoverflow, Pagination} from "swiper";

class Feedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: [], count: 9};
    }

    componentDidMount() {

        fetch("dataFeedback.json")

            .then((response) => response.json())
            .then((data) => {
                data.sort((a, b) => a.date.localeCompare(b.date));
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
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="feedback__slider"
                >
                    {this.state.data
                        .filter((feedback, index) => index < this.state.count)
                        .map((feedback) => (
                            <SwiperSlide className="feedback__block">
                                <div className="feedback__inf">
                                    <h2>{feedback.heading}</h2>
                                    <h3>{feedback.name}</h3>
                                    <span>{feedback.date}</span>
                                    <p>{feedback.text}</p>
                                </div>
                            </SwiperSlide>

                        ))}
                </Swiper>
            </div>
        )
    }
}

export default Feedback;