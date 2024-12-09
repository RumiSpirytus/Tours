import React, { useState } from 'react'
import { FaHotel, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const user = true;
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(prev => !prev)

  return (
    <>
      <div className="h-24"></div>
      <div className="fixed z-50 p-4 w-full top-0 left-0 right-0 shadow-md backdrop-blur flex flex-row justify-between">
        <Link to="/home" className="flex flex-row items-center gap-2 font-bold text-xl text-blue-500 ml-12 hover:no-underline hover:text-blue-500">
          <FaHotel />
          <span>HotelReview</span>
        </Link>
        <div className="relative mr-12">
          { user ? 
            <>
              <div 
                className="cursor-pointer border-2 border-black rounded-full p-2 border-blue-500 text-blue-500"
                onClick={toggleDropdown}>
                <FaUser />
              </div>
              {showDropdown && (
                <>
                  <div
                    className="absolute right-2 shadow-md flex flex-col items-center gap-4 p-4 bg-white rounded-xl"
                    onClick={toggleDropdown}
                  >
                    <button className="text-red-500 text-center flex flex-row gap-2 items-center">
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              )}
            </> : 
            <Link to="login" className="font-bold text-xl flex flex-row items-center gap-2 hover:no-underline hover:text-blue-500">
              <FaSignInAlt />
              <span>Login</span>
            </Link>
          }
        </div>
      </div>
    </>
  )
}

export default NavBar