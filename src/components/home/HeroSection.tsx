import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[85vh] md:h-[90vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Luxury car showcase" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-[-40px] md:mt-0">
        <div className="flex flex-col max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
          >
            Find Your Dream Car at the Perfect Price
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8"
          >
            Premium marketplace for buying, selling, and auctioning 
            exceptional vehicles. Join thousands of car enthusiasts today.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/listings" 
              className="bg-secondary-500 hover:bg-secondary-600 text-white py-3 px-8 rounded-md font-medium flex items-center justify-center transition-colors"
            >
              <Search size={20} className="mr-2" />
              Browse Cars
            </Link>
            
            <Link 
              to="/listings?type=auction" 
              className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-8 rounded-md font-medium flex items-center justify-center transition-colors"
            >
              <Zap size={20} className="mr-2" />
              Live Auctions
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
          >
            <div className="flex items-center space-x-2 text-white">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-slow"></div>
              <span className="font-medium">Live now:</span>
              <span>2019 Porsche 911 Carrera S auction ends in 23 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;