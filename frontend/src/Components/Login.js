import React, { useState } from 'react'
import '../assets/styles/Login.css'
// import { FaHospital } from 'react-icons/fa';
import { FaRegHospital } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
// import { FaRegUser } from 'react-icons/fa';
import { BiAlignLeft, BiUserCircle } from 'react-icons/bi';
import { PiEyeBold } from 'react-icons/pi';
import DocImg from '../assets/images/DocLoginImg.png'
import FloatImg1 from '../assets/images/img1.png'
import FloatImg2 from '../assets/images/img2.png'
import FloatImg3 from '../assets/images/img3.png'
import { useNavigate, Link } from 'react-router-dom';
import NavBar from './NavBar';

function Login() {
    // const [hosp, setHosp] = useState(false)
    // const [customer, setCustomer] = useState(false)
    const [hospRegInp, setHospRegInp] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const [type, setType] = useState('password');
    const navigate = useNavigate()
    const handleToggle = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }

    function inputChangerHosp() {
        // setHosp(true);
        setHospRegInp(true)
    }
    function inputChangerCust() {
        // setCustomer(true);
        setHospRegInp(false)
    }

    async function callLoginApi() {
        let result = await fetch('http://localhost:5000/v1/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((e) => {
            setErr(e);
            console.log("Error", e)
        })
        console.log(email, password)
        result = await result.json()
        if (!result.message) {
            localStorage.setItem("user", JSON.stringify(result))
            console.log("sucess")
            navigate('/')
            console.log(result)
        } else {
            const message = result.message;
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
                            hospRegInp ?
                                <input type="text" name="" id="" placeholder='Registration Number' className='lg-input' onChange={(e) => setEmail(e.target.value)} /> :
                                <input type="text" name="" id="" placeholder='Email Address' className='lg-input' onChange={(e) => setEmail(e.target.value)} />
                        }
                        <span className='lg-password'>

                            <PiEyeBold className='eye-icon' onClick={handleToggle} />
                            <input className='lg-input' type={type} name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                        </span>
                        {/* <div className="lg-bt-u-h">
                            <span className='sp  sp-1' onClick={() => inputChangerCust()}>
                                <FaUserTie className='hov-icon'
                                /> User</span>
                            <span className='sp  sp-2' onClick={() => inputChangerHosp()}>
                                <FaRegHospital className='hov-icon' /> Hospital</span>
                            
                        </div> */}
                        <div className="lg-bt-u-h">
                        <span className='sp-3' onClick={() => navigate('/forgotpassword')}>Forgot Password?</span>
                        </div>
                        
                        <p className='err-field'>{err ? err : null}</p>
                        <button className="button" onClick={() => callLoginApi()}>
                            <span> Login </span>
                        </button>
                        <div className="signup-rd">
                            <p>Not Registered Yet? <span className='signup-p' onClick={() => navigate('/signup')}> Sign-Up
                            </span></p>
                        </div>
                        <button className='lg-back-button' onClick={() => navigate(-1)}>Go back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
