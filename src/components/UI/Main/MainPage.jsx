import React from 'react';
import Slider from "./Slider/Slider";
import "./mainpage.css";
import ToursList from "./ToursList/ToursList";
import Feedback from "./Feedback/Feedback";

const MainPage = () => {
    return (
        <div className="main__page">
            <Slider/>
            <ToursList/>
            <Feedback/>
        </div>
    );
};

export default MainPage;