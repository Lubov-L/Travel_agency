import React from 'react';
import Slider from "./Slider/Slider";
import "./mainpage.css";
import ToursList from "./ToursList/ToursList";

const MainPage = () => {
    return (
        <div className="main__page">
            <Slider/>
            <ToursList/>
        </div>
    );
};

export default MainPage;