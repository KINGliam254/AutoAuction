import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCarById } from '../data/mockData';
import { Car } from '../types';
import { 
  Calendar, MapPin, Activity, Fuel, 
  Info, User, Gauge, Palette, Cog, Phone, Mail, Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

const CarDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  
  useEffect(() => {
    if (id) {
      const foundCar = getCarById(id);
      if (foundCar) {
        setCar(foundCar);
      }
    }
  }, [id]);
  
  if (!car) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="spinner"></div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/listings" className="text-primary-600 hover:text-primary-800 transition-colors">
          ← Back to Listings
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Gallery and Details */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
            <div className="relative h-64 sm:h-96">
              <img 
                src={car.images[activeImage]} 
                alt={car.title} 
                className="w-full h-full object-cover" 
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
            <div className="p-4 flex items-center space-x-2 overflow-x-auto">
              {car.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden ${
                    index === activeImage ? 'ring-2 ring-primary-500' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${car.title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Basic Information */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-2">
              {car.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Calendar size={18} className="mr-2 text-primary-500" />
                <span>{car.year}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Activity size={18} className="mr-2 text-primary-500" />
                <span>{car.mileage.toLocaleString()} miles</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Fuel size={18} className="mr-2 text-primary-500" />
                <span>{car.fuelType}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin size={18} className="mr-2 text-primary-500" />
                <span>{car.location}</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">{car.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
                  <Info size={18} className="mr-2" />
                  Vehicle Details
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Make:</span>
                    <span className="font-medium">{car.make}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Model:</span>
                    <span className="font-medium">{car.model}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Transmission:</span>
                    <span className="font-medium">{car.transmission}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Engine:</span>
                    <span className="font-medium">{car.engine}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Exterior Color:</span>
                    <span className="font-medium">{car.exteriorColor}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Interior Color:</span>
                    <span className="font-medium">{car.interiorColor}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">VIN:</span>
                    <span className="font-medium">{car.vin}</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
                  <User size={18} className="mr-2" />
                  Seller Information
                </h2>
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={car.sellerInfo.avatar} 
                    alt={car.sellerInfo.name}
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <p className="font-medium">{car.sellerInfo.name}</p>
                    <p className="text-gray-500 text-sm">Member since {car.sellerInfo.joinedDate}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">Seller Rating: {car.sellerInfo.rating}/5</p>
                <Link 
                  to={`/profile/${car.sellerInfo.id}`}
                  className="text-primary-600 hover:text-primary-800 font-medium transition-colors"
                >
                  View Seller Profile
                </Link>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
              <Cog size={20} className="mr-2" />
              Features & Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {car.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Price and Contact */}
        <div className="lg:col-span-1">
          {/* Price Card */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="text-center mb-4">
              <h2 className="text-3xl font-bold text-primary-800">
                ${car.price.toLocaleString()}
              </h2>
              <p className="text-gray-500">Listed on {car.listingDate}</p>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => setShowContactForm(!showContactForm)}
                className="w-full bg-primary-800 hover:bg-primary-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
              >
                <Phone size={18} className="mr-2" />
                Contact Seller
              </button>
              
              <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center">
                <Mail size={18} className="mr-2" />
                Email Seller
              </button>
              
              <button className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-3 rounded-lg transition-colors flex items-center justify-center">
                <Heart size={18} className="mr-2" />
                Save to Favorites
              </button>
            </div>
            
            {/* Contact Form */}
            {showContactForm && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-200"
              >
                <h3 className="text-lg font-semibold text-primary-800 mb-4">
                  Contact Seller
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      defaultValue={`I'm interested in the ${car.year} ${car.make} ${car.model}. Please contact me at your earliest convenience.`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-800 hover:bg-primary-700 text-white font-medium py-2 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            )}
          </div>
          
          {/* Similar Listings */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-primary-800 mb-4">
              Similar Listings
            </h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <img 
                  src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Similar car" 
                  className="w-20 h-20 rounded-md object-cover" 
                />
                <div>
                  <h3 className="font-medium text-primary-800">2018 Audi S5 Coupe</h3>
                  <p className="text-gray-600 text-sm">$52,900</p>
                  <p className="text-xs text-gray-500">24,500 miles</p>
                </div>
              </div>
              <div className="flex gap-3">
                <img 
                  src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Similar car" 
                  className="w-20 h-20 rounded-md object-cover" 
                />
                <div>
                  <h3 className="font-medium text-primary-800">2019 BMW M2 Competition</h3>
                  <p className="text-gray-600 text-sm">$59,500</p>
                  <p className="text-xs text-gray-500">18,200 miles</p>
                </div>
              </div>
              <div className="flex gap-3">
                <img 
                  src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="Similar car" 
                  className="w-20 h-20 rounded-md object-cover" 
                />
                <div>
                  <h3 className="font-medium text-primary-800">2020 Mercedes-AMG C63</h3>
                  <p className="text-gray-600 text-sm">$68,900</p>
                  <p className="text-xs text-gray-500">12,800 miles</p>
                </div>
              </div>
              <Link 
                to="/listings"
                className="block text-center text-primary-600 hover:text-primary-800 font-medium transition-colors mt-4"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;