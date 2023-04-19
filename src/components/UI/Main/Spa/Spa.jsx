import React from 'react';
import {TourCard} from "../Home/ToursList/TourCard/TourCard";
import TextBlock from "./TextBlock";

const Spa = () => {
    return (
        <div>
            <h2 className="header__h2" id="main__header">The best Spa tours around the world!</h2>
            <TextBlock>
                For everyone who has planned an active holiday in Siberia for the holidays with all sorts of overloads
                resulting from it.
                A trip to a natural oasis without flying for new impressions, recovery, beauty and a great mood!
                It is aimed at biologically active points of the foot - projections of organs and systems of the human
                body. It is carried out with the help of fingers and a special stick for the foot program.
            </TextBlock>
            <TourCard/>
        </div>
    );
};

export default Spa;