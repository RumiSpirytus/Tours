import React from 'react'
import TourCard from './components/TourCard';

const Home = () => {
  const tours = [
    {
      id: 1,
      img: "/assets/beach.jpg",
      title: "Beach Paradise",
      description: "Relax on the golden sands and soak up the sun at this tropical beach destination, where you can enjoy beach volleyball, water sports, and exquisite sunsets with a refreshing drink in hand.",
      rating: 4.2,
    },
    {
      id: 2,
      img: "/assets/mountain.jpg",
      title: "Mountain Adventure",
      description: "Embark on an unforgettable trek through the majestic mountain ranges, exploring hidden trails, breathtaking views, and the thrill of reaching the summit.",
      rating: 3.7,
    },
    {
      id: 3,
      img: "/assets/night.jpg",
      title: "Nightlife Exploration",
      description: "Discover vibrant city nightlife with clubs, bars, and stunning views after dark, featuring live music, exquisite cocktails, and dancing until dawn, perfect for party enthusiasts.",
      rating: 1,
    },
    {
      id: 4,
      img: "/assets/snow.jpg",
      title: "Snowy Escape",
      description: "Experience winter wonderland with skiing, snowboarding, and cozy cabins in the snow, where you can relax by the fire after a thrilling day on the slopes, creating unforgettable memories.",
      rating: 5,
    },
    {
      id: 5,
      img: "/assets/trees.jpg",
      title: "Forest Retreat",
      description: "Immerse yourself in nature with peaceful walks through lush green forests, enjoying the fresh air, wildlife, and tranquil surroundings that help you unwind and reconnect with the earth.",
      rating: 4.5,
    },
  ];  

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-12">
      {tours.map((tour) => (
        <TourCard tour={tour} key={tour.id} />
      ))}
    </div>
  );
}

export default Home;
