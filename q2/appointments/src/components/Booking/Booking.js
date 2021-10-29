import React, {useState} from 'react';

const Booking = ({appointments}) => {

    const [bookingTime, setBookingTime] = useState('2021-10-01T13:00:00Z');
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const checkDate = () => {
        //this is more for when checking through the list of appointments
        let invalidDate = false; 
        //get current date to compare to booking date
        const currentDate = new Date().toISOString().replace('.', ':');

        //get booking date
        const month = parseInt(document.getElementById("month").value);
        const day = parseInt(document.getElementById("day").value);
        const year = parseInt(document.getElementById("year").value);
        let hour = document.getElementById("hour").value;
        let minute = document.getElementById("minute").value;
        const afternoon = document.getElementById("afternoon").value;
        hour = afternoon === "PM" && hour !== "12" ? parseInt(hour) + 12 : hour;
        hour = afternoon === "AM" && hour === "12" ? "00" : hour;
        const newDate = `${year}-${month}-${day}T${hour}:${minute}:00Z`;

        //get day of week to make sure no sundays
        var myDate = new Date();
        myDate.setFullYear(year);
        myDate.setMonth(month);
        myDate.setDate(day + 4);

        //check for valid date/days/time, no sundays, 9am to 5pm only
        if (newDate < currentDate) {
            invalidDate = true;
            console.log('invalid date')
            alert('You have chosen an invalid date. Please choose another day.');
        }
        else if (day === 31) {
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                console.log('invalid day for month');
                alert('You have chosen an invalid day of the month. Please choose another day.');
            }
        }
        //not counting leap year
        else if (month === 2 && day > 28) {
            invalidDate = true;
            console.log('invalid day for month')
            alert('You have chosen an invalid day of the month. Please choose another day.');
        }
        else if (myDate.getDay() === 0) {
            invalidDate = true;
            console.log('we are off sundays');
            alert('We are off Sundays! Sorry for the inconvenience. Please pick another day of the week.');

        }
        else if (parseInt(hour) < 9 || parseInt(hour) >= 17) {
            invalidDate = true;
            console.log('we are not open for these hours');
            alert('We are closed during these hours. We are open Monday to Saturday from 9:00AM to 5:00PM. Please choose another time.');
        }
        else {
            //check for conflict in current schedule
            appointments.forEach((appointment) => {
                if (appointment.time === newDate) {
                    invalidDate = true;
                    alert('Sorry, we already have an appointment scheduled at that time. Please choose another time.')
                }
            });


            if (!invalidDate) {
                // function to add appointment would be here
                setBookingTime(currentDate);
                alert(`Your appointment for ${months[month]} ${day}, ${year} at ${hour}:${minute} ${afternoon} has been confirmed.\n
                Thank you.`);
                window.location.replace('/confirmed');
            }
        }
    }

    return (
        <section>
            <select id="month">
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">Novenmer</option>
                <option value="12">December</option>
            </select>
            <select id="day">
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>
            <select id="year">
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
            <select id="hour">
                <option value="12">12</option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
            </select>
            <select id="minute">
                <option value="00">00</option>
                <option value="05">05</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="50">50</option>
                <option value="55">55</option>
            </select>
            <select id="afternoon">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
            <br/>
            <button onClick={checkDate}>Book your appointment for this time</button>

        </section>
    )

}

export default Booking;