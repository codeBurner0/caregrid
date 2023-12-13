import React from 'react'
import './Banner.css'
import right from '../../assets/1.png';


const Banner = () => {
  return (
    <section className='hbanner-wrapper'>
      <div className='hbanner-container'>
        {/* left side  */}
        <div className='hbanner-left'>
          <div className="hbanner-title">
            <div className="orange-circle"/>
            <h1>Your well-being <br />
              is our priority,<br />
              shaping the future of healthcare.
            </h1>
          </div>

          <div className="hbanner-desc">
            <span>Experience a new era of healthcare accessibility.</span>
            <span>From scheduling appointments and accessing medical records to exploring a wide range of services.</span>
          </div>
          <div style={{color:"black"}}>
            <h3>✔ Comprehensive Healthcare Ecosystem</h3>
            <h3>✔ Patient-Centric Approach</h3>
            <h3>✔ Patient-Centric Approach</h3>
          </div>

        </div>
        <div className="hbanner-right">
          <div className='himg-container'>
            <img src={right} alt="" />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  )
}

export default Banner
