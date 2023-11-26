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
          transform: `translateX(-${currentIndex * 40 }%)`,
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
          transform: `translateX(-${currentIndex * 95}%)`,
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
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: "Dr. Kapoor's guidance on caregrid has been my anchor in the sea of health information. His personalized advice feels like having a reliable friend to turn to for all my health concerns.",
    },
    {
      title: 'Sanya Singh',
      designation:'User-Friendly Experience',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: "Caregrid has been a lifesaver it ensures everything runs smoothly. Neha Sharma's customer care skills are unparalleled, making me feel heard and supported. It's more than a platform; it's a health ally that truly cares.",
    },
    {
      title: 'Rajat Verma',
      designation:'Freelancer',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: 'A big shoutout to caregrid for streamlining my healthcare journey. From speedy appointments to accurate information, its a digital healthcare experience that truly prioritizes my well-being.',
    },
    {
      title: 'Card 4',
      designation:'Freelancer',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: 'Description for Card 4',
    },
    {
      title: 'Card 5',
      designation:'Freelancer',
      description: 'Description for Card 5',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
    },
    {
      title: 'Card 6',
      designation:'Freelancer',
      description: 'Description for Card 6',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
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