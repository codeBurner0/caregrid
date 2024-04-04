
import React, { useEffect, useState } from 'react'
import '../assets/styles/Forgotpassword.css'
import { useNavigate } from 'react-router-dom';
import { FaRegHospital } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import RegDocImg from '../assets/images/forgot_password.png'
import FloatImg1 from '../assets/images/img1.png'
import FloatImg2 from '../assets/images/img2.png'
import FloatImg3 from '../assets/images/img3.png'
function ResetPassword() {
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [err, setErr] = useState('')
    const [active, setActive] = useState(false)
    const navigate = useNavigate();
    console.log()

    async function Handle() {
        let result = await fetch(`http://localhost:5000/v1/reset_password/${window.location.pathname.split('/')[2]}`, {
            method: 'PUT',
            body: JSON.stringify({ newPassword,confirmPassword }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).catch((e) => {
            setErr(e);
            console.log("Error", e)
        })
        result = await result.json()
        if (result.message==="password reset Successfully!") {
            navigate('/login')
        }else if(result.message==="all fields are required!"){
            setErr("all fields are required!");
        }
        else if(result.message==="passwords are not matching"){
            setErr("password are not matching");
        }
         else {
            const message = result.message;
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
                   <div className="fp-pg-pt2">
                   {!active? <div className="fp_container" style={{position:'absolute'}}>
                            <h1 className='title'>Reset Password</h1>
                            <input type="text" className="register-login input3 fp_input" placeholder='Enter your new password'
                                onChange={(e) => setNewPassword(e.target.value)} />
                            <input type="text" className="register-login input3 fp_input" placeholder='Enter your confirm password'
                                onChange={(e) => setConfirmPassword(e.target.value)} />
                            {/* <p className='para'>Back to Home! <span className='reg' onClick={() => navigate('/')}>Home</span></p> */}
                            <p className='error'>{(err) ? err : null}</p>
                            <button className="register-button" onClick={() => Handle()}>
                                <span> Submit </span>
                            </button>
                        </div>:
                        <div className='fp_thanks'>Reset Password Successfully!</div>}
                    </div>
                    
                </div>
            </div>
    )
}

export default ResetPassword
