import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react'
import { FaHotel, FaPlusCircle, FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(prev => !prev);
  console.log(user, isLoading);

  return (
    <>
      <div className="h-24"></div>
      <div className="fixed z-50 p-4 w-full top-0 left-0 right-0 shadow-md backdrop-blur flex flex-row justify-between">
        <Link to="/home" className="flex flex-row items-center gap-2 font-bold text-xl text-blue-500 ml-12 hover:no-underline hover:text-blue-500">
          <FaHotel />
          <span>HotelReview</span>
        </Link>
        <div className="relative mr-12">
          { !isLoading && user && 
            <>
              <div 
                className="cursor-pointer border-2 border-black rounded-full p-2 border-blue-500 text-blue-500"
                onClick={toggleDropdown}>
                <FaUser />
              </div>
              {showDropdown && (
                <>
                  <div
                    className="absolute right-2 shadow-md flex flex-col items-start gap-4 p-4 bg-white rounded-xl w-36"
                    onClick={toggleDropdown}
                  >
                    <Link to="/createHotel" className="flex flex-row gap-2 items-center hover:no-underline hover:text-black">
                      <FaPlusCircle />
                      <span>Add hotel</span>
                    </Link>
                    <button className="text-red-500 flex flex-row gap-2 items-center" onClick={() => logout()}>
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </div>
                </>
              )}
            </>
          }
          { !isLoading && !user &&
            <button className="text-blue-500 flex flex-row gap-2 items-center" onClick={() => loginWithRedirect()}>
              <FaSignInAlt />
              <span>Login</span>
            </button>
          }
        </div>
      </div>
    </>
  )
}

export default NavBar