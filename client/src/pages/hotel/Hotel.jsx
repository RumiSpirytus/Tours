import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentSection from './components/CommentSection';
import HotelInfo from './components/HotelInfo';

const Hotel = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState();

  const fetchHotel = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/hotels`);
      setHotel(response.data[id]);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  }

  useEffect(() => {
    fetchHotel(); 
  }, [id]);

  if (hotel === undefined) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="w-full flex flex-col p-8 md:px-24 lg:px-48 gap-8">
      <HotelInfo hotel={hotel} />
      <hr />
      <CommentSection hotelId={id} />
    </div>
  );
};

export default Hotel;
