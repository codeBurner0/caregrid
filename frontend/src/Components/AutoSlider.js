import React, { useState, useEffect } from 'react';
import '../assets/styles/AutoSlider.css'

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index, looping back to the beginning if necessary
      setCurrentIndex((prevIndex) => (prevIndex +1) % cards.length);
    }, 3000); // Change card every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Cleanup the interval on unmount
    };
  }, [cards.length]);

  return (
    <div className="card-slider">
      <div className="slider-content"
        style={{
          transform: `translateX(-${currentIndex * 40}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AutoSlider = () => {
  const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
    },
    {
      title: 'Card 3',
      description: 'Description for Card 3',
    },
    {
      title: 'Card 4',
      description: 'Description for Card 1',
    },
  ];

  return (

    <div className='as-main'>
    <h1>Our Services in the eyes of Patient</h1>
     <div className="AutoSlider">
       <CardSlider cards={cards} />
     </div>
    </div>
   
  );
};

export default AutoSlider;
