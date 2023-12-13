
import React, { useEffect, useState } from 'react'
import '../assets/styles/Signup.css'
import { useNavigate } from 'react-router-dom';
import { FaRegHospital } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import RegDocImg from '../assets/images/registerImg.png'
import FloatImg1 from '../assets/images/img1.png'
import FloatImg2 from '../assets/images/img2.png'
import FloatImg3 from '../assets/images/img3.png'
function Signup() {
    const [hospRegInp, setHospRegInp] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [registration, setRegistration] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate();

    function inputChangerHosp(){
        setHospRegInp(true)
    }
    function inputChangerCust(){
        setHospRegInp(false)
    }
   

    async function Handle() {
        console.log(firstName, lastName, email,registration, password, confirmPassword)
        let result = await fetch('http://localhost:5000/v1/register', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, phone, password, confirmPassword }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((e) => {
            setErr(e);
            console.log("Error", e)
        })
        result = await result.json()
        if (!result.message) {
            localStorage.setItem("user", JSON.stringify(result))
            navigate('/')
            console.log(result)
        } else {
            const message = result.message;
            console.log(message)
            setErr(message)
        }
    }
    return (
            <div className='signup-container'>
                <div className="signup-pg">
                    <div className="signup-pg-pt1">
                        <img src={RegDocImg} alt="" className='rg-doc-img' />
                        <img src={FloatImg3} alt="" className='rg-float-img1 float-img' />
                        <img src={FloatImg2} alt="" className='rg-float-img2 float-img' />
                        <img src={FloatImg1} alt="" className='rg-float-img3 float-img' />
                    </div>
                    <div className="rg-pg-pt2">
                        <div className="container">
                            <h1 className='title'>Create Account</h1>
                            <input type="text" className="register-login input1" placeholder='Firstname'
                                onChange={(e) => setFirstName(e.target.value)} required />
                            <input type="text" className="register-login input2" placeholder='Lastname'
                                onChange={(e) => setLastName(e.target.value)} required />
                            <input type={hospRegInp ? 'text' : 'hidden'} className="register-login input3" placeholder='Registration number'
                                onChange={(e) => setRegistration(e.target.value)} required/>
                            <input type="text" className="register-login input3" placeholder='Email Address'
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" className="register-login input3" placeholder='Phone Number'
                                onChange={(e) => setPhone(e.target.value)} />
                            <input type="text" className="register-login input4" placeholder='Password'
                                onChange={(e) => setPassword(e.target.value)} />
                            <input type="text" className="register-login input5" placeholder='Confirm Password'
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            <div className="lg-bt-u-h">
                                <span className='sp  sp-1'>
                                    <FaUserTie className='hov-icon' onClick={() => inputChangerCust()}/> User
                                </span> 
                                <span className='sp  sp-2'> <FaRegHospital className='hov-icon' onClick={ () =>inputChangerHosp() } /> Hospital
                                </span>
                            </div>
                            <p className='para'>Already register? <span className='reg' onClick={() => navigate('/login')}>SignIn</span></p>
                            <p className='error'>{(err) ? err : null}</p>
                            <button className="register-button" onClick={() => Handle()}>
                                <span> Create Account </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Signup
