import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import LatestCollection from './components/LatestCollection';
import OurMission from './components/OurMission';
import Reviews from './components/Reviews';
import AllCars from './pages/AllCars';
import Contacts from './components/Contacts';
import Details from './components/Details';
import CarData from './components/CarData';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <div><Outlet/></div>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/allCars/*"  element={ <AllCars/>}/>
          
        </Routes>
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
            <Contacts/>
            </div>
  )
}

export default App;
