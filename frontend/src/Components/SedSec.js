import React from 'react'
import patient from "../assets/images/HomeScreen/SedSec/patient.png"
import bed from "../assets/images/HomeScreen/SedSec/bed.png"
import opd from "../assets/images/HomeScreen/SedSec/opd.png"
import med from "../assets/images/HomeScreen/SedSec/med.png"
import customer from "../assets/images/HomeScreen/SedSec/customer.png"
import tele from "../assets/images/HomeScreen/SedSec/telehealth.png"
import '../assets/styles/SedSec.css'

function SedSec() {
  return (
    <div>
      <div className='sec2'>
          <h1>The Best Quality Services You Can Get</h1>
          <div className="inner">
            <div className="card">
              <img src={patient} alt='patient'/>
              <h2>Patient Registration</h2>
              <p>Involves collecting personal and medical details, obtaining consent, and generating unique identifiers for secure 
              access.</p>
              <button className='card_button'><span>Know this more</span></button>
            </div>
            <div className="card">
              <img src={opd} alt='opd'/>
              <h2>OPD Scheduling</h2>
              <p>Allows patients to book appointments with healthcare providers or specialists in an outpatient setting through
               the internet.</p>
               <button className='card_button'><span>Know this more</span></button>
            </div>
            <div className="card">
              <img src={med} alt='med'/>
              <h2>E-Medication</h2>
              <p>Process of healthcare providers and facilities using digital technology to order and 
               medications for their patients.</p>
               <button className='card_button'><span>Know this more</span></button>
            </div>
            <div className="card">
              <img src={bed} alt='bed'/>
              <h2>Bed Booking</h2>
              <p>Enable online hospitall bed reservations to address critial bed shortages,ensuring timely access for patients. </p>
              <button className='card_button'><span>Know this more</span></button>
            </div>
            <div className="card">
              <img src={customer} alt='customer'/>
              <h2>Customer Seggregation</h2>
              <p>Different portals are established for hospitals and patients, ensuring a comprehensive and secure environment .</p>
              <button className='card_button'><span>Know this more</span></button>
            </div>
            <div className="card">
              <img src={tele} alt='telehealth'/>
              <h2>Telehealth</h2>
              <p>Utilizes technology to remotely provide healthcare services, including consultations, diagnosis, and monitoring.</p>
               <button className='card_button'><span>Know this more</span></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SedSec