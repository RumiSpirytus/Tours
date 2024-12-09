import React from 'react'
import { FaStar } from 'react-icons/fa'

const HotelInfo = ({ hotel }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 gap-8">
      <img src={hotel.img} alt={hotel.title} className="w-full h-[450px] md:w-1/2 object-cover" />
      <div className="flex flex-col">
        <div className="flex-grow">
          <h3 className="text-3xl font-bold mb-4">
            {hotel.name}
          </h3>
          <h2 className="text-2xl font-bold mb-4">
            {hotel.address}
          </h2>
          <p className="text-lg mb-4">{hotel.description}</p>
        </div>
        <div className="flex flex-row items-center gap-2 text-xl font-semibold">
          <span>Rating: {hotel.rating} / 5</span> 
          <FaStar className="text-yellow-500" />
        </div>
      </div>
    </div>
  )
}

export default HotelInfo