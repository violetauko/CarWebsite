import React from 'react'
import './Home.css'
import car4 from '../images/car4.jpeg'
import car6 from '../images/car6.avif'

const Home = () => {
    return (
        <div className='home'>
            <div className='home-contents'>
                <div className='home-contents-left'>
                    <h1>Founded on Passion.</h1>
                    <h1>Built on Service.</h1>
                    <h1>Measured on Results.</h1><br />
                    <p>We are driven by the understanding that our success will ultimately be determined 
                        more by the number of people we help, rather than the amount of product we sell.</p>
                </div>
                <div className='home-contents-right'>
                    <img src={car4} alt="car" id='img1' />
                    <img src={car6} alt="car" id='img2' />

                </div>
            </div>
        </div>
    )
}

export default Home