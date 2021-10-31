import React from 'react';
import './LinksBar.css'

const Navbar = () => {

    return (
        <div className="links-bar">


            <div className="links-container">
                <div className="links-box">
                    <a href="/appointments/booking" className="link">Book an Appointment</a>
                    <a href="/appointments" className="link">Appointments</a>
                    <a href="/openHours" className="link">Open Hours</a>
                    <a href="/contact" className="link">Contact Us</a>
            
                </div>
            </div>
            
        </div>
    )

}

export default Navbar;