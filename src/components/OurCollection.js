import React from 'react'
import './OurCollection.css'

const OurCollection = ({ image, name }) => {
    return (
        <div className='collection'>
            <div className='image'>
                <img src={image} alt="car" />
            </div>
            <div>
                <h6>{name}</h6>
            </div>
        </div>

    )
}

export default OurCollection