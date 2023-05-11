import React, { useState } from 'react';
import { setLogout } from '../state/index'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/")
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        {/* stays the same the entire time */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My App</span>
      </div>

{/* BURGER ICON  */}
      <div className="block md:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        > 
          <svg className="h-3 w-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/>
          </svg>
        </button>
      </div>

    {/* LARGE SCREEN  */}
      <div className="hidden md:flex items-center">
        <div className="mr-4 text-gray-200">Juan</div>
        <button
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white"
          onClick={handleLogout} 
        >
          Logout
        </button>
      </div>


    {/* THIS IS WHEN THE MENU OPENS  */}
      {isMenuOpen && (
        <div className="md:hidden w-full">
          <div className="text-sm">
            <div className="block mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4">
              Home
            </div>
            <div className="block mt-4 md:inline-block md:mt-0 text-gray-200 hover:text-white mr-4">
              Profile
            </div>
          </div>
          <button
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}


    </nav>
  );
}

export default Navbar;
