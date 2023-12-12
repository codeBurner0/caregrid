import React from "react";
import './Header.css'


const Header = () => {

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <a href="">
          <img src="https://cryptologos.cc/logos/icon-icx-logo.png" alt="" width={30}/>
        </a>
        {/* menu */}
          <div className="h-menu">
            <a href="">Home</a>
            <a href="">Doctors</a>
            <a href="">Hospitals</a>
            <a href="">Medicines</a>
            <button className="h-button">
              <a href="">Contact Us</a>
            </button>
          </div>
        
      </div>
    </section>
  )
}

export default Header
