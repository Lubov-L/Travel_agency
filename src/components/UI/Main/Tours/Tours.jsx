import React from 'react';
import {TourCard} from "../Home/ToursList/TourCard/TourCard";

const Tours = () => {
    return (
        <div>
            <h2 className="header__h2" id="main__header">The best tours around the world!</h2>
            <TourCard/>
        </div>
    );
};

export default Tours;