import React from 'react';
import './Drsection.css';
// import Drcards from './Drcards';


const Drsection = () => {
  const data = [
    {
      id:1,
      name:"Aman Sharma",
      specialist:"Cardio Surgen",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      Contact:"+91 8395897592",
      bgimg:"https://admin.risingkashmir.com/Source/News/668fba0a-9927-48c0-a950-4801e4868ad8.png",
      profile:"https://plus.unsplash.com/premium_photo-1681996343596-a3df697df236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D"
    },
    {
      id:2,
      name:"Kavya Thapar",
      specialist:"Ortho Surgen",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      Contact:"+91 8395897592",
      bgimg:"https://thumbs.dreamstime.com/z/medicine-doctor-touching-electronic-medical-record-tablet-dna-digital-healthcare-network-connection-hologram-modern-virtual-154742526.jpg?w=992",
      profile:"https://img.freepik.com/free-photo/serious-confident-lady-with-clipboard-looking_171337-5785.jpg?w=1060&t=st=1701522513~exp=1701523113~hmac=0722b9f72b419789b5d3d8311e0dd4654b5c31ccc00d50aa1e8cb0f691ccbca1"
    },
    {
      id:3,
      name:"Kabir Bansal",
      specialist:"Genral Surgen",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      Contact:"+91 8395897592",
      bgimg:"https://as2.ftcdn.net/v2/jpg/06/43/52/05/1000_F_643520512_lzq5K79uMTMD8gyEp5ca3FEAn26H2tWt.jpg",
      profile:"https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329007.jpg?w=1060&t=st=1701522189~exp=1701522789~hmac=1831ce19ffc84313bb7bb8e39c62b16fe7d8a83b7c6d271c165d135b91a8fa8f"
    },
    {
      id:4,
      name:"Aarav Mittal",
      specialist:"Dentist",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci voluptas expedita distinctio non earum placeat magnam quos amet velit.",
      Contact:"+91 8395897592",
      bgimg:"https://img.freepik.com/free-photo/medical-technology-icon-set-health-wellness_53876-104940.jpg?w=1060&t=st=1701522685~exp=1701523285~hmac=34b1dd082c89a235b5078de7afa404ac29385dcebf7f63de9ee53f4f7a8bee0d",
      profile:"https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?size=626&ext=jpg&ga=GA1.1.727797818.1701522139&semt=ais"
    },
  ]

  
  return (
  
      <section className='drcontainer'>
        <h1 className="dheading">
          <span className='doc-text1'>Our </span>
          <span className='doc-text'>Doctors</span>
        </h1>
        <div className="card-wrapper">
          {data.map((profile) => {
            return (
              <div className="drcard">
                <img src={profile.bgimg} alt="" className="card-img" width={100}/>
                <img src={profile.profile} alt="" className="profile-img" />
                <h1>{profile.name}</h1>
                <p className='job-title'>{profile.specialist}</p>
                <p className="about">
                  {profile.about}
                </p>
                <a href={profile.Contact} className='h-card-btn'>Contact</a>
              </div>
            )
          })}
        </div>

        <div className='find-more'>
        <a href="#" className='more-btn'>Find Out More</a>
        </div>
      </section>

  )
}

export default Drsection
