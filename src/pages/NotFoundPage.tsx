import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <img 
        src="https://images.pexels.com/photos/4549414/pexels-photo-4549414.jpeg?auto=compress&cs=tinysrgb&w=600" 
        alt="404 Not Found" 
        className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-lg mb-8"
      />
      
      <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 text-center">
        Page Not Found
      </h1>
      
      <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          to="/" 
          className="bg-primary-800 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
        >
          <Home size={20} className="mr-2" />
          Go to Homepage
        </Link>
        
        <Link 
          to="/search" 
          className="bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors"
        >
          <Search size={20} className="mr-2" />
          Search Listings
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;