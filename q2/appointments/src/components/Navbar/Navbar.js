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
                
                <h3 id="welcome-header">Serving the medically-underserved populations of the San Francisco Bay Area since 1971.</h3>
                
            </div>
            {/* <div className="links-container">
                <div className="links-box">
                    <a href="/appointments/booking" className="link">Book an Appointment</a>
                    <a href="/appointments" className="link">Appointments</a>
                    <a href="/openHours" className="link">Open Hours</a>
                    <a href="/contact" className="link">Contact Us</a>
            
                </div>
            </div> */}
            
        </div>
    )

}

export default Navbar;