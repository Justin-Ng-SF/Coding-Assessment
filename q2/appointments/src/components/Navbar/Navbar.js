import React from 'react';

const Navbar = () => {

    return (
        <div>
            <h3>Serving the medically-underserved populations of the San Francisco Bay Area since 1971</h3>
        

            <a href="/appointments">Current Appointments</a>
            {` `}
            <a href="/appointments/booking">Book an Appointment</a>
            
        </div>
    )

}

export default Navbar;