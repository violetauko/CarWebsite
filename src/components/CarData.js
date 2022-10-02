import React, { useEffect, useState } from 'react'
import './Details.css'
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
import Details from './Details'
import OurCollection from './OurCollection'
import { useParams } from 'react-router-dom'


const CarData = ({cars}) => {
    // var cars = [
    //     {
    //         id:1,
    //         image: pic1,
    //         type: "MERCEDES-BENZ GLC43 AMG COUPE(JULY)2017 ",
    //         price: "2M",
    //         description:
    //             "Odometer - 52,315 miles,Fuel Economy - 27.0/34.0 mpg City/Hwy,Exterior Color - Alabaster Silver Metallic,Interior Color - Gray,Body - SUV, Seating - 5 seats,Transmission - Continuously Variable Automatic,Drivetrain - Front-wheel,Engine - 2.4L I-4 cylinder"
    //     },
    // ]
    const {id} = useParams();
    const car = cars[id];
    return (
        <div className='cd-container'>
            <div className='cd-inner-container'>
                 <div className='cd-data'>
                    <Details image={car['image']} name={car['type']} description={car['description']} />
                </div>
            </div>
        </div>
    )
}
export default CarData