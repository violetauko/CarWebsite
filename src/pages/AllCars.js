import React from 'react'
import './AllCars.css'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import range from '../images/range.png'
import pic5 from '../images/pic5.png'
import toyota2 from '../images/toyota2.png'
import bmw from '../images/bmw.jpeg'
import car11 from '../images/car11.jpeg'
import audi from '../images/audi.jpeg'
import mercedes1 from '../images/mercedes1.jpeg'
import jeep1 from '../images/jeep1.jpeg'
import toyota1 from '../images/toyota1.jpeg'
import mercedes2 from '../images/mercedes2.jpeg'
import range1 from '../images/range1.jpeg'
import subaru from '../images/subaru.jpeg'
import OurCollection from '../components/OurCollection'
import { Link,Outlet,Route, Routes } from 'react-router-dom'
import CarData from '../components/CarData'

const AllCars = () => {
    var cars = [
        {
            image: pic1,
            type: "MERCEDES-BENZ GLC43 AMG COUPE(JULY)2017 ",
            price: "2M",
            description:
                "Odometer - 52,315 miles,Fuel Economy - 27.0/34.0 mpg City/Hwy,Exterior Color - Alabaster Silver Metallic,Interior Color - Gray,Body - SUV, Seating - 5 seats,Transmission - Continuously Variable Automatic,Drivetrain - Front-wheel,Engine - 2.4L I-4 cylinder"
        },
        {
            image: range,
            type: "RANGE ROVER EVOQUE(March)",
            price: "2M",
            description:
                "Odometer - 52,315 miles,Fuel Economy - 27.0/34.0 mpg City/Hwy,Exterior Color - Alabaster Silver Metallic,Interior Color - Gray,Body - SUV, Seating - 5 seats,Transmission - Continuously Variable Automatic,Drivetrain - Front-wheel,Engine - 2.4L I-4 cylinder"
        },
        {
            image: pic2, type: "MERCEDES-BENZ", price: "2M", description:
                "Odometer - 52,315 miles,Fuel Economy - 27.0/34.0 mpg City/Hwy,Exterior Color - Alabaster Silver Metallic,Interior Color - Gray,Body - SUV, Seating - 5 seats,Transmission - Continuously Variable Automatic,Drivetrain - Front-wheel,Engine - 2.4L I-4 cylinder"
        },
        {
            image: pic3, type: "JEEP WRANGLER SPORT(JAN)2015", price: "3M", description:
                "Odometer - 52,315 miles,Fuel Economy - 27.0/34.0 mpg City/Hwy,Exterior Color - Alabaster Silver Metallic,Interior Color - Gray,Body - SUV, Seating - 5 seats,Transmission - Continuously Variable Automatic,Drivetrain - Front-wheel,Engine - 2.4L I-4 cylinder"
        },
        { image: audi, type: "AUDI", price: "2M" },
        { image: toyota2, type: "TOYOTA", price: "2M" },
        { image: bmw, type: "BMW", price: "2M" },
        { image: car11, type: "AUDI", price: "3M" },
        { image: pic5, type: "RANGE ROVER", price: "2M" },
        { image: mercedes1, type: "MERCEDES-BENZ", price: "2M" },
        { image: jeep1, type: "JEEP", price: "2M" },
        { image: toyota1, type: "TOYOTA", price: "2M" },
        { image: mercedes2, type: "MMERCEDES-BENZ", price: "2M" },
        { image: range1, type: "RANGE ROVER", price: "2M" },
        { image: subaru, type: "SUBARU IMPREZA", price: "2M" },
    ]
    return (
        <div className='al-container'>
            <h1>Our Cars</h1>
            <div><Outlet/></div>
            <Routes>
            <Route index element={<AllCarsContainer cars={cars}/>}/>
            <Route path={":id"} element={<CarData cars={cars}/>} />
            </Routes>
        </div>
    )
}
const AllCarsContainer = ({cars}) => {
  return (
    <div className='ls-inner-container'>
                {cars.map((car, index) =><div className='ls-collection' key={index}>
                <Link to={`${index}`} >
                    <OurCollection image={car['image']} name={car['type']} />
                    </Link>
                </div>)}
            </div>
  )
}


export default AllCars