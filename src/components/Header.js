import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/kids.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isEDAOpen, setIsEDAOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsProjectsOpen(false); // Close Projects dropdown on menu toggle
    setIsEDAOpen(false); // Close EDA dropdown on menu toggle
  };

  const toggleProjectsMenu = () => {
    setIsProjectsOpen(!isProjectsOpen);
    setIsEDAOpen(false); // Close EDA dropdown
  };

  const toggleEDAMenu = () => {
    setIsEDAOpen(!isEDAOpen);
    setIsProjectsOpen(false); // Close Projects dropdown
  };

  const closeDropdowns = () => {
    setIsProjectsOpen(false);
    setIsEDAOpen(false);
  };

  return (
    <header className="sticky top-0 bg-blue-600 z-10 text-white shadow-md bg-blend-overlay bg-cover bg-opacity-90" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div>
          <Link to="/" className="text-4xl font-bold font-poppins">Ashwin's Portfolio</Link>
        </div>
        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none px-3 py-2 text-white"
          >
            <svg className={`h-8 w-8 fill-current transition-transform duration-500 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`} viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex space-x-4 items-center ">
          <ul className="flex space-x-4 font-bold text-xl cursor-auto">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="relative group no-underline">
              <div
                className="nav-link"
                onMouseEnter={() => setIsEDAOpen(true)}
                onMouseLeave={() => setIsEDAOpen(false)}
              >
                EDA
                {isEDAOpen && (
                  <ul className="absolute bg-blue-600 text-white shadow-md rounded mt-2 py-1 w-44 text-center">
                    <li><Link to="/cleaning" className="block px-6 py-2 text-white hover:bg-slate-800 transition duration-300">Cleaning</Link></li>
                    <li><Link to="/analysis" className="block px-6 py-2 text-white hover:bg-slate-800 transition duration-300">Analysis</Link></li>
                    {/* <li><Link to="/visualization" className="block px-6 py-2 text-white hover:bg-slate-800 transition duration-300">Visualization</Link></li> */}
                  </ul>
                )}
              </div>
            </li>
            <li className="relative group">
              <div
                className="nav-link"
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
              >
                Problem
                {isProjectsOpen && (
                  <ul className="absolute bg-blue-600 text-white shadow-md rounded mt-2 py-1 w-36">
                    <li><Link to="/problem1" className="block px-2 py-2 text-white hover:bg-slate-800 transition duration-300">Definition</Link></li>
                    <li><Link to="/problem2" className="block px-2 py-2 text-white hover:bg-slate-800 transition duration-300">Description</Link></li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/learning" className="nav-link">Learning</Link>
            </li>
            <li>
              <Link to="/sdg" className="nav-link">SDG</Link>
            </li>
          </ul>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full opacity-90 bg-blue-600 z-50 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className="flex flex-col items-center">
            <li>
              <Link to="/" className="block px-14 py-2 text-white hover:bg-blue-900 transition duration-300" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block px-14 py-2 text-white hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>About</Link>
            </li>
            <li className="relative group">
              <button onClick={toggleEDAMenu} className="block px-14 py-2 text-white hover:bg-blue-800 transition duration-300">EDA</button>
              {isEDAOpen && (
                <ul className="bg-blue-600 text-white shadow-md rounded mt-2 py-1 w-36">
                  <li><Link to="/cleaning" className="block px-4 py-2 hover:bg-blue-800 transition duration-300" onClick={closeDropdowns}>Cleaning</Link></li>
                  <li><Link to="/analysis" className="block px-4 py-2 hover:bg-blue-800 transition duration-300" onClick={closeDropdowns}>Analysis</Link></li>
                  {/* <li><Link to="/visualization" className="block px-4 py-2 hover:bg-blue-800 transition duration-300" onClick={closeDropdowns}>Visualization</Link></li> */}
                </ul>
              )}
            </li>
            <li className="relative group">
              <button onClick={toggleProjectsMenu} className="block px-10 py-2 text-white hover:bg-blue-800 transition duration-300">Problem</button>
              {isProjectsOpen && (
                <ul className="bg-blue-600 text-white shadow-md rounded mt-2 py-1 w-36">
                  <li><Link to="/problem1" className="block px-4 py-2 hover:bg-blue-800 transition duration-300" onClick={closeDropdowns}>Definition</Link></li>
                  <li><Link to="/problem2" className="block px-4 py-2 hover:bg-blue-800 transition duration-300" onClick={closeDropdowns}>Description</Link></li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/learning" className="block px-14 py-2 text-white hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>Learning</Link>
            </li>
            <li>
              <Link to="/sdg" className="block px-14 py-2 text-white hover:bg-blue-800 transition duration-300" onClick={toggleMenu}>SDG</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
