import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-800 text-white py-12 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="block mb-4">
              <span className="text-2xl font-bold">
                Auto<span className="text-accent-500">Auction</span>
              </span>
            </Link>
            <p className="text-gray-300 mb-4">
              Premium marketplace for car enthusiasts. Buy, sell, and auction the finest vehicles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Buy a Car
                </Link>
              </li>
              <li>
                <Link to="/sell" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Sell Your Car
                </Link>
              </li>
              <li>
                <Link to="/listings?type=auction" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Auctions
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-300 hover:text-accent-500 transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-accent-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-300" />
                <a href="mailto:info@autoauction.com" className="text-gray-300 hover:text-accent-500 transition-colors">
                  info@autoauction.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-300" />
                <a href="tel:+18001234567" className="text-gray-300 hover:text-accent-500 transition-colors">
                  1-800-123-4567
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 text-gray-900 rounded-l-md focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} AutoAuction. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;