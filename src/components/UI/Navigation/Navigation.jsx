import React from 'react';
import cl from './navigation.module.css';
import Home from "../Main/Home/Home";
import Tours from "../Main/Tours/Tours";
import Vacations from "../Main/Vacations/Vacations";
import About from "../Main/About/About";
import Cruises from "../Main/Cruises/Cruises";
import Spa from "../Main/Spa/Spa";

import {
    BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';

const Navigation = () => {
    return (<Router>
        <div className="nav">
            <Link to="/" className={cl.nav__link}>Home</Link>
            <Link to="/tours" className={cl.nav__link}>Tours</Link>
            <Link to="/cruises" className={cl.nav__link}>Cruises</Link>
            <Link to="/spa" className={cl.nav__link}>Spa tours</Link>
            <Link to="/vacations" className={cl.nav__link}>Vacations</Link>
            <Link to="/about" className={cl.nav__link}>About</Link>
        </div>

        <main>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/tours" element={<Tours/>}></Route>
                <Route path="/cruises" element={<Cruises/>}></Route>
                <Route path="/spa" element={<Spa/>}></Route>
                <Route path="/vacations" element={<Vacations/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </main>
    </Router>);
};

export default Navigation;