import React from 'react';
import './toursList.css';
import {TourCard} from "./TourCard/TourCard";

const ToursList = () => {
    return (
        <div>
            <h2 className="header__h2" id="main__header">Hot tours of the month</h2>
            <TourCard/>
        </div>
    );
};

export default ToursList;