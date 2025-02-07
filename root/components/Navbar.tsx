import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-primary-600" />
              {/* <span className="font-bold text-xl text-gray-900"></span> */}
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-primary-600' : ''
                }`
              }
            >
              Blog
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-primary-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-primary-600 bg-indigo-50'
                    : 'text-primary-600 hover:text-primary-500 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-primary-600 bg-indigo-50'
                    : 'text-primary-600 hover:text-primary-500 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              Blog
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;