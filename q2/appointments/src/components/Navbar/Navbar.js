import React from 'react';
import nemsLogoIcon from '../../assets/nemsLogoIcon.png';
import './Navbar.css'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="welcome-container">
                <a href="/appointments">
                    <img src={nemsLogoIcon} id="nemsLogoIcon" alt="" />
                </a>
                <h3 id="welcome-header">
                    Serving the medically-underserved populations of the San Francisco Bay Area since 1971.
                </h3>
            </div>
        </div>
    )
}

export default Navbar;