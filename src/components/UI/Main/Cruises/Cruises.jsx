import React from 'react';
import {TourCard} from "../Home/ToursList/TourCard/TourCard";
import TextBlock from "../Spa/TextBlock";

const Cruises = () => {
    return (
        <div>
            <h2 className="header__h2" id="main__header">The best cruises around the world!</h2>
            <TextBlock>
                Easy, convenient way to travel. As a new cruiser the convenience can’t be topped. Unpack once and
                experience the best of the region you are visiting in one cruise vacation. There is nothing easier than
                simply waking up in the morning in the world's most exciting and interesting cities. There is nothing
                easier than
                simply waking up in the morning in the world's most exciting and interesting cities.
            </TextBlock>
            <TourCard/>
        </div>
    );
};

export default Cruises;