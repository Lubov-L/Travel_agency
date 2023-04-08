import React from 'react';
import Slider from "./Slider/Slider";
import "./mainpage.css";
import ToursList from "./ToursList/ToursList";
import Feedback from "./Feedback/Feedback";
import MainInf from "./MainInf/MainInf";

const MainPage = () => {
    return (
        <div className="main__page">
            <Slider>
                <div className="main__inf__block">
                    <div className="main__div__blocks">
                        <MainInf>Millions of people trust us around the world</MainInf>
                        <MainInf>Travel a lot and make happy memories forever </MainInf>
                        <MainInf>A lot of sales and discounts for our clients</MainInf>
                    </div>
                </div>
            </Slider>
            <ToursList/>
            <Feedback/>
        </div>
    );
};

export default MainPage;