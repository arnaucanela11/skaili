"use client"
import Image from "next/image";
import "./components.css";
import { useState, useEffect } from 'react';

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Cambiar de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carrusel__container">
      <div className="carrusel__wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <Image key={index} className="carrusel__images" src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
