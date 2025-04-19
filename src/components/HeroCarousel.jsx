import React, { useEffect, useState } from 'react';
import '../styles/HeroCarousel.css';
import ice1 from '../assets/ice1.jpg';
import ice2 from '../assets/ice2.jpg';
import ice3 from '../assets/ice3.jpg';
import ice4 from '../assets/ice4.jpg';


const HeroCarousel = () => {
  const images = [ice1, ice2, ice3, ice4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero-carousel">
      <div className="carousel-slide">
        <div className="carousel-wrapper">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Dish Gola ${idx + 1}`}
                className="carousel-image"
              />
            ))}
          </div>
        </div>

        <div className="carousel-text">
          <p className="subtitle">DISH GOLA</p>
          <h2 className="headline">Chill it, snack it, love it.</h2>
          <p className="description">Cool down with our signature Dish Gola!</p>
          <button className="cta-button">I'M HUNGRY</button>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
