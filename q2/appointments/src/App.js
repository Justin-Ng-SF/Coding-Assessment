import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appointments from './components/Appointments';
import Confirmed from './components/Confirmed';
import Booking from './components/Booking';



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
        <Appointments appointments={appointments} />
        <Switch>

          <Route exact path="/appointments/booking" component={() => <Booking appointments={appointments} />} />
          <Route exact path="/appointments/confirmed" component={Confirmed}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
