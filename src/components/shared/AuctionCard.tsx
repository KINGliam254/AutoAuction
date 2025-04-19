import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Activity, Fuel, Clock, Users, Zap } from 'lucide-react';
import { Auction } from '../../types';
import { motion } from 'framer-motion';
import { formatDistanceToNow } from 'date-fns';

interface AuctionCardProps {
  auction: Auction;
}

const AuctionCard: React.FC<AuctionCardProps> = ({ auction }) => {
  const [timeLeft, setTimeLeft] = useState('');
  
  useEffect(() => {
    const interval = setInterval(() => {
      const endTime = new Date(auction.endsAt);
      const now = new Date();
      
      if (endTime > now) {
        setTimeLeft(formatDistanceToNow(endTime, { addSuffix: true }));
      } else {
        setTimeLeft('Ended');
        clearInterval(interval);
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, [auction.endsAt]);
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Link to={`/auctions/${auction.id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={auction.images[0]} 
            alt={auction.title} 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center">
              <Zap size={14} className="mr-1" />
              Live Auction
            </span>
          </div>
          {auction.isFeatured && (
            <div className="absolute top-4 right-4">
              <span className="bg-accent-500 text-primary-900 text-sm font-medium px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <div className="flex items-center text-white">
              <Clock size={16} className="mr-1" />
              <span className="text-sm font-medium">{timeLeft}</span>
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-primary-800 mb-1 line-clamp-1">{auction.title}</h3>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-secondary-600">
                ${auction.currentBid.toLocaleString()}
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <Users size={16} className="mr-1" />
                <span>{auction.bidCount} bids</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-primary-500" />
              <span>{auction.year}</span>
            </div>
            <div className="flex items-center">
              <Activity size={16} className="mr-2 text-primary-500" />
              <span>{auction.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center">
              <Fuel size={16} className="mr-2 text-primary-500" />
              <span>{auction.fuelType}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-primary-500" />
              <span className="truncate">{auction.location}</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-5 pt-5">
            <Link 
              to={`/auctions/${auction.id}`}
              className="text-secondary-600 hover:text-secondary-800 font-medium flex justify-between items-center transition-colors"
            >
              <span>Place Bid</span>
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

export default AuctionCard;