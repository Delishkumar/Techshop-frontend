import React, { useEffect, useState } from "react";
import computerslide from "../assets/computer bg.png"
import laptopslide from "../assets/laptopbg.png"
import Tabslide from "../assets/tab bg.jpg"
import mobileslide from "../assets/lenovoslide.jpg"
const images = [
  computerslide,
  laptopslide,
  Tabslide,
  mobileslide,
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto slide every 3s
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-64 md:h-96 ">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)`, width: `${images.length * 30}%` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0 object-cover" />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/4 md:top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/4 md:top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-32  left-1/2 transform -translate-x-1/2 flex gap-2 md:bottom-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-black" : "bg-white"} transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
