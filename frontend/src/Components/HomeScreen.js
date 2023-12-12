import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/HomeScreen.css'


import NavBar from './NavBar'
import AutoSlider from './AutoSlider'
import Footer from './Footer'
import Doctor from "../assets/images/design1.png"
import design1 from '../assets/images/design1.png'
import design2 from '../assets/images/design2.png'
import design3 from '../assets/images/design3.png'
import downdoctor from '../assets/images/down-doctor.png'
import TopSec from './TopSec';
import SedSec from './SedSec';
import ThirdSec from './ThirdSec'

function HomeScreen() {


  return (
    <>

      <div className='main' >
        <NavBar />
        <TopSec />
        <SedSec/>
        <ThirdSec />
        <div className='sec4'>
        <div className='sec4-inner'>
          <h1>Our Services in the eyes of Patient</h1>
          <AutoSlider />
          </div>
        </div>

        <div className='sec5'>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default HomeScreen
