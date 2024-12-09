import React from 'react'
import { FaStar } from 'react-icons/fa'

const TourInfo = ({ tour }) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <img src={tour.img} alt={tour.title} className="w-full h-full object-cover" />
      <h3 className="text-4xl font-bold">{tour.title}</h3>
      <div className="flex flex-row items-center gap-2 text-2xl font-semibold">
        <span>Rating: {tour.rating} / 5</span> 
        <FaStar className="text-yellow-500" />
      </div>
      <p className="text-md">{tour.description}</p>
    </div>
  )
}

export default TourInfo