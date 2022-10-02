import React, { useState } from 'react'
import './Contacts.css'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const Contacts = () => {
  const [post, setPost] = useState({ firstname: "", lastname: "", email: "", message: "" })
  const send = (e) => {
    e.preventDefault();
  }
  return (
    <section id='contacts'>
      <div className='c-container'>
        <h1>Contact Us</h1>
        <h4>We'd love to hear from you</h4>
        <div className='c-inner-container'>
          <div className='c-left-container'>
            <h3>Ready to buy your ride? Get in touch with us or ask any question</h3>
            <p>
              <FaMapMarkedAlt /> &nbsp; Address: Nairobi.
            </p>
            <p>
              <FaPhoneAlt /> &nbsp; Phone: +254765432678.
            </p>
            <p>
              <FaEnvelope /> &nbsp; Email: email@email.com
            </p>
          </div>
          <div className='c-right container'>
            <form onSubmit={send}>
              <h5>First Name *</h5>
              <input type="text" name="first_name" onChange={e => setPost({ ...post, firstname: e.target.value })} />
              <br />
              <h5>Last Name *</h5>
              <input type="text" name="last_name" />
              <br />
              <h5>Email *</h5>
              <input type="text" name="first_name" />
              <br />
              <h5>Message *</h5>
              <textarea rows="5" cols="50" name="message">
              </textarea>
              <br />
              <h5>Phone *</h5>
              <input type="tel" name="tel" /><br /><br />
              <button type='submit'>send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts