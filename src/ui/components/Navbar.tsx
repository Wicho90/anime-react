import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <header
      className={`w-full top-0 left-0 right-0 bg-[#00000080] backdrop-saturate-[180%] backdrop-blur-[5px] z-10 ${
        isScrolled ? 'shadow-lg shadow-cyan-500/50'  : ''
        // isScrolled ? 'border-b border-red-600 shadow-lg shadow-red-500/50'  : ''
      }`}

    >
      <div className="max-w-6xl mx-8 my-4 px-2 md:px-4 h-full flex items-center justify-between">
        <nav className="flex items-center">
          <a href="/" className="text-white text-xl font-semibold mr-4">
            Anime App
          </a>
          <ul className="flex space-x-4 ml-2">
            <li>
              <button
                className="text-white hover:text-gray-300 focus:text-gray-300 focus:outline-none"
                onClick={toggleDropdown}
              >
                Recientes
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-16 py-2 px-4 bg-gray-800 bg-opacity-90 rounded-md shadow-lg">
                  <div className="grid grid-cols-3 gap-2">
                    <a href="#" className="text-white hover:text-gray-300">
                      Feature 1
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      Feature 2
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      Feature 3
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      Feature 4
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      Feature 5
                    </a>
                    <a href="#" className="text-white hover:text-gray-300">
                      Feature 6
                    </a>
                  </div>
                </div>
              )}
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Emision
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Accion
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-gray-300">
                Otros
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <button className="text-white bg-transparent hover:bg-gray-800 hover:text-white rounded-md px-4 py-1 ml-2 transition duration-300">
            Log in
          </button>
          <button className="text-white border border-white rounded-md px-4 py-0 hover:bg-white hover:text-black transition duration-300 ml-2">
            Sign up
          </button>
        </div>
      </div>
    </header>
    )
}


<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            

            <div className="navbar-collapse">
                <div className="navbar-nav center">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/anime"
                    >
                        Anime
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active' : '' }` }
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>