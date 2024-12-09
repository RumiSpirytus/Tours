import React from 'react'
import HotelCard from './components/HotelCard';

const Home = () => {
  const hotels = [
    {
      id: 1,
      img: "/assets/hotel-1.jpg",
      name: "Ocean View Resort",
      address: "123 Seaside Blvd, Miami, FL, USA",
      description: "A luxurious beachfront resort offering stunning ocean views, gourmet dining, and top-tier amenities.",
      rating: 4.8
    },
    {
      id: 2,
      img: "/assets/hotel-2.jpg",
      name: "Mountain Escape Lodge",
      address: "456 Alpine Trail, Aspen, CO, USA",
      description: "Nestled in the mountains, this cozy lodge is perfect for skiing enthusiasts and nature lovers.",
      rating: 2.3
    },
    {
      id: 3,
      img: "/assets/hotel-3.jpg",
      name: "City Central Inn",
      address: "789 Downtown St, New York, NY, USA",
      description: "Conveniently located in the heart of the city, this hotel offers modern rooms and easy access to major attractions.",
      rating: 3.0
    },
    {
      id: 4,
      img: "/assets/hotel-4.jpg",
      name: "Tokyo Metropolitan Stay",
      address: "1-1-2 Shinjuku, Tokyo, Japan",
      description: "A contemporary hotel located in the bustling Shinjuku district, offering great city views and Japanese hospitality.",
      rating: 4.1
    },
    {
      id: 5,
      img: "/assets/hotel-5.jpg",
      name: "Parisian Boutique Hotellasjdghoasdjgojh",
      address: "32 Rue de Rivoli, Paris, France",
      description: "An elegant boutique hotel in the heart of Paris, just steps away from famous landmarks.",
      rating: 3.8
    },
    {
      id: 6,
      img: "/assets/hotel-6.jpg",
      name: "Safari Lodge",
      address: "12 Maasai Mara Rd, Narok, Kenya",
      description: "An adventurous getaway located near the Maasai Mara National Reserve, offering stunning wildlife experiences.",
      rating: 4.9
    }
  ]; 

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 p-12">
      {hotels.map((hotel) => (
        <HotelCard hotel={hotel} key={hotel.id} />
      ))}
    </div>
  );
}

export default Home;
