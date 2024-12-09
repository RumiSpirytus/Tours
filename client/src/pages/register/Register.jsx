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

          <form action="#" method="POST" className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 p-2 w-full border" />
            </div>

            <div>
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none transition-colors duration-300">Sign Up</button>
            </div>
          </form>

          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>Already have an account? <Link to="/login" className="text-black hover:underline">Login here!</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;