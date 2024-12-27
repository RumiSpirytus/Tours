import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HotelCard from './components/HotelCard';

const Home = () => {
  const [hotels, setHotels] = useState();

  const fetchHotels = async () => {
    try {
      const response = await axios.get('http://localhost:4000/hotels');
      setHotels(Object.values(response.data)); 
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  if (hotels === undefined) {
    return <div>Loading...</div>; 
  }


  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-8 p-12">
      {hotels.map((hotel, index) => (
        <HotelCard hotel={hotel} index={index} key={hotel.id} />
      ))}
    </div>
  );
};

export default Home;
