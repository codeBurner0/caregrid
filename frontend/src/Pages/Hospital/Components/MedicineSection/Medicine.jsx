import React from 'react';
import './Medicine.css';

const Medicine = () => {
  const data = [
    {
      id:1,
      name:"Aspirin",
      // specialist:"Cardio Surgen",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      Contact:"+91 8395897592",
      bgimg:"https://crestpharmacy.com/wp-content/uploads/pharmacy_mentor/importImages/aspirin-tablets-300mg-3.jpeg",
    },
    {
      id:2,
      name:"Paracetamol",
      // specialist:"Ortho Surgen",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      bgimg:"https://blog-images-1.pharmeasy.in/2015/12/Paracetamol.jpg",
    },
    {
      id:3,
      name:"Glyprin",
      // specialist:"Genral Surgen",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      bgimg:"https://www.bigpharmacy.com.my/site_media/img/GLYPRIN_100MG_45MG_TAB_10SX3_20200411223802.jpg",
    },
    {
      id:4,
      name:"Nurotec-odt",
      // specialist:"Dentist",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      bgimg:"https://images.everydayhealth.com/images/news/nurtec-odt-recalled-for-improper-child-resistant-packaging-alt-1440x810.jpg?sfvrsn=75ab70f3_1",
    },
  ]

  
  return (
  
      <section className='drcontainer'>
        <h1 className="dheading">
          <span className='doc-text1'>Drugs &amp; </span>
          <span className='doc-text'>Medicines</span>
        </h1>
        <div className="card-wrapper">
          {data.map((profile) => {
            return (
              <div className="drcard">
                <img src={profile.bgimg} alt="" className="medicine-img" width={100}/>
                <h1>{profile.name}</h1>
                <p className="about">
                </p>
              </div>
            )
          })}
        </div>

        <div className='find-more'>
        <a href={`https://caregrid-medicines.vercel.app/?data=${localStorage.getItem('user')}`} className='more-btn'>Find Out More</a>
        </div>
      </section>

  )
}

export default Medicine
