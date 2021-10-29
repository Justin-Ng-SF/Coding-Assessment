import React from 'react';

import AppointmentsByDay from "./AppointmentsByDay";

const Appointments = ({appointments}) => {


    //will create an array to use .map to seperate appointments by day
    const appointmentsByDay = [];
    const appointmentsDayMap = new Map();
    //dayCount will be the unique days with appointments
    let dayCount = 0;

    appointments.map((appointment) => {
        let day = appointment.time.substring(0, 10);
        /*
        i am checking to see if i have any appointments for a day
        if i do not, i will use my appointmentsDayMap to keep track of new days
        either way, i am adding an appointment object to the corresponding day
        */
        
        if (!appointmentsDayMap.has(day)) {
            appointmentsDayMap.set(day, dayCount);
            appointmentsByDay[dayCount] = [appointment];
            dayCount++;
        }
        else {
            appointmentsByDay[appointmentsDayMap.get(day)].push(appointment);
        }

    });


    return (
        <section>
            <h3>Appointments</h3>

            {appointmentsByDay.map((appointmentsForTheDay) => (
                //day, not time, is key in format of YYYY-MM-DD ie 2021-10-01
                <AppointmentsByDay appointmentsOfTheDay={appointmentsForTheDay} key={appointmentsDayMap.get(appointmentsForTheDay[0].time.substring(0, 10))}/>
            ))}
        
        </section>
    )

}

export default Appointments;