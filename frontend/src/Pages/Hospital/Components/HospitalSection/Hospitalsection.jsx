import React from 'react';
import './Hospitalsection.css';
import location from '../../assets/loc.png';



const Hospitalsection = () => {
  const data = [
    {
      id:1,
      hname:"JP Hospital",
      haddress:"Jaypee Hospital Rd, Goberdhanpur, Sector 128, Noida, Shahpur Govardhanpur Bangar, Uttar Pradesh 201304",
      hphone:"+91-8524376000",
      himage:"https://jaiprakashhospitals.com/wp-content/uploads/2019/11/7bd22da9-f68b-443c-abde-7fdfaa626e92.jpg",
      url:"https://www.jaypeehealthcare.com/",
    },
    {
      id:2,
      hname:"KD Hospital",
      haddress:"K. D. Medical College Hospital And Research Center, 24 KM Milestone, Mathura - Delhi Road, NH 2,         Mathura,     Uttar Pradesh -     281406.",
      hphone:"+91-8524376023",
      himage:"https://www.edufever.com/wp-content/uploads/2021/08/KD-Medical-College-Mathura-jpg-webp.webp",
      url:"https://www.kdmch.in/",
    },
    {
      id:3,
      hname:"Nayati Hospital",
      haddress:"Hospital Address Nayati Multi Super Specialty Hospital Jai Singh Pura Bangar, Delhi - Agra Highway NH-2, Mathura - 281001",
      hphone:"+91-8524376200",
      himage:"https://etimg.etb2bimg.com/thumb/msid-65330716,width-1200,height-900,resizemode-4/.jpg",
      ulr:"https://cimsmathura.com/",
    },
  ]
  
  return (
    <div className='hospital-section'>
      <section className="hcontainer">
        <h1 className="h-heading">
          <span>Our </span>
          <span className='h-text'>Hospitals</span>
        </h1>
        <div class="hcard">
          {data.map((profile)=>{
            return(
              <article className='harticle'>
                <img src={profile.himage} alt="" className='h-img' style={{height:"240px"}}/>
                <div className='htext'>
                  <h2 className='hname'>{profile.hname}</h2>
                  <p className='haddress'>
                    {/* <img src={location} alt="" style={{height:"10", width:"10"}}/> */}
                    <i class="fa fa-map-marker locator" aria-hidden="true"></i>
                    &nbsp;&nbsp;&nbsp;{ profile.haddress}</p>
                  <a href={profile.url}>
                    <button className='hbtn'>Visit Us</button>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <div className='h-find-more'>
          <a href={`https://caregrid-hospitals.vercel.app/?data=${localStorage.getItem('user')}`} className='h-more-btn'>Find Out More</a>
        </div>
      </section>
    </div>
  )
}

export default Hospitalsection
