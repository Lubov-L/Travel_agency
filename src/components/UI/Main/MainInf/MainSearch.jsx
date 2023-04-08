import React from 'react';
import '../mainpage.css';

const MainSearch = () => {
    return (
        <div className="main__search">
            <form action="" method="get" className="main__form">
                <label htmlFor="place">Where do you want to go?</label>
                <div>
                    <input type="text" name="place" className="main__input" placeholder="Enter a name of place you want to visit"/>
                    <button className="main__button">search</button>
                </div>
            </form>
        </div>
    );
};

export default MainSearch;