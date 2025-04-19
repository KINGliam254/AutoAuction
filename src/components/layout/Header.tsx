import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        isScrolled 
          ? 'bg-primary-800 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-white">
              Auto<span className="text-accent-500">Auction</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-accent-500 transition-colors font-medium">
              Home
            </Link>
            <Link to="/listings" className="text-white hover:text-accent-500 transition-colors font-medium">
              Buy
            </Link>
            <Link to="/sell" className="text-white hover:text-accent-500 transition-colors font-medium">
              Sell
            </Link>
            <Link to="/listings?type=auction" className="text-white hover:text-accent-500 transition-colors font-medium">
              Auctions
            </Link>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/search" className="text-white hover:text-accent-500 transition-colors">
              <Search size={22} />
            </Link>
            <Link to="/favorites" className="text-white hover:text-accent-500 transition-colors">
              <Heart size={22} />
            </Link>
            <Link to="/profile" className="text-white hover:text-accent-500 transition-colors">
              <User size={22} />
            </Link>
            <Link 
              to="/sell" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-4 rounded-md transition-colors font-medium"
            >
              List Your Car
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-800 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="block py-2 text-white hover:text-accent-500 transition-colors font-medium"
              >
                Home
              </Link>
              <Link 
                to="/listings" 
                className="block py-2 text-white hover:text-accent-500 transition-colors font-medium"
              >
                Buy
              </Link>
              <Link 
                to="/sell" 
                className="block py-2 text-white hover:text-accent-500 transition-colors font-medium"
              >
                Sell
              </Link>
              <Link 
                to="/listings?type=auction" 
                className="block py-2 text-white hover:text-accent-500 transition-colors font-medium"
              >
                Auctions
              </Link>
              <div className="pt-2 border-t border-primary-700">
                <Link 
                  to="/search" 
                  className="block py-2 text-white hover:text-accent-500 transition-colors font-medium"
                >
                  Search
                </Link>
                <Link 
                  to="/favorites" 
                  className="block py-2 text-white hover:text-accent-500 transition-colors font-medium"
                >
                  My Favorites
                </Link>
                <Link 
                  to="/profile" 
                  className="block py-2 text-white hover:text-accent-500 transition-colors font-medium"
                >
                  My Profile
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;