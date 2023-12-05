
import React, { useEffect, useState } from 'react'
import '../assets/styles/Forgotpassword.css'
import { useNavigate } from 'react-router-dom';
import { FaRegHospital } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import RegDocImg from '../assets/images/forgot_password.png'
import FloatImg1 from '../assets/images/img1.png'
import FloatImg2 from '../assets/images/img2.png'
import FloatImg3 from '../assets/images/img3.png'
function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate();

    async function Handle() {
        let result = await fetch('http://localhost:5000/v1/forgot_password', {
            method: 'POST',
            body: JSON.stringify({ email }),
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
            navigate(0)
            navigate('/')
            console.log(result)
        } else {
            const message = result.message;
            console.log(message)
            setErr(message)
        }
    }
    return (
            <div className='fp-container'>
                <div className="fp-pg">
                    <div className="fp-pg-pt1">
                        <img src={RegDocImg} alt="" className='fp-doc-img' />
                        <img src={FloatImg3} alt="" className='rg-float-img1 float-img' />
                        <img src={FloatImg2} alt="" className='rg-float-img2 float-img' />
                        <img src={FloatImg1} alt="" className='rg-float-img3 float-img' />
                    </div>
                    <div className="rg-pg-pt2">
                        <div className="fp_container">
                            <h1 className='title'>Forgot Password</h1>
                            <input type="text" className="register-login input3 fp_input" placeholder='Enter your email'
                                onChange={(e) => setEmail(e.target.value)} />
                            <p className='para'>Back to SignIn! <span className='reg' onClick={() => navigate('/login')}>SignIn</span></p>
                            <p className='error'>{(err) ? err : null}</p>
                            <button className="register-button" onClick={() => Handle()}>
                                <span> Send Email </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ForgotPassword
