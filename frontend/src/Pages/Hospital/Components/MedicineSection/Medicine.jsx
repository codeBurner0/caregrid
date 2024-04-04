import React from 'react';
import './Medicine.css';

const Medicine = () => {
  const data = [
    {
      id:1,
      name:"Ritalin 10mg",
      bgimg:"https://3.imimg.com/data3/HM/QL/MY-10387469/ritalin.jpg",
    },
    {
      id:2,
      name:"Asthalin Albuterol",
      bgimg:"https://5.imimg.com/data5/SELLER/Default/2023/6/317981191/KS/SR/DP/146546905/ashalin-albuterol-tablets.jpg",
    },
    {
      id:3,
      name:"Atorvastatin",
      bgimg:"https://5.imimg.com/data5/SELLER/Default/2021/12/YF/IW/IO/5681402/atorvastatin-20-mg-tablets.jpg",
    },
    {
      id:4,
      name:"Femitrol MZ Tablet",
      bgimg:"https://4.imimg.com/data4/II/GA/MY-3092624/femitrol-mz-tablet-500x500.jpg",
    },
  ]

  
  return (
  
      <section className='drcontainer'>
        <h1 className="dheading">
          <span className='doc-text1'>Drugs &amp; </span>
          <span className='doc-text'>Medicines</span>
        </h1>
        <div className="card-wrapper">
          {data.map((profile, id) => {
            return (
              <div key={id} className="drcard">
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
