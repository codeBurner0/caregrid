import React from 'react';
import '../assets/styles/ContactUs.css';
import banner from '../assets/images/contact/contact-bg.png';
import doc from '../assets/images/contact/contact-form.png';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { BsFillClockFill } from "react-icons/bs";


const ContactUs = () => {
  return (
    <section className="contact-section">
      <div className="contact-bg">
        <img className='banner-bg'src={banner} alt=''/>
      </div>

      <div className="contact-body">
        <h2>How To Reach  Us</h2>
        <div className="contact-info">
          <div>
            <span>
              <FaPhoneAlt className="fas fa-mobile-alt"></FaPhoneAlt>
            </span>
            <span>Phone No.</span>
            <span className="text">1-2392-23928-2</span>
          </div>
          <div>
            <span>
              <IoMailOpenSharp className="fas fa-envelope-open"></IoMailOpenSharp>
            </span>
            <span>E-mail</span>
            <span className="text">mail@cargrid.com</span>
          </div>
          <div>
            <span>
              <MdHomeWork className="fas fa-map-marker-alt"></MdHomeWork>
            </span>
            <span>Address</span>
            <span className="text">17km Stone, NH-2, Mathura-Delhi Road Mathura, Chaumuhan, Uttar Pradesh 281406</span>
          </div>
          <div>
            <span>
              <BsFillClockFill className="fas fa-clock"></BsFillClockFill>
            </span>
            <span> Help window Opening Hours</span>
            <span className="text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>

        <div className="contact-form">
            
          <form action="https://formsubmit.co/manvisinghal285@gmail.com" method="POST">
          <h3>Get in Touch with Us</h3> 
            <div>
              <input type="text" className="form-control" placeholder="First Name" required/>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div>
              <input type="email" className="form-control" placeholder="E-mail" required />
              <input type="number" className="form-control" placeholder="Phone"/>
            </div>
            <textarea rows="5" placeholder="Message" className="form-control" required></textarea>
            <input type="submit" className="send-btn" value="Send Message" />
          </form>

          <div>
            <img src={doc} alt="" />
          </div>
        </div>
      </div>

      <div className="map">
      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.607578013422!2d77.59074957378894!3d27.605693429970707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce47bffc039%3A0xfe5fc3da92c6341!2sGLA%20University!5e0!3m2!1sen!2sin!4v1707134597615!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
