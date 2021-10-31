import React from 'react';
import Appointment from './Appointment';

const AppointmentsByDay = ({ appointmentsOfTheDay }) => {

    //for easy concatenation, should be static for each component of AppointmentsByDay
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = months[appointmentsOfTheDay[0].time.substring(5, 7)-1];
    const day = appointmentsOfTheDay[0].time.substring(8, 10);
    const year = appointmentsOfTheDay[0].time.substring(0, 4);

    const date = `${month} ${day}, ${year}`;

    //sorts by time
    appointmentsOfTheDay.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))

    return (
        <section>
            <h3>{date}</h3>
            {appointmentsOfTheDay.map((appointment) => (
                <section key={appointment.time}>
                    <Appointment appointment={appointment}/>
                </section>
            ))} 
        </section>
    )
}

export default AppointmentsByDay;