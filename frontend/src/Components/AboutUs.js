import React from 'react'
import '../assets/styles/AboutUs.css'
import banner from '../assets/images/AboutUs/banner.png'
import a1 from '../assets/images/AboutUs/A1.jpg'
import a2 from '../assets/images/AboutUs/A2.jpg'
import v1 from '../assets/images/AboutUs/V1.jpeg'
import m1 from '../assets/images/AboutUs/M1.png'
import mi1 from '../assets/images/AboutUs/Mi1.png'

function AboutUs() {
  return (
    <section className="about-section">
        <div className="about-bg">
            <img src={banner} alt=''/>
        </div>
        <div className='body'>
            <div className="flip-card">
                <div className="flip-card-front">
                    <div className="inner">
                    <img src={mi1} className="icon" />
                    <h3>Mission</h3>
                    <p>
                        Empowering healthcare through innovation, Caregrid is dedicated to delivering high-quality, patient-centered care. 
                    </p>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="inner">
                    <img src={mi1} className="icon" />
                    <h3>Caregrid</h3>
                    <p>
                        Committed to data security, we strive for excellence while fostering 
                        collaboration among healthcare professionals, patients, and stakeholders. 
                    </p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-front">
                    <div className="inner">
                    <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                    <h3>Vision</h3>
                    <p>
                        At Caregrid, we envision a future where healthcare is seamlessly connected, 
                        personalized, and universally accessible. 
                    </p>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="inner">
                    <img src="https://i.imgur.com/ep0HjjD.png" className="icon" />
                    <h3>Caregrid</h3>
                    <p>
                        Our vision is to leverage innovative technology to create a transformative 
                        digital ecosystem that empowers individuals and communities alike.
                    </p>
                    </div>
                </div>
            </div>
            <div className="flip-card">
                <div className="flip-card-front">
                    <div className="inner">
                    <img src="https://i.imgur.com/C9DWUDi.png" className="icon" />
                    <h3>Scope</h3>
                    <p>
                        The scope of Caregrid is expansive, aiming to revolutionize 
                        the healthcare landscape through comprehensive digital solutions
                    </p>
                    </div>
                </div>
                <div className="flip-card-back">
                    <div className="inner">
                    <img src=" https://i.imgur.com/wROMxVv.png" className="icon" />
                    <h3>Caregrid</h3>
                    <p>
                        By embracing this broad scope, Caregrid aims to contribute 
                        significantly to the advancement of healthcare, fostering a efficient, and patient-centric ecosystem."
                    </p>
                    </div>
                </div>
            </div>    
        </div>
        <div class="team-container">
            <div class="header">
                <h1>CareGrid Squad</h1>
            </div>
            <div class="sub-container">
                <div class="teams">
                    <img src={a1} alt=""/>     
                    <div class="name">Ankit Anand</div>
                    <div class="desig">Developer</div>
                    <div class="about">Passionate guy with a degree in computer science, loves coding, ready to dive into 
                    real-world projects and make a difference.
                    </div>
                    <div class="social-links">
                        <a href="https://github.com/codeBurner0" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="https://www.linkedin.com/in/ankit-anand-437187215/" target="_blank"><i class="fa fa-github"></i></a>
                    </div>
                </div>
                <div class="teams">
                    <img src={a2} alt=""/>
                    <div class="name">Amit Kumar</div>
                    <div class="desig">Developer</div>
                    <div class="about">Skilled software graduate, adept in programming, seeking opportunities for 
                        impactful contributions .
                    </div>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/amit-kumar-501251226/" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Amit-kumar97" target="_blank"><i class="fa fa-github"></i></a>
                    </div>
                </div>
                <div class="teams">
                    <img src={m1} alt=""/>
                    <div class="name">Manvi Singhal</div>
                    <div class="desig">Developer</div>
                    <div class="about">Computer science enthusiast, 
                        excited about turning innovative ideas into practical and user-friendly software solutions.
                    </div>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/manvi-singhal-119232216/" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/Manvi1108" target="_blank"><i class="fa fa-github"></i></a>
                    </div>
                </div>
                <div class="teams">
                    <img src={v1} alt=""/>
                    <div class="name">Vidisha Singhal</div>
                    <div class="desig">Developer</div>
                    <div class="about">Computer science grad, coding enthusiast, geared up to bring fresh 
                        perspectives and hands-on skills to real-world projects. 
                    </div>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/vidisha-singhal-57a389216/" target="_blank"><i class="fa fa-linkedin"></i></a>
                        <a href="https://github.com/VidishaSinghal26" target="_blank"><i class="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs
