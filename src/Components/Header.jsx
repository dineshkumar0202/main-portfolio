import '../App.css';
import React from 'react';
 

function Header() {
    return (
        <header className="header">
        <div className="header-content">
        <h1>Hello I'm <span >DINESHKUMAR M</span></h1>
            <p>I'm <span className="typing"> Web developer</span></p>
            <a href="" download="DineshKumarM_Resume.pdf" className="btn-container">
                <button className="btn">Download CV</button>
            </a>
        </div>
        </header>
    );
}

export default Header;