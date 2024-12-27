import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:hidden w-full h-1/4">
        <img src="/assets/travel.jpg" alt="Travel" className="w-full h-full object-cover" />
      </div>

      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-white text-black h-full">
        <img src="/assets/travel.jpg" alt="Travel" className="h-full w-full object-cover" />
      </div>

      <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center h-full">
        <div className="max-w-md w-full p-6">
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Register</h1>
          <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join our community with all-time access and for free</h1>
        </div>
      </div>
    </div>
  );
};

export default Register;