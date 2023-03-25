import React from 'react';
import './toursList.css';
import {TourCard} from "./TourCard/TourCard";

const ToursList = () => {
    return (
        <div className="tour__list">
            <TourCard/>
        </div>
    );
};

export default ToursList;