import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import'../assets/styles/HomeScreen.css'
import { IoIosGlobe } from "react-icons/io";

import NavBar from './NavBar'
import AutoSlider from './AutoSlider'
import Footer from './Footer'
import doctors from "../assets/images/doctor-bg.png"
import design1 from '../assets/images/design1.png'
import design2 from '../assets/images/design2.png'
import design3 from '../assets/images/design3.png'
import downdoctor from '../assets/images/down-doctor.png'

function HomeScreen() {

    
    return (
     <>
     
     <div className='main' >

        <div className='sec1'>
          <NavBar />
          <div className="inner">
            <div className="first">
            <h2>We'll Ensure You Always Get The Best Result</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae quaerat officia nesciunt iure, deleniti facilis, recusandae doloribus dolores voluptate voluptates placeat provident vero molestias quis sequi harum!</p>
            <button className='sec1-button'><span>Patient</span></button>
            <button className='sec1-button'> <span>Hospital</span></button>

            </div>
            <img className="design1" src={design1} alt="" />
            {/* <img className="design2" src={design2} alt="" /> */}
            <img className="design3" src={design3} alt="" />
            <div className="second">
              <img className="doctors" src={doctors} alt="" />
            </div>
          </div>
        </div>


        <div className='sec2'>
          <h1>The Best Quality Services You Can Get</h1>
          <div className="inner">
            <div className="card">
              <img src="https://images.pexels.com/"/>
              <h2>Hostipals</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing el </p>
              <button>Know this more</button>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/"/>
              <h2>Doctors</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing el </p>
              <button>Know this more</button>
            </div>
            <div className="card">
              <img src="https://images.pexels.com/"/>
              <h2>Medicines</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing el </p>
              <button>Know this more</button>
            </div>
          </div>
        </div>


        <div className='sec3'>
          <div className='inner'>
            <div className="sec3-img">
              <img src={downdoctor} alt="" />
            </div>
            <div>
            <h1>Enjoy The Features <br /> In Our Clinic</h1>
            <div className="inner2">
            <div>
            <IoIosGlobe />
            <div className="card">
              <h2>Online System</h2>
              <p>Our website already has a online ecosystem</p>
            </div>
            </div>
            <div>
            <img src="https://images.pexels.com/"/>
            <div className="card">
              <h2>24 Hours Open</h2>
              <p>Ready to receive patients 24 hours a day</p>
            </div>
            </div>
           
            <div>
            <img src="https://images.pexels.com/"/>
            <div className="card">
              <h2>Easy Access</h2>
              <p>Easy access for allfacilities</p>
            </div>
            </div>
          </div>
            </div>
            
            </div>
        </div>

        <div className='sec4'>
            <h1>Our Services in the eyes of Patient</h1>
            <AutoSlider />
        </div>
        
        <div className='sec5'>
            
            <Footer />
        </div>
     </div>
    </>
  )
}

export default HomeScreen
