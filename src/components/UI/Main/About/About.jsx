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
                    <br/><br/>TravelCompany is a ... based, but global travel booking portal
                    where you
                </div>
                <div className="about__block">
                    <img src="/images/about1.jpeg" alt="About"/>
                </div>
                <div className="about__block">
                    <img src="/images/about2.jpeg" alt="About"/>
                </div>
                <div className="about__block">
                    <strong>Our company gives you a convenient and easy tour booking process by:</strong>
                    <br/><br/>
                    <ul>
                        <li>Only offering tours delivered by qualified and licensed tour operators, supported by
                            unbiased and
                            genuine customer reviews.
                        </li>
                        <li>Offering tours that are carbon offset via investments in carbon reduction projects.</li>
                        <li>Giving you a Best Price Guarantee for all tours offered.</li>
                        <li>Giving you a safe way to pay for tours around the world, with covering all credit card</li>
                        <li>fees, and not adding any extra fees on top.</li>
                        <li> Connecting you directly with a local travel expert around the world, if you need a
                            customised tour
                            package, and local travel advice.
                        </li>
                    </ul>
                </div>
                <div className="about__block">We were all born to explore. Whatever travel means to you,
                    provides the path to finding the perfect experience and the right balance of comfort and adventure.
                    is the #1 community marketplace for extraordinary world travel, made easy. We host more
                    than 50,000 expert-planned trips from group tour packages to luxury, tailor-made trips, to
                    expedition cruises and independent adventures. With itineraries across every continent planned by
                    1,600+ of the best local experts and global companies.
                    <br/><br/>
                    With itineraries across every continent planned by
                    1,600+ of the best local experts and global companies.
                    <br/><br/>We were all born to explore.
                </div>
                <div className="about__block">
                    <img src="/images/about3.jpeg" alt="About"/>
                </div>
            </div>
        </div>
    );
};

export default About;