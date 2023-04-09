import React from 'react';
import Slider from "./Slider/Slider";
import "./home.css";
import ToursList from "./ToursList/ToursList";
import Feedback from "./Feedback/Feedback";

const Home = () => {
    return (
        <div className="main__page">
            <Slider/>
            <ToursList/>
            <Feedback/>
        </div>
    );
};

export default Home;