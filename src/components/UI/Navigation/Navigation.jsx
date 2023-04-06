import React from 'react';
import cl from './navigation.module.css';

const Navigation = () => {
    return (
        <div className="nav">
            <a href="/public/index.html" className={cl.nav__link}>Home</a>
            <a href="/public/index.html" className={cl.nav__link}>Tours</a>
            <a href="/public/index.html" className={cl.nav__link}>Cruises</a>
            <a href="/public/index.html" className={cl.nav__link}>Spa tours</a>
            <a href="/public/index.html" className={cl.nav__link}>Vacations</a>
            <a href="/public/index.html" className={cl.nav__link}>About</a>
            <a href="/public/index.html" className={cl.nav__link}>+1 (1111) 11 11 11</a>
        </div>
    );
};

export default Navigation;