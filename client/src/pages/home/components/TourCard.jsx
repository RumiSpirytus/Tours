import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TourCard = ({ tour }) => {
  return (
    <div className="w-full h-[450px] border-2 shadow-md rounded-xl overflow-hidden flex flex-col hover:text-black hover:no-underline">
      <div className="flex-shrink-0 w-full h-1/3">
        <img src={tour.img} alt={tour.title} className="w-full h-full object-cover rounded-t-xl" />
      </div>

      <div className="flex-grow p-4">
        <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
        <p className="text-md">
          {tour.description.length > 150 ? `${tour.description.slice(0, 150)}...` : tour.description}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2">
          <span>Rating: {tour.rating} / 5</span> 
          <FaStar className="text-yellow-500" />
        </div>
        <Link to={`/tour/${tour.id}`} className="border-2 border-gray-300 text-gray-500 p-2 hover:border-blue-500 hover:text-blue-500 hover:no-underline">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default TourCard;
