import React from 'react';

import AppointmentsByDay from "./AppointmentsByDay";
import './Appointments.css'

const Appointments = ({appointments}) => {


    //will create an array to use .map to seperate appointments by day
    const appointmentsByDay = [];
    const appointmentsDayMap = new Map();
    //dayCount will be the unique days with appointments
    let dayCount = 0;

    appointments.forEach((appointment) => {
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
        <div className="appointments">
            <div className="appointment-container">
                <div className="appointment-box">
                    <h3 className="appointment-header">Appointments</h3>

                        <div className="appointment-list">
                            {appointmentsByDay.map((appointmentsForTheDay) => (
                                //day, not time, is key in format of YYYY-MM-DD ie 2021-10-01
                                <AppointmentsByDay appointmentsOfTheDay={appointmentsForTheDay} key={appointmentsDayMap.get(appointmentsForTheDay[0].time.substring(0, 10))}/>
                            ))}
                        </div>
                    </div>
            </div>


        
        </div>
    )

}

export default Appointments;