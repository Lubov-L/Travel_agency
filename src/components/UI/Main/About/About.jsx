import React from 'react';
import './about.css';

const About = () => {
    return (
        <div>
            <h2 className="header__h2" id="main__header">About Us</h2>
            <div className="about">
                <div className="about__block"><strong>TravelCompany is a ... based, but global travel booking portal
                    where you
                    effortlessly can book day tours, fixed group departures, holidays and vacation packages in 130+
                    countries around the world.</strong>
                    <br/><br/>Today, booking the right tour or holiday package has become a time consuming and painful
                    process. Which
                    tour operator is qualified? What's the right tour price? When you pay an upfront deposit to an
                    unknown
                    tour operator, is your money safe? Are the reviews seen on a local operators website genuine?
                </div>
                <div className="about__block"></div>
                <div className="about__block"></div>
                <div className="about__block">
                    Our company gives you a convenient and easy tour booking process by:

                    Only offering tours delivered by qualified and licensed tour operators, supported by unbiased and
                    genuine customer reviews.
                    Offering tours that are carbon offset via investments in carbon reduction projects.
                    Giving you a Best Price Guarantee for all tours offered.
                    Giving you a safe way to pay for tours around the world, with Bookmundi covering all credit card
                    fees, and not adding any extra fees on top.
                    Connecting you directly with a local travel expert around the world, if you need a customised tour
                    package, and local travel advice.
                </div>
                <img src="/images/about3.jpeg" alt="About"/>
                <div className="about__block"></div>
            </div>
        </div>
    );
};

export default About;