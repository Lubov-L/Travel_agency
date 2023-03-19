import React from 'react';
import cl from "./footer.module.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className={cl.footer__links}>
                <a href="public/index.html" className={cl.footer__link}>Company</a>
                <a href="public/index.html" className={cl.footer__link}>Tours</a>
                <a href="public/index.html" className={cl.footer__link}>Cruises</a>
                <a href="public/index.html" className={cl.footer__link}>Spa tours</a>
                <a href="public/index.html" className={cl.footer__link}>Vacations</a>
                <a href="public/index.html" className={cl.footer__link}>About</a>
            </div>
            <div className={cl.footer__contact}>
                <a href="public/index.html" className={cl.footer__link}>+1 (1111) 11 11 11 / 900 888 000</a>
                <a href="public/index.html" className={cl.footer__link}>support.travel@gmail.com</a>
            </div>
        </div>
    );
};

export default Footer;