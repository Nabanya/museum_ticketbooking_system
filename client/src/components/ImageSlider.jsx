import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  '/images/museum1.jpg',
  '/images/museum2.jpg',
  '/images/museum3.jpg',
  '/images/museum4.jpg',
  '/images/museum5.jpg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      <img
        src={images[currentIndex]}
        alt="Museum slide"
        className="slider-image"
      />
    </div>
  );
};

export default ImageSlider;
