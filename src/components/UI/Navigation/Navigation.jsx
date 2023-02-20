import React from 'react';
import cl from './navigation.module.css';

const Navigation = () => {
    return (
        <div className={cl.nav}>
            <a href="#" className={cl.nav__link}>company</a>
            <a href="#" className={cl.nav__link}>company</a>
            <a href="#" className={cl.nav__link}>company</a>
            <a href="#" className={cl.nav__link}>company</a>
            <a href="#" className={cl.nav__link}>company</a>
            <a href="#" className={cl.nav__link}>company</a>
        </div>
    );
};

export default Navigation;