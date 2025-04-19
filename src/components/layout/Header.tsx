
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold bg-gradient-to-r from-pomodoro-red to-tomato bg-clip-text text-transparent">
              Amunì
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors"
            >
              Shop
            </Link>
            <Link 
              to="/about" 
              className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors"
            >
              Chi Siamo
            </Link>
            <Link 
              to="/contact" 
              className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors"
            >
              Contatti
            </Link>
          </nav>

          {/* Cart and Mobile menu */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 text-olive hover:text-pomodoro-red hover:bg-red-50 rounded-full transition-all"
            >
              <FiShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-basil-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-olive hover:text-pomodoro-red transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 mt-4">
            <div className="flex flex-col space-y-4 py-4">
              <Link 
                to="/" 
                className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Chi Siamo
              </Link>
              <Link 
                to="/contact" 
                className="font-opensans font-medium text-olive hover:text-pomodoro-red transition-colors px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contatti
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
