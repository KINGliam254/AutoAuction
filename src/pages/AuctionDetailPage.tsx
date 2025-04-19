import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAuctionById, getBidsForAuction } from '../data/mockData';
import { Auction, Bid } from '../types';
import { 
  Calendar, MapPin, Activity, Fuel, Clock, Users, 
  Info, User, DollarSign, Gauge, Palette, Cog
} from 'lucide-react';
import { motion } from 'framer-motion';
import { format, formatDistanceToNow } from 'date-fns';

const AuctionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [auction, setAuction] = useState<Auction | null>(null);
  const [bids, setBids] = useState<Bid[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const [bidAmount, setBidAmount] = useState('');
  const [timeLeft, setTimeLeft] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    if (id) {
      const foundAuction = getAuctionById(id);
      if (foundAuction) {
        setAuction(foundAuction);
        setBids(getBidsForAuction(id));
        
        // Set initial bid amount
        const nextBid = Math.floor(foundAuction.currentBid * 1.05 / 100) * 100;
        setBidAmount(nextBid.toString());
      }
    }
  }, [id]);
  
  useEffect(() => {
    if (!auction) return;
    
    const timer = setInterval(() => {
      const endTime = new Date(auction.endsAt);
      const now = new Date();
      
      if (endTime > now) {
        setTimeLeft(formatDistanceToNow(endTime, { addSuffix: true }));
      } else {
        setTimeLeft('Auction ended');
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [auction]);
  
  const handleBid = (e: React.FormEvent) => {
    e.preventDefault();
    
    const bidValue = Number(bidAmount);
    
    if (!auction) return;
    
    if (isNaN(bidValue) || bidValue <= 0) {
      setError('Please enter a valid bid amount');
      return;
    }
    
    if (bidValue <= auction.currentBid) {
      setError(`Bid must be higher than current bid of $${auction.currentBid.toLocaleString()}`);
      return;
    }
    
    // For demo purposes, we'll just show a success message
    // In a real app, this would submit to an API
    alert(`Bid of $${bidValue.toLocaleString()} placed successfully!`);
    setError('');
  };
  
  if (!auction) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="spinner"></div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/listings?type=auction" className="text-primary-600 hover:text-primary-800 transition-colors">
          ← Back to Auctions
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Gallery and Details */}
        <div className="lg:col-span-2">
          {/* Image Gallery */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md mb-8">
            <div className="relative h-64 sm:h-96">
              <img 
                src={auction.images[activeImage]} 
                alt={auction.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Live Auction
                </span>
              </div>
            </div>
            <div className="p-4 flex items-center space-x-2 overflow-x-auto">
              {auction.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-16 h-16 rounded-md overflow-hidden ${
                    index === activeImage ? 'ring-2 ring-secondary-500' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${auction.title} - Image ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          
          {/* Basic Information */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-2">
              {auction.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Calendar size={18} className="mr-2 text-primary-500" />
                <span>{auction.year}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Activity size={18} className="mr-2 text-primary-500" />
                <span>{auction.mileage.toLocaleString()} miles</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Fuel size={18} className="mr-2 text-primary-500" />
                <span>{auction.fuelType}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin size={18} className="mr-2 text-primary-500" />
                <span>{auction.location}</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">{auction.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
                  <Info size={18} className="mr-2" />
                  Vehicle Details
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Make:</span>
                    <span className="font-medium">{auction.make}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Model:</span>
                    <span className="font-medium">{auction.model}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Transmission:</span>
                    <span className="font-medium">{auction.transmission}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Engine:</span>
                    <span className="font-medium">{auction.engine}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Exterior Color:</span>
                    <span className="font-medium">{auction.exteriorColor}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Interior Color:</span>
                    <span className="font-medium">{auction.interiorColor}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">VIN:</span>
                    <span className="font-medium">{auction.vin}</span>
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
                    src={auction.sellerInfo.avatar} 
                    alt={auction.sellerInfo.name}
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <p className="font-medium">{auction.sellerInfo.name}</p>
                    <p className="text-gray-500 text-sm">Member since {auction.sellerInfo.joinedDate}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">Seller Rating: {auction.sellerInfo.rating}/5</p>
                <Link 
                  to={`/profile/${auction.sellerInfo.id}`}
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
              {auction.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - Auction Info and Bidding */}
        <div className="lg:col-span-1">
          {/* Auction Status */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-primary-800 mb-4">
              Auction Status
            </h2>
            <div className="space-y-4">
              <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                <div className="flex items-center mb-2">
                  <Clock size={18} className="mr-2 text-primary-600" />
                  <span className="font-medium text-primary-800">Time Remaining:</span>
                </div>
                <p className="text-2xl font-bold text-primary-600">{timeLeft}</p>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Current Bid:</span>
                  <span className="font-bold text-xl text-secondary-600">
                    ${auction.currentBid.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Starting Bid:</span>
                  <span>${auction.startingBid.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Number of Bids:</span>
                  <span>{auction.bidCount}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Watchers:</span>
                  <span>{auction.watchers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auction Ends:</span>
                  <span>{format(new Date(auction.endsAt), 'MMM d, yyyy h:mm a')}</span>
                </div>
              </div>
              
              {/* Bid Form */}
              <form onSubmit={handleBid} className="mt-6">
                <label htmlFor="bid-amount" className="block font-medium text-gray-700 mb-2">
                  Place Your Bid
                </label>
                <div className="flex">
                  <div className="relative flex-grow">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                      $
                    </span>
                    <input
                      id="bid-amount"
                      type="number"
                      value={bidAmount}
                      onChange={(e) => setBidAmount(e.target.value)}
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-secondary-500"
                      placeholder="Enter amount"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-4 rounded-r-lg transition-colors"
                  >
                    Bid Now
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
                <p className="text-sm text-gray-500 mt-2">
                  Minimum bid: ${Math.floor(auction.currentBid * 1.05).toLocaleString()}
                </p>
              </form>
              
              <div className="flex justify-between pt-4 mt-4 border-t border-gray-200">
                <button className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                  Add to Watchlist
                </button>
                <button className="text-primary-600 hover:text-primary-800 font-medium transition-colors">
                  Share
                </button>
              </div>
            </div>
          </div>
          
          {/* Bid History */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold text-primary-800 mb-4 flex items-center">
              <DollarSign size={20} className="mr-2" />
              Bid History
            </h2>
            {bids.length === 0 ? (
              <p className="text-gray-500">No bids placed yet.</p>
            ) : (
              <div className="space-y-4">
                {bids.map((bid) => (
                  <div key={bid.id} className="flex items-center justify-between pb-3 border-b border-gray-200">
                    <div className="flex items-center">
                      <img 
                        src={bid.userInfo.avatar} 
                        alt={bid.userInfo.name}
                        className="w-8 h-8 rounded-full object-cover mr-3" 
                      />
                      <div>
                        <p className="font-medium">{bid.userInfo.name}</p>
                        <p className="text-xs text-gray-500">
                          {format(new Date(bid.time), 'MMM d, yyyy h:mm a')}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-secondary-600">
                      ${bid.amount.toLocaleString()}
                    </p>
                  </div>
                ))}
                
                <button className="w-full text-gray-600 hover:text-gray-800 text-sm font-medium transition-colors">
                  View All Bids
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionDetailPage;