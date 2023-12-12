import React from 'react';
import './Hospitalsection.css';



const Hospitalsection = () => {
  const data = [
    {
      id:1,
      hname:"JP Hospital",
      haddress:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, inventore!",
      hphone:"+91-8524376000",
      himage:"https://jaiprakashhospitals.com/wp-content/uploads/2019/11/7bd22da9-f68b-443c-abde-7fdfaa626e92.jpg",
    },
    {
      id:2,
      hname:"KD Hospital",
      haddress:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, inventore!",
      hphone:"+91-8524376023",
      himage:"https://jaiprakashhospitals.com/wp-content/uploads/2019/11/7bd22da9-f68b-443c-abde-7fdfaa626e92.jpg",
    },
    {
      id:3,
      hname:"City Hospital",
      haddress:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, inventore!",
      hphone:"+91-8524376200",
      himage:"https://jaiprakashhospitals.com/wp-content/uploads/2019/11/7bd22da9-f68b-443c-abde-7fdfaa626e92.jpg",
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
                <img src={profile.himage} alt="" className='h-img'/>
                <div className='htext'>
                  <h2 className='hname'>{profile.hname}</h2>
                  <p className='haddress'><i class="fa fa-map-marker" aria-hidden="true">&nbsp;&nbsp;&nbsp;{ profile.haddress}</i></p>
                  <a href="#">
                    <button className='hbtn'>Visit Us</button>
                  </a>
                </div>
              </article>
            )
          })}
        </div>
        <div className='h-find-more'>
          <a href="#" className='h-more-btn'>Find Out More</a>
        </div>
      </section>
    </div>
  )
}

export default Hospitalsection
