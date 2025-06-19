
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-chocolate-900">
              Janki's Choco Room
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-gold-600 bg-gold-50' 
                    : 'text-chocolate-700 hover:text-gold-600 hover:bg-gold-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/menu') 
                    ? 'text-gold-600 bg-gold-50' 
                    : 'text-chocolate-700 hover:text-gold-600 hover:bg-gold-50'
                }`}
              >
                Menu
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-gold-600 bg-gold-50' 
                    : 'text-chocolate-700 hover:text-gold-600 hover:bg-gold-50'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-chocolate-700 hover:text-gold-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-gold-600 bg-gold-50' 
                    : 'text-chocolate-700 hover:text-gold-600 hover:bg-gold-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/menu') 
                    ? 'text-gold-600 bg-gold-50' 
                    : 'text-chocolate-700 hover:text-gold-600 hover:bg-gold-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-gold-600 bg-gold-50' 
                    : 'text-chocolate-700 hover:text-gold-600 hover:bg-gold-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
