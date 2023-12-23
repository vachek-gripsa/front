import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Logo from 'src/ui/Logo';

const ResponsiveNav = () => {
  const [isActive, setIsActive] = useState<number | null>(null);

  const handleLinkClick = (index: number) => {
    setIsActive(index);
  };
  const linkClass =
    'text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700';

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, path: '/', name: 'Main' },
    { id: 2, path: '/registration', name: 'Registration' },
    { id: 3, path: '/about', name: 'About' },
    { id: 4, path: '/first-fetch', name: 'Data Fetch' }
  ];

  return (
    <nav className="border-gray-200 dark:bg-gray-900 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Vachek-Gripsa
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:ml-6 sm:block md:w-auto" id="navbar-default">
          <ul className="flex space-x-4 ">
            {navItems.map((link, index) => (
              <li
                key={index}
                // className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
              >
                <Link
                  to={link.path}
                  className={index === isActive ? `${linkClass} bg-gray-700 ` : `${linkClass}`}
                  onClick={() => handleLinkClick(index)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} className="text-white" />
          )}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-0 w-[70%] h-full border-r border-r-gray-900 bg-[#141f2c] ease-in-out duration-500'
              : 'ease-in-out w-[70%] duration-500 fixed top-0 bottom-0 left-[-100%]'
          }
        >
          {/* Mobile Logo */}
          <div className='mx-auto p-4'>
            <Logo />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Vachek-Gripsa
            </span>
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((link, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-700 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link
                to={link.path}
                className={index === isActive ? `${linkClass} bg-gray-700 ` : `${linkClass}`}
                onClick={() => handleLinkClick(index)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveNav;
