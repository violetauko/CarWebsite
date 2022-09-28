import React from 'react'
import './Footer.css'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaGlobe } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'


const Footer = () => {
  const location = useLocation()
  const pathName = location.pathname;
  return (
    <div className='footer'>
      <div className='inner-container'>
        <h1>BUY<span className='span'>From</span>DUBAI</h1>
        <h2>Test your driving skills with our car</h2>
      </div>
      <div className='footer-box'>
        <h4>Quick Links</h4>
        <div className='footer-links'>
        {pathName!=='/'?<Link to="/#about">About Us</Link>:<a href="#about">About Us</a>}
        {pathName!=='/'?<Link to="/#contacts">Contact Us</Link>:<a href="#contacts">Contact Us</a>}
          <a href='#privacyPolicy'>Privacy & Policy</a>
          <a href='#terms'>Terms & Conditions</a>
        </div>
      </div>
      <div className='footer-box'>
        <h4>Follow</h4>
        <div className='footer-links'>
          <a href='#'>Twitter</a>
          <a href='#'>LinkedIn</a>
          <a href='#'>Facebook</a>
          <a href='#'>Instagram</a>
        </div>
      </div>
      <div className='footer-box'>
        <h4>Contacts us</h4>
        <div className='footer-contact'>
          <p>
            <FaMapMarkedAlt /> &nbsp; Address: Nairobi.
          </p>
          <p>
            <FaPhoneAlt /> &nbsp; Phone: +254765432678.
          </p>
          <p>
            <FaEnvelope /> &nbsp; Email: email@email.com
          </p>
          <p>
            <FaGlobe /> &nbsp; Wesbite: www.buyfromdubai.ae/
          </p>
        </div>
      </div>
      <div className='footer-copyright'>
        <p className='u-small-text'>
          &copy; Copyright {(new Date().getFullYear())} BuyFromDubai, Inc. All Rights Reserved
        </p>
      </div>
    </div>

  )
}

export default Footer

