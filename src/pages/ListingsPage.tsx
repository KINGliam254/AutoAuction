import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cars, auctions } from '../data/mockData';
import CarCard from '../components/shared/CarCard';
import AuctionCard from '../components/shared/AuctionCard';
import { ChevronDown, Search } from 'lucide-react';

const ListingsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialType = queryParams.get('type') || 'all';
  
  const [type, setType] = useState(initialType);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [makes, setMakes] = useState<string[]>([]);
  const [selectedMake, setSelectedMake] = useState<string>('');
  const [yearRange, setYearRange] = useState<[number, number]>([2000, 2023]);
  
  useEffect(() => {
    // Extract unique makes
    const allMakes = [...cars, ...auctions].map(vehicle => vehicle.make);
    setMakes(['All', ...new Set(allMakes)]);
  }, []);
  
  const filterListings = () => {
    let filtered = type === 'auction' 
      ? [...auctions] 
      : type === 'buy' 
        ? [...cars] 
        : [...cars, ...auctions];
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => item.title.toLowerCase().includes(query) || 
               item.make.toLowerCase().includes(query) || 
               item.model.toLowerCase().includes(query)
      );
    }
    
    // Apply make filter
    if (selectedMake && selectedMake !== 'All') {
      filtered = filtered.filter(item => item.make === selectedMake);
    }
    
    // Apply price range
    filtered = filtered.filter(
      item => (item.price || item.currentBid) >= priceRange[0] && 
             (item.price || item.currentBid) <= priceRange[1]
    );
    
    // Apply year range
    filtered = filtered.filter(
      item => item.year >= yearRange[0] && item.year <= yearRange[1]
    );
    
    return filtered;
  };
  
  const filteredListings = filterListings();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-primary-800 mb-2">
            {type === 'auction' ? 'Live Auctions' : type === 'buy' ? 'Cars For Sale' : 'All Vehicles'}
          </h1>
          <p className="text-gray-600">
            {filteredListings.length} {filteredListings.length === 1 ? 'result' : 'results'} found
          </p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <div className="relative">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="all">All Listings</option>
              <option value="buy">Buy Now</option>
              <option value="auction">Auctions</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold text-primary-800 mb-6">Filter</h2>
            
            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="text"
                  placeholder="Search make, model..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            {/* Make */}
            <div className="mb-6">
              <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-2">
                Make
              </label>
              <div className="relative">
                <select
                  id="make"
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {makes.map((make, index) => (
                    <option key={index} value={make}>{make}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-2">
                Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
              </label>
              <input
                id="price-range-min"
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <input
                id="price-range-max"
                type="range"
                min="0"
                max="100000"
                step="5000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
              />
            </div>
            
            {/* Year Range */}
            <div className="mb-6">
              <label htmlFor="year-range" className="block text-sm font-medium text-gray-700 mb-2">
                Year Range: {yearRange[0]} - {yearRange[1]}
              </label>
              <input
                id="year-range-min"
                type="range"
                min="2000"
                max="2023"
                step="1"
                value={yearRange[0]}
                onChange={(e) => setYearRange([parseInt(e.target.value), yearRange[1]])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <input
                id="year-range-max"
                type="range"
                min="2000"
                max="2023"
                step="1"
                value={yearRange[1]}
                onChange={(e) => setYearRange([yearRange[0], parseInt(e.target.value)])}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
              />
            </div>
            
            {/* Reset Filters */}
            <button
              onClick={() => {
                setSearchQuery('');
                setPriceRange([0, 100000]);
                setSelectedMake('');
                setYearRange([2000, 2023]);
              }}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>
        
        {/* Listings Grid */}
        <div className="lg:col-span-3">
          {filteredListings.length === 0 ? (
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your filters to find what you're looking for.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredListings.map((item) => (
                'currentBid' in item ? (
                  <AuctionCard key={item.id} auction={item as any} />
                ) : (
                  <CarCard key={item.id} car={item} />
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;