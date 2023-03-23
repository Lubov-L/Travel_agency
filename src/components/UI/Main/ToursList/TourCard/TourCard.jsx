import React from 'react';
import '../toursList.css';

const TourCard = () => {
    return (
        <div className="tour__card">
            <div className="tour__card__img">
                <img src="" alt="Tour title"/>
            </div>
            <div className="tour__card__inf">
                <div className="tour__card__top">
                    <h2 className="tour__name">Monaco</h2>
                    <p></p>
                </div>
                <div className="tour__card__but">
                    <button className="tour__button">show more</button>
                </div>
            </div>
        </div>
    );
};

export default TourCard;