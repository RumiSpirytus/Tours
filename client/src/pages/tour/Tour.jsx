import React from 'react'
import TourInfo from './components/TourInfo'
import CommentSection from './components/CommentSection'

const Tour = () => {
  const tour = {
    id: 1,
    img: "/assets/beach.jpg",
    title: "Beach Paradise",
    description: "Relax on the golden sands and soak up the sun at this tropical beach destination, where you can enjoy beach volleyball, water sports, and exquisite sunsets with a refreshing drink in hand.",
    rating: 4.2,
  }
  return (
    <div className="w-full flex flex-col p-8 md:px-24 lg:px-48 gap-8">
      <TourInfo tour={tour} />
      <hr />
      <CommentSection />
    </div>
  )
}

export default Tour