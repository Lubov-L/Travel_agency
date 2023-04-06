import React from 'react';
import '../mainpage.css';

const MainInf = ({children}) => {
    return (
        <div className="main__inf__text">
            {children}
        </div>
    );
};

export default MainInf;