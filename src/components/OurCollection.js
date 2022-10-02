import React from 'react'
import './OurCollection.css'

const OurCollection = ({ image, name,description }) => {
    return (
        <div className='collection'>
            <div className='image'>
                <img src={image} alt="car" />
            </div>
            <div>
                <h6>{name}</h6>
            </div>
            <p>{description}</p>
        </div>

    )
}

export default OurCollection