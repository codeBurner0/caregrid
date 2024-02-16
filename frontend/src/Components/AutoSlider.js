import React, { useState, useEffect } from 'react';
import '../assets/styles/AutoSlider.css'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => ( (prevIndex+1) % cards.length));
    }, 3000); 

    return () => {
      clearInterval(interval); 
    };
  }, [cards.length]);

  const sliderContentClass = currentIndex !== 0 ? 'transformed-slider' : '';

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNextClick = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <div className="card-slider">
      <div className='slider-content'
        style={{
          transform: `translateX(-${currentIndex * 35 }vw)`,
          transition: 'transform 1.5s ease-in-out',
        }}
      >
        {cards.map((card, index) => (
             <figure class="snip1390">
                <span style={{display:'flex'}}><img src={card.image} alt="profile-sample3" class="profile" /> 
                <div className='card-container'><h2>{card.title}</h2>
                      <h4>{card.designation}</h4>
                      </div></span>       
                <figcaption>
                  <blockquote>{card.description}</blockquote>
                </figcaption>
             </figure>
        ))}
      </div>
      <div className='slider-content2'
        style={{
          transform: `translateX(-${currentIndex * 80}vw)`,
          transition: 'transform 1.5s ease-in-out',
        }}
      >
        {cards.map((card, index) => (
             <figure class="snip1390">
                <span style={{display:'flex'}}><img src={card.image} alt="profile-sample3" class="profile" /> 
                <div className='card-container'><h2>{card.title}</h2>
                      <h4>{card.designation}</h4>
                      </div></span>       
                <figcaption>
                  <blockquote> \201D {card.description} &#8221; </blockquote>
                </figcaption>
             </figure>
        ))}
      </div>
      <div>
    <button  class="sliderbutton previous round" onClick={handlePrevClick}>&#8249;</button>
    <button  class="sliderbutton next round" onClick={handleNextClick}>&#8250;</button>  
  </div>
    </div>
  );
};


const AutoSlider = () => {
  const cards = [
    {
      title: 'Dr. Aryan Kapoor',
      designation:'Your Trusted Medical Guide',
      image:'https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg',
      description: "Dr. Kapoor's guidance on caregrid has been my anchor in the sea of health information. His personalized advice feels like having a reliable friend to turn to for all my health concerns.",
    },
    {
      title: 'Sanya Singh',
      designation:'User-Friendly Experience',
      image:'https://media.istockphoto.com/id/1278976856/photo/happy-student-girl-at-high-school.jpg?s=612x612&w=0&k=20&c=XiJQHTm-LKgCr0s3hURY0ATGFfMZQH4B8gE6h2TlK4U=',
      description: "Caregrid has been a lifesaver it ensures everything runs smoothly. Neha Sharma's customer care skills are unparalleled, making me feel heard and supported. It's more than a platform; it's a health ally that truly cares.",
    },
    {
      title: 'Rajat Verma',
      designation:'Freelancer',
      image:'https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg',
      description: 'A big shoutout to caregrid for streamlining my healthcare journey. From speedy appointments to accurate information, its a digital healthcare experience that truly prioritizes my well-being.',
    },
    {
      title: 'Manya Sharma',
      designation:'Freelancer',
      image:'https://wallpapers.com/images/hd/indian-girl-casual-photographer-camera-of1e2gv8qut3bn37.jpg',
      description: 'CareGrid streamlines healthcare coordination seamlessly, enhancing patient care through efficient communication and collaboration.',
    },
    {
      title: 'Reema Singh',
      designation:'Freelancer',
      description: 'CareGrid revolutionizes healthcare communication, fostering real-time collaboration and optimizing patient outcomes with its intuitive platform.',
      image:'https://www.clearvoice.com/wp-content/uploads/2023/01/Freelance-For-Us_Get-Hired-1.png',
    },
    {
      title: 'Karan Singh',
      designation:'Freelancer',
      description: 'CareGrid innovative platform offers a cohesive solution for healthcare teams, empowering seamless coordination and ensuring enhanced patient-centered care through streamlined communication.',
      image:'https://media.istockphoto.com/id/1152207180/photo/young-handsome-male-20-years-old-in-eyeglasses-sitting-at-street-cafe-during-free-time-with.jpg?s=612x612&w=0&k=20&c=Z6LYH2TSppjK2waCS-YeUuILYF6raNmgD90lN8F8IUQ=',
    }
  ];

  return (

    <div className='as-main'>
     <div className="AutoSlider">
       <CardSlider cards={cards} />
     </div>
    </div>
   
  );
};

export default AutoSlider;