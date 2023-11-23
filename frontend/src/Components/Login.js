import React, { useState } from 'react'
import '../assets/styles/Login.css'
import { FaHospital } from 'react-icons/fa';
import { FaRegHospital } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { BiUserCircle } from 'react-icons/bi';
import { PiEyeBold } from 'react-icons/pi';
import DocImg from '../assets/images/DocLoginImg.png'
import FloatImg1 from '../assets/images/img1.png'
import FloatImg2 from '../assets/images/img2.png'
import FloatImg3 from '../assets/images/img3.png'
import { useNavigate,Link } from 'react-router-dom';

function Login() {
    const [hosp, setHosp] = useState(false)
    const [customer, setCustomer] = useState(false)
    const [hospRegInp, setHospRegInp] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const navigate=useNavigate()

    function inputChangerHosp(){
        setHosp(!hosp);
        setHospRegInp(true)
    }
    function inputChangerCust(){
        setCustomer(!customer);
        setHospRegInp(false)
    }

    async function callLoginApi(){
        console.log("object")
        let result=await fetch('http://localhost:5000/v1/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{
              'Content-Type':'application/json'
            }
          }).catch((e)=>{
            setErr(e);
            console.log("Error",e)
          })
          console.log(email,password)
          result=await result.json()
          if(!result.message){
            localStorage.setItem("user",JSON.stringify(result))
            console.log("sucess")
            navigate(0)
            navigate('/show')
            console.log(result)
          }else{
            const message=result.message;
            console.log(message)
            setErr(message)
          }
    }
    return (
        <div className='login-container'>
            <div className="login-pg">
                <div className="login-pg-pt1">
                    <img src={DocImg} alt="" className='lg-doc-img' />
                    <img src={FloatImg3} alt="" className='float-img1 float-img' />
                    <img src={FloatImg2} alt="" className='float-img2 float-img' />
                    <img src={FloatImg1} alt="" className='float-img3 float-img' />
                </div>
                <div className="login-pg-pt2">
                    <div className="lg-fields">
                        <h1>Login To Your Account!</h1>
                        <div className='icon-input'>
                            <BiUserCircle className='i-icon1' />
                        </div>
                        {
                            hospRegInp?
                            <input type="text" name="" id="" placeholder='Registration Number' className='lg-input' onChange={(e)=>setEmail(e.target.value)}/>:
                            <input type="text" name="" id="" placeholder='Email Address' className='lg-input' onChange={(e)=>setEmail(e.target.value)}/>
                        }
                        <span className='lg-password'>
                            <PiEyeBold className='eye-icon' />
                            <input type="text" name="" id="" placeholder='Password' className='lg-input' onChange={(e)=>setPassword(e.target.value)}/>
                        </span>
                        <div className="lg-bt-u-h">
                            <span className='sp  sp-1'>
                                {customer ? <FaUserTie className='hov-icon'
                                    onClick={() => inputChangerCust()} /> :
                                    <FaRegUser className='hov-icon' onClick={
                                        () => inputChangerCust()} />} User</span>
                            <span className='sp  sp-2'>
                                {hosp ? <FaHospital className='hov-icon'
                                    onClick={ () =>inputChangerHosp()} /> :
                                    <FaRegHospital className='hov-icon' onClick={  () =>inputChangerHosp() } />} Hospital</span>
                                    <span className='sp-3'>Forgot Password?</span>
                        </div>
                        
                        <p className='err-field'>{err?err:null}</p>
                        <button className="button" onClick={()=>callLoginApi()}>
                            <span> Login </span>
                        </button>
                        <div className="signup-rd">
                            <p>Not Registered Yet? <span className='signup-p' onClick={()=> navigate('/signup')}> Sign-Up
                            </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
