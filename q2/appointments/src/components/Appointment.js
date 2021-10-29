import React from 'react';

const Appointment = ({appointment}) => {

    //gets hour in standard time
    let time = appointment.time.substring(11, 13);
    const afternoon = time < 12 ? 'AM' : 'PM';
    time = parseInt(time)%12 === 0 ? 12 : time%12;
    time = `${time}${appointment.time.substring(13, 16)} ${afternoon}`;

    return (
        <section>
            {`${time} ${appointment.provider}`}
        </section>
    )

}

export default Appointment;