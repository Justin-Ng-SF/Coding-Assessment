import React from 'react';

const AppointmentsByDay = ({ appointmentsOfTheDay }) => {


    return (
        <section>
            <h3>{`${appointmentsOfTheDay[0].date}`}</h3>
            {appointmentsOfTheDay.map((appointment) => (
                // if(appointment.time.substring(10, 12)<13){
                
                // }
                <div key={appointment.time}>
                   test
                </div>
            ))} 

        
        </section>
    )

}

export default AppointmentsByDay;