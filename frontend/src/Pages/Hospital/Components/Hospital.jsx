import React from 'react';
import Banner from './Banner/Banner';
import Drsection from './DrSlider/Drsection';
import Hospitalsection from './HospitalSection/Hospitalsection';
import NavBar from '../../../Components/NavBar';
import Footer from '../../../Components/Footer';
// import './Hospital.css'
// import Dr from './Dr';

const Hospital = () => {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Drsection></Drsection>
      {/* <Dr></Dr> */}
      <Hospitalsection></Hospitalsection>
      <Footer></Footer>
    </div>
  )
}

export default Hospital;
