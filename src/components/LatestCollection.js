import React from 'react'
import './LatestCollection.css'
import pic1 from '../images/pic1.png'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.png'
import range from '../images/range.png'
import pic5 from '../images/pic5.png'
import toyota2 from '../images/toyota2.png'
import bmw from '../images/bmw.jpeg'
import car11 from '../images/car11.jpeg'
import audi from '../images/audi.jpeg'
import { Link } from 'react-router-dom'
import OurCollection from './OurCollection'

const LatestCollection = () => {
    var cars = [{ image: pic1, type: "Mercedes-Benz", price: "2M" },
    { image: range, type: "Range Rover", price: "2M" },
    { image: pic2, type: "Mercedes-Benz", price: "2M" },
    { image: pic3, type: "Jeep", price: "3M" },
    { image: audi, type: "Audi", price: "2M" },
    { image: toyota2, type: "Toyota", price: "2M" },
    { image: bmw, type: "BMW", price: "2M" },
    { image: car11, type: "Audi", price: "3M" },
    { image: pic5, type: "Range Rover", price: "2M" },
   ]
    return (
        <section id='cars' className='ls-container'>
            <h1>Latest Collection</h1>
            <div className='ls-inner-container'>
                {cars.map((car, index) => <div key={index} className='ls-collection'>
                    <OurCollection image={car['image']} name={car['type']} />
                </div>)}
            </div>
            <Link to="/allCars"><button>
            See More 
            </button>
            </Link>
        </section>
    )
}

export default LatestCollection