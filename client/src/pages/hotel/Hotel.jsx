import React from 'react'
import CommentSection from './components/CommentSection'
import HotelInfo from './components/HotelInfo'

const Hotel = () => {
  const hotel = {
    id: 1,
    img: "/assets/hotel-1.jpg",
    name: "Ocean View Resort",
    address: "123 Seaside Blvd, Miami, FL, USA",
    description: "A luxurious beachfront resort offering stunning ocean views, gourmet dining, and top-tier amenities.",
    rating: 4.8
  };
  
  return (
    <div className="w-full flex flex-col p-8 md:px-24 lg:px-48 gap-8">
      <HotelInfo hotel={hotel} />
      <hr />
      <CommentSection />
    </div>
  )
}

export default Hotel