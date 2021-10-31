# Setting Up
install dependencies by running the command at the root
npm install

start the application with the command at root
npm run

---

# How to use
To view the list of booked appointments listed in ascending order, go to http://localhost:3000/appointments or click the 'Appointments' link on the links section on the left side. 
To book an appointment, go to http://localhost:3000/appointments/booking or click the 'Book an Appointment' link on the links section on the left side.
See notes for valid appointment dates. When a booking is attempted, it will check if booking that appointment is allowed. If the date selected is valid for an appointment to be booked, the user will be redirected to a confirmation page that displays the date for which the user is trying to book an appointment for. If the user confirms, they will be given a confirmation message and redirected to the schedules page again. 

---
# Notes
This application has a links section but only 'Book an Appointment' and 'Appointments' work in that bar. 
Booking an appointment does not actually add an appointment to the database.
Attempting to book an appointment will make a few checks: 
-current given data for any conflicting times
-invalid times such as dates that have already passed
-also added a 'work schedule' so that appointments cannot be made outside of this schedule