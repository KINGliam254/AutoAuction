import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Activity, Fuel } from 'lucide-react';
import { Car } from '../../types';
import { motion } from 'framer-motion';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/cars/${car.id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={car.images[0]} 
            alt={car.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-800 text-white text-sm font-medium px-3 py-1 rounded-full">
              {car.sellerType === 'dealer' ? 'Dealer' : 'Private Seller'}
            </span>
          </div>
          {car.isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent-500 text-primary-900 text-sm font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
        </div>
        
        <div className="p-5">
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-primary-800 mb-1 line-clamp-1">{car.title}</h3>
            <p className="text-2xl font-bold text-secondary-600">
              ${car.price.toLocaleString()}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-primary-500" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center">
              <Activity size={16} className="mr-2 text-primary-500" />
              <span>{car.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center">
              <Fuel size={16} className="mr-2 text-primary-500" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-primary-500" />
              <span className="truncate">{car.location}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-5 pt-5">
            <Link 
              to={`/cars/${car.id}`}
              className="text-primary-600 hover:text-primary-800 font-medium flex justify-between items-center transition-colors"
            >
              <span>View Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CarCard;