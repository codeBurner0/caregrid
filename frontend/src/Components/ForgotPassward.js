import React, {useRef} from 'react'
import '../assets/styles/Forgotpassword.css'
// import { BiUserCircle } from 'react-icons/bi';
import DocImg from '../assets/images/screen.png'
import FloatImg1 from '../assets/images/img1.png'
import FloatImg2 from '../assets/images/img2.png'
import FloatImg3 from '../assets/images/img3.png'
import { useNavigate} from 'react-router-dom';

function ForgotPassward() {
  const emailRef = useRef();
  async function sendOtp() {
    try{
      let result = await fetch('http://localhost:5000/v1/emailSend', {
        method: 'POST',
        data:{email:emailRef.current.value}
      })
      let record = result.data;
      if(record.status === 'Success'){
        console.log(record.message)
      }
      else{
        console.error('Something went wrong')
      }
    }catch(e){
        console.log("Error", e)
    }
  }  
  const navigate = useNavigate()
  return (
      <div className='login-container'>
            <div className="login-pg">
                <div className="login-pg-pt1">
                    <img src={DocImg} alt="" className='fp-doc-img' />
                    <img src={FloatImg3} alt="" className='float-img1 float-img' />
                    <img src={FloatImg2} alt="" className='float-img2 float-img' />
                    <img src={FloatImg1} alt="" className='float-img3 float-img' />
                </div>
                <div className="login-pg-pt2">
                    <div className="lg-fields">
                        <h1>Reset Password </h1>
                        <div className='icon-input'>
                          {/* <BiUserCircle className='i-icon1' /> */}
                          <input type="text" name="" id="" placeholder='Enter Email Address' className='lg-input' ref={emailRef}/>
                        </div>
                        <div className="lg-bt-u-h">
                          <button className="button" onClick={() =>sendOtp()}>
                              <span> Send Email</span>
                          </button>
                          <button className="button">
                              <span onClick={()=> navigate('/login')}> Back to Login</span>
                          </button>
                        </div>
                    </div>
                </div>
              </div>
        </div>
  )
}

export default ForgotPassward
