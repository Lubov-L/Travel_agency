import React from 'react';
import {TourCard} from "../Home/ToursList/TourCard/TourCard";
import TextBlock from "../Spa/TextBlock";

const Vacations = () => {
    return (
        <div>
            <h2 className="header__h2" id="main__header">Find your next Vacation trip</h2>
            <TextBlock>
                From the remote wilderness of Alaska to vibrant New York, an American vacation is what you make it.
                Discover Hawaii's volcanic wonders, satisfy your inner child in Florida's theme parks, be lost for words
                on the Golden Gate Bridge, or enjoy a laid-back cruise along the Mississippi. We've got you covered with
                the best adventure packages in the United States, and a guide to the best times to
            </TextBlock>
            <TourCard/>
        </div>
    );
};

export default Vacations;