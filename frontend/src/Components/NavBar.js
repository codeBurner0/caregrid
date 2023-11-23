import React,{useState} from 'react'
import {Link} from 'react-router-dom'
// import {GiHamburgerMenu} from 'react-icons/gi'
import { RiMenuFoldLine } from "react-icons/ri";
import '../assets/styles/NavBar.css'
import logo from "../assets/images/CareGrid_logo.png"

function NavBar() {

    const [click, setClick] = useState(false);
    const [isLogin,setisLogin] = useState(false) ; 
   return (
    <nav className="nb-parent">
        <div className='nb-child'>
            <a className="nb-part1" href='/home'>
            <img src={logo} alt="" />
                <div className='div1'>CareGrid</div>
            </a>
            <div className={!click ?"nb-part2":"nb-part21"}>
              <li><Link to='/appointment'>Appointment</Link></li>
              <li><Link to='/beds'>Beds</Link></li>
              <li><Link to='/medicines'>Medicines</Link></li>
              <li><Link to='/about' className='green-in'>About</Link></li>
              <li><Link to='/contact' style={{color:'white'}}>Contact</Link></li>
              <li className='nav-btn'>{isLogin ? <Link to={'/profile'}>Profile</Link>: <Link to={'/login'}>Login</Link>}</li>
             
            </div>
            
        </div>
        <div class="hamburger-menu">
                <a href="#" onClick={()=>{setClick(!click)}}>
                   <RiMenuFoldLine />
                </a>
         </div>
    </nav>
  
    
  )
}

export default NavBar
