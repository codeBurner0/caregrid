import React, { useState, useEffect } from 'react';
import '../assets/styles/AutoSlider.css'

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


  return (
    <div className="card-slider">
      <div className='slider-content'
        style={{
          transform: `translateX(-${currentIndex * 40}%)`,
          transition: 'transform 1.5s ease-in-out',
        }}
      >
        {cards.map((card, index) => (
             <figure class="snip1390">
                <span style={{display:'flex'}}><img src={card.image} alt="profile-sample3" class="profile" /> <h2>{card.title}</h2></span>       
                <figcaption>
                  <blockquote>{card.description}</blockquote>
                </figcaption>
             </figure>
        ))}
      </div>   
      <div className='slider-content2'
        style={{
          transform: `translateX(-${currentIndex * 30}%)`,
          transition: 'transform 1.5s ease-in-out',
        }}
      >
        {cards.map((card, index) => (
             <figure class="snip1390">
                <span style={{display:'flex'}}><img src={card.image} alt="profile-sample3" class="profile" /> <h2>{card.title}</h2></span>       
                <figcaption>
                  <blockquote>{card.description}</blockquote>
                </figcaption>
             </figure>
        ))}
      </div>
    </div>
  );
};

const AutoSlider = () => {
  const cards = [
    {
      title: 'Card 1',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: 'Description for Card 1',
    },
    {
      title: 'Card 2',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: 'Description for Card 2',
    },
    {
      title: 'Card 3',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 4',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
      description: 'Description for Card 4',
    },
    {
      title: 'Card 5',
      description: 'Description for Card 5',
      image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
    },
    {
      title: 'Card 6',
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
