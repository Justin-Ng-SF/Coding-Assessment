import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appointments from './components/Appointments';
import Confirmed from './components/Confirmed';
import Booking from './components/Booking';



function App() {
  //assume that the data given to us is sorted
  //will be using time as the key as we will assume that there cannot be two appointments at the same time, meaning that times 'should' be unique in this scenario



  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/appointments/booking" component={Booking} />
          <Route exact path="/appointments/confirmed" component={Confirmed}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
