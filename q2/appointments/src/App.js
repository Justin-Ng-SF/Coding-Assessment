import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Appointments from './components/Appointment/Appointments';
import Booking from './components/Booking/Booking';
import LinksBar from './components/LinksBar/LinksBar';



function App() {
  //assume that the data given to us is sorted
  //will be using time as the key as we will assume that there cannot be two appointments at the same time, meaning that times 'should' be unique in this scenario

  const appointments = [
    { "time": "2021-10-01T13:00:00Z", "provider": "Dr. Doe" },
    { "time": "2021-10-01T16:00:00Z", "provider": "Dr. David" },
    { "time": "2021-10-01T13:30:00Z", "provider": "Dr. Doe" },
    { "time": "2021-10-02T15:40:00Z", "provider": "Dr. David" },
  ]

  return (
    <div className="App">
      <Router>
        <Navbar />
        <LinksBar />
        <Switch>
          <Route exact path="/appointments" component={() => <Appointments appointments={appointments} />} />
          <Route exact path="/appointments/booking" component={() => <Booking appointments={appointments} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
