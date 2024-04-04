import React from 'react';
import './Hospitalsection.css';
import location from '../../assets/loc.png';



const Hospitalsection = () => {
  const data = [
    {
      id:1,
      hname:"Relief Hospital",
      haddress:"Relief Hospitals Trauma and Critical Care Near Naveen Galla Mandi Ahibaranpur, Lucknow - 226020",
      hphone:"+91-8524376000",
      himage:"https://www.joonsquare.com/usermanage/image/business/relief-hospital-trauma-and-critical-care-lucknow-2208/relief-hospital-trauma-and-critical-care-lucknow-2017-09-02-1-.jpg",
      url:"https://www.jaypeehealthcare.com/",
    },
    {
      id:2,
      hname:"Gopi Krishna Hospital",
      haddress:"Gopi Krishna Hospital General Ganj Rd, opp. Government Inter College, General Ganj, Sadar Bazar, Mathura, Uttar Pradesh 281001",
      hphone:"+91-8524376023",
      himage:"https://www.joonsquare.com/usermanage/image/business/sarvodaya-hospital-and-research-centre-faridabad-917/sarvodaya-hospital-and-research-centre-faridabad-sarvo8.jpg",
      url:"https://www.kdmch.in/",
    },
    {
      id:3,
      hname:"Nayati Hospital",
      haddress:"Nayati Medicity NH 19, Mathura Road, Goverdhan Bypass, Nayati Mor, Chhatikara, Uttar Pradesh 281001",
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
          {data.map((profile, id)=>{
            return(
              <article key={id} className='harticle'>
                <img src={profile.himage} alt="" className='h-img' style={{height:"240px"}}/>
                <div className='htext'>
                  <h2 className='hname'>{profile.hname}</h2>
                  <p className='haddress'>
                    {/* <img src={location} alt="" style={{height:"10", width:"10"}}/> */}
                    <i class="fa fa-map-marker locator" aria-hidden="true"></i>
                    &nbsp;&nbsp;&nbsp;{ profile.haddress}</p>
                  {/* <a href={profile.url}>
                    <button className='hbtn'>Visit Us</button>
                  </a> */}
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
