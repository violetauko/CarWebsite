import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LatestCollection from './components/LatestCollection';
import OurMission from './components/OurMission';
import Reviews from './components/Reviews';
import AllCars from './pages/AllCars';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/allCars"  component={ AllCars}/>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}
const Landing = () => {
  return (
    <div>
            <Home />
            <OurMission />
            <LatestCollection />
            <AboutUs />
            <Reviews />
            </div>
  )
}

export default App;
