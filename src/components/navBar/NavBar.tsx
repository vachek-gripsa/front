import { Link } from 'react-router-dom';
import Logo from '../../ui/Logo';
import { useState } from 'react';

const linksArray = [
  { path: '/', name: 'Main' },
  { path: '/registration', name: 'Registration' },
  { path: '/about', name: 'About' },
  { path: '/first-fetch', name: 'Data Fetch' }
];

export default function NavBar() {
  const [isActive, setIsActive] = useState<number | null>(null);

  const handleLinkClick = (index: number) => {
    setIsActive(index);
  };

  const linkClass =
    'text-gray-300  hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700';
  return (
    <>
      <nav className="border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Logo />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Vachek-Gripsa
            </span>
          </div>
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            data-collapse-toggle="navbar-default"
            type="button"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div className="hidden sm:ml-6 sm:block md:w-auto" id="navbar-default">
            <ul className="flex space-x-4">
              {linksArray.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className={index === isActive ? `${linkClass} bg-gray-700 ` : `${linkClass}`}
                    onClick={() => handleLinkClick(index)}
                  >
                    {link.name}{' '}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
