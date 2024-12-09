import React, { useState, useEffect } from "react";
import { FaChevronCircleRight, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "/assets/beach.jpg",
    "/assets/mountain.jpg",
    "/assets/night.jpg",
    "/assets/snow.jpg",
    "/assets/trees.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 brightness-50 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 gap-4">
        <h1 className="text-4xl font-bold">Welcome to HotelReview</h1>
        <p className="text-xl font-semibold">Explore the best destinations now</p>
        <Link to="/home" className="border-2 rounded-full border-blue-500 text-blue-500 px-3 py-2 text-xl font-bold flex flex-row items-center hover:text-blue-500 hover:no-underline">
          <span className="pr-2">Get started!</span>
          <FaChevronCircleRight />
        </Link>
      </div>
    </div>
  );
};

export default Hero;