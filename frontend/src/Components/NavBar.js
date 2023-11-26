import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillMenuButtonFill } from 'react-icons/bs';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';
import Logo from '../assets/images/Caregrid_logo.png'
import "../assets/styles/NavBar.css";
function NavBar() {
  const [bool, setBool] = useState(false);
  function clicker() {
    setBool(!bool);
  }
  const navigate = useNavigate()

  return (
    <div>
      <div className={"nav-bar"}>
        <div className="title">
          <img src={Logo} alt="" className="nav_logo" />
          <span className="logo"><Link className="logo1" to="/">
            CareGrid
          </Link></span>
          {(bool) ? <BsFillMenuButtonFill className="icon" onClick={() => clicker()} /> : <BsFillMenuButtonWideFill className="icon" onClick={() => clicker()} />}
        </div>
        <div className={bool ? "show" : "list"}>
          <li>
            <Link className="anchor" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="anchor" to="/appointment">
              Appointment
            </Link>
          </li>
          <li>
            <Link className="anchor" to="/facility">
              Facility
            </Link>
          </li>
          <li>
            <Link className="anchor" to="/createblog">
              About
            </Link>
          </li>
          <li>
            <Link className="nav_schedule">
              Schedule
            </Link>
          </li>
          <li>
            <button className='nav_login_button' onClick={()=>navigate('/login')}><span>Login</span></button>
          </li>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
