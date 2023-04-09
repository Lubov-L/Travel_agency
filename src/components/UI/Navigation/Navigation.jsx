import React from 'react';
import cl from './navigation.module.css';
import Home from "../Main/Home/Home";
import Tours from "../Main/Tours/Tours";

import {
    BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';

const Navigation = () => {
    return (<Router>
        <div className="nav">
            <Link to="/home" className={cl.nav__link}>Home</Link>
            <Link to="/tours" className={cl.nav__link}>Tours</Link>
            {/*<Link to="/" className={cl.nav__link}>Cruises</Link>*/}
            {/*<Link to="/" className={cl.nav__link}>Spa tours</Link>*/}
            {/*<Link to="/" className={cl.nav__link}>Vacations</Link>*/}
            {/*<Link to="/" className={cl.nav__link}>About</Link>*/}
            {/*<Link to="/" className={cl.nav__link}>+1 (1111) 11 11 11</Link>*/}
        </div>

        <main>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/tours" element={<Tours/>}></Route>
            </Routes>
        </main>
    </Router>);
};

export default Navigation;