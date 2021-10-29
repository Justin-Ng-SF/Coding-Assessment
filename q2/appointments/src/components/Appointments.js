import React from 'react';

import AppointmentsByDay from "./AppointmentsByDay";

const Appointments = () => {

    const appointments = [
        { "time": "2021-10-01T13:00:00Z", "provider": "Dr. Doe" },
        { "time": "2021-10-01T16:00:00Z", "provider": "Dr. David" },
        { "time": "2021-10-01T13:30:00Z", "provider": "Dr. Doe" },
        { "time": "2021-10-02T15:40:00Z", "provider": "Dr. David" },
    ];

    //will create an array to use .map to seperate appointments by day
    const appointmentsByDay = [];
    const appointmentsDayMap = new Map();
    //dayCount will be the unique days with appointments
    let dayCount = 0;

    appointments.map((appointment) => {
        let date = appointment.time.substring(0, 10);

        //for easy concatenation, should be static for each component of AppointmentsByDay
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const month = months[appointment.time.substring(5, 7)-1];
        const day = appointment.time.substring(8, 10);
        const year = appointment.time.substring(0, 4);


        /*
        i am checking to see if i have any appointments for a day
        if i do not, i will use my appointmentsDayMap to keep track of new days
        either way, i am adding an appointment object to the corresponding day
        this means that it does not matter if the appointments object i am sent is sorted by date or not
        */
        const appointmentPretty = {
            date: `${month} ${day}, ${year}`,
            provider: "Dr. Doe"
        }

        if (!appointmentsDayMap.has(date)) {
            appointmentsDayMap.set(date, dayCount);
            appointmentsByDay[dayCount] = [appointmentPretty];
            dayCount++;
        }
        else {
            appointmentsByDay[appointmentsDayMap.get(date)].push(appointmentPretty);
        }

    });

    return (
        <section>
            <h3>Appointments</h3>

            {appointmentsByDay.map((appointmentForTheDay) => (
                <AppointmentsByDay appointmentsOfTheDay={appointmentForTheDay} />
            ))}
        
        </section>
    )

}

export default Appointments;