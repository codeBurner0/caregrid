import React from 'react'

const Drcards = (profile) =>{
  return (
    <div className="drcard">
      <img src="https://admin.risingkashmir.com/Source/News/668fba0a-9927-48c0-a950-4801e4868ad8.png" alt="" className="card-img" width={100}/>
      <img src="https://plus.unsplash.com/premium_photo-1681996343596-a3df697df236?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxkb2N0b3J8ZW58MHx8MHx8fDA%3D" alt="" className="profile-img" />
      <h1>{profile.name}</h1>
      <p className='job-title'>{profile.specialist}</p>
      <p className="about">
        {profile.about}
      </p>
      <a href={profile.Contact} className='card-btn'>Contact</a>
    </div>
  )
}
export default Drcards;