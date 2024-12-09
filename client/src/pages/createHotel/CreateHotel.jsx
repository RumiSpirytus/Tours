import React, { useState } from 'react';
import axios from 'axios';

const CreateHotel = () => {
  const [hotel, setHotel] = useState({
    name: '',
    description: '',
    img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHotel({ ...hotel, img: reader.result });
      };
      reader.readAsDataURL(file);
    } else {
      setHotel({ ...hotel, img: '' });
    }
  };

  const createHotel = async () => {
    try {
      const response = await axios.post('http://localhost:4000/hotels', {
        title: hotel.name,
        description: hotel.description,
      });

      setHotel({
        name: '',
        description: '',
        img: '',
      });

      document.getElementById('img').value = '';
      console.log('Hotel created successfully:', response.data);

    } catch (error) {
      console.error('Error creating hotel:', error);
      alert('Error: Can\'t create hotel!');
    }
  };

  return (
    <div className="w-full flex flex-col p-8 md:px-24 lg:px-48 gap-8">
      <div className="w-full flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {hotel.img ? (
            <img
              src={hotel.img}
              alt="Hotel Preview"
              className="w-full h-[450px] object-cover mb-4"
            />
          ) : (
            <div className="w-full h-[450px] bg-gray-200 flex items-center justify-center mb-4">
              <span className="text-gray-500">Image Preview</span>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow gap-4">
          <div className="flex flex-col">
            <label htmlFor="img" className="text-lg font-semibold mb-2">
              Hotel image
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleImageChange}
              className="block"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold mb-2">
              Hotel Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={hotel.name}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter hotel name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="text-lg font-semibold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={hotel.description}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded resize-none"
              rows="5"
              placeholder="Enter hotel description"
            ></textarea>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 disabled:bg-blue-600"
              onClick={createHotel}
              disabled={!(hotel.img && hotel.description && hotel.name)}
            >
              Create Hotel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHotel;
