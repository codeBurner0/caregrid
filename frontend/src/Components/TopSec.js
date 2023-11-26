import React from 'react'
import Doctor from "../assets/images/TopSec/DoctorHome.png"
import Banner from "../assets/images/TopSec/BannerTopsec.png"
import '../assets/styles/TopSec.css'
function TopSec() {
  return (
    <div className='topsec_container'>
      <section className="topsec_section">
        <div className="topsec_sec1">
          <img src={Banner} className='topsec_banner' alt="" />
          <h2 className='topsec_h2'>"Care Beyond Boundaries :</h2>
          <h2 className='topsec_h2'>&nbsp; Your Hospital, Your Health,</h2>
          <h2 className='topsec_h2'>&nbsp; Your Lifelong Partner."</h2>
          <div className="topsec_para_container">
            <p className='topsec_p'>
              We transcend boundaries to provide unwavering care,
              ensuring your health journey is supported at every step.
              Trust us to be your lifelong health partner.
            </p>
          </div>
          <div className="topsec_buttons_container">
            <button className='button topsec_button1'><span>Patient</span></button>
            <button className='topsec_button2'> <span>Hospital &nbsp; &#x00bb;</span></button>
          </div>
        </div>
        <div className="topsec_sec2">
          <img className="top_sec_docimg" src={Doctor} alt="" />
        </div>
      </section>
    </div>
  )
}

export default TopSec
