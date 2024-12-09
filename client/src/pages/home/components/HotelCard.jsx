import React from 'react';
import { FaHotel, FaStar } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const HotelCard = ({ hotel }) => {
  return (
    <div className="w-full h-[500px] border-2 shadow-md rounded-xl overflow-hidden flex flex-col hover:text-black hover:no-underline">
      <div className="flex-shrink-0 w-full h-1/3">
        <img src={hotel.img} alt={hotel.title} className="w-full h-full object-cover rounded-t-xl" />
      </div>

      <div className="flex-grow p-4">
        <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
        <h2 className="text-lg font-semibold mb-2">{hotel.address}</h2>
        <p className="text-md">
          {hotel.description.length > 150 ? `${hotel.description.slice(0, 150)}...` : hotel.description}
        </p>
      </div>

      <div className="flex flex-row justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2">
          <span>Rating: {hotel.rating} / 5</span> 
          <FaStar className="text-yellow-500" />
        </div>
        <Link to={`/hotel/${hotel.id}`} className="border-2 border-gray-300 text-gray-500 p-2 hover:border-blue-500 hover:text-blue-500 hover:no-underline">
          Read more...
        </Link>
      </div>
    </div>
  );
}

export default HotelCard;
