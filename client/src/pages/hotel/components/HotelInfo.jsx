import React from 'react'
import { FaStar } from 'react-icons/fa'

const HotelInfo = ({ hotel }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 gap-8">
      <img src="/assets/hotel-1.jpg" alt={hotel.title} className="w-full h-[450px] md:w-1/2 object-cover" />
      <div className="flex flex-col">
        <div className="flex-grow">
          <h2 className="text-3xl font-bold mb-4">
            {hotel.title}
          </h2>
          <p className="text-lg mb-4">{hotel.description}</p>
        </div>
      </div>
    </div>
  )
}

export default HotelInfo