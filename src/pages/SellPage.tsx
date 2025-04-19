import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Camera, Upload, Check, X } from 'lucide-react';

const SellPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [listingType, setListingType] = useState<'sale' | 'auction' | ''>('');
  const [vehicleInfo, setVehicleInfo] = useState({
    year: '',
    make: '',
    model: '',
    trim: '',
    mileage: '',
    vin: '',
    exteriorColor: '',
    interiorColor: '',
    transmission: '',
    fuelType: '',
    price: '',
    description: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setVehicleInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(prev => prev + 1);
  };
  
  const prevStep = () => {
    window.scrollTo(0, 0);
    setStep(prev => prev - 1);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary-800 mb-2">
            Sell Your Car
          </h1>
          <p className="text-gray-600">
            List your vehicle for sale or auction in just a few easy steps.
          </p>
        </div>
        
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between relative">
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-1 bg-gray-200 z-0"></div>
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="relative z-10 flex flex-col items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step >= s 
                      ? 'bg-primary-800 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {step > s ? (
                    <Check size={18} />
                  ) : (
                    s
                  )}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {s === 1 && 'Listing Type'}
                  {s === 2 && 'Vehicle Info'}
                  {s === 3 && 'Photos'}
                  {s === 4 && 'Review'}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Form Steps */}
        <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Listing Type */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-primary-800 mb-6">
                  How would you like to sell your car?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div 
                    className={`border rounded-xl p-6 cursor-pointer transition-all ${
                      listingType === 'sale' 
                        ? 'border-primary-500 bg-primary-50 shadow-md' 
                        : 'border-gray-200 hover:border-primary-300 hover:shadow-sm'
                    }`}
                    onClick={() => setListingType('sale')}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-primary-100 rounded-full">
                        <DollarSign className="text-primary-600" size={24} />
                      </div>
                      {listingType === 'sale' && (
                        <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-primary-800 mb-2">
                      Fixed Price Sale
                    </h3>
                    <p className="text-gray-600">
                      Set your price and sell directly to interested buyers. Best for quick sales.
                    </p>
                  </div>
                  
                  <div 
                    className={`border rounded-xl p-6 cursor-pointer transition-all ${
                      listingType === 'auction' 
                        ? 'border-secondary-500 bg-secondary-50 shadow-md' 
                        : 'border-gray-200 hover:border-secondary-300 hover:shadow-sm'
                    }`}
                    onClick={() => setListingType('auction')}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-3 bg-secondary-100 rounded-full">
                        <Zap className="text-secondary-600" size={24} />
                      </div>
                      {listingType === 'auction' && (
                        <div className="w-6 h-6 bg-secondary-500 rounded-full flex items-center justify-center">
                          <Check size={14} className="text-white" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                      Auction Listing
                    </h3>
                    <p className="text-gray-600">
                      Let buyers bid on your vehicle. Often results in higher final prices.
                    </p>
                  </div>
                </div>
                
                <div className="text-right">
                  <button
                    onClick={nextStep}
                    disabled={!listingType}
                    className={`px-6 py-2 rounded-lg font-medium ${
                      !listingType 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-primary-800 hover:bg-primary-700 text-white'
                    } transition-colors`}
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 2: Vehicle Information */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-primary-800 mb-6">
                  Tell us about your vehicle
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Year *
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={vehicleInfo.year}
                      onChange={handleChange}
                      placeholder="e.g. 2020"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="make" className="block text-sm font-medium text-gray-700 mb-1">
                      Make *
                    </label>
                    <input
                      type="text"
                      id="make"
                      name="make"
                      value={vehicleInfo.make}
                      onChange={handleChange}
                      placeholder="e.g. BMW"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
                      Model *
                    </label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={vehicleInfo.model}
                      onChange={handleChange}
                      placeholder="e.g. M4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="trim" className="block text-sm font-medium text-gray-700 mb-1">
                      Trim
                    </label>
                    <input
                      type="text"
                      id="trim"
                      name="trim"
                      value={vehicleInfo.trim}
                      onChange={handleChange}
                      placeholder="e.g. Competition"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="mileage" className="block text-sm font-medium text-gray-700 mb-1">
                      Mileage *
                    </label>
                    <input
                      type="text"
                      id="mileage"
                      name="mileage"
                      value={vehicleInfo.mileage}
                      onChange={handleChange}
                      placeholder="e.g. 15000"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="vin" className="block text-sm font-medium text-gray-700 mb-1">
                      VIN
                    </label>
                    <input
                      type="text"
                      id="vin"
                      name="vin"
                      value={vehicleInfo.vin}
                      onChange={handleChange}
                      placeholder="e.g. WBS23AH08LFE13789"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="exteriorColor" className="block text-sm font-medium text-gray-700 mb-1">
                      Exterior Color
                    </label>
                    <input
                      type="text"
                      id="exteriorColor"
                      name="exteriorColor"
                      value={vehicleInfo.exteriorColor}
                      onChange={handleChange}
                      placeholder="e.g. Alpine White"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="interiorColor" className="block text-sm font-medium text-gray-700 mb-1">
                      Interior Color
                    </label>
                    <input
                      type="text"
                      id="interiorColor"
                      name="interiorColor"
                      value={vehicleInfo.interiorColor}
                      onChange={handleChange}
                      placeholder="e.g. Black"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">
                      Transmission
                    </label>
                    <select
                      id="transmission"
                      name="transmission"
                      value={vehicleInfo.transmission}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select Transmission</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                      <option value="CVT">CVT</option>
                      <option value="DCT">DCT</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">
                      Fuel Type
                    </label>
                    <select
                      id="fuelType"
                      name="fuelType"
                      value={vehicleInfo.fuelType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select Fuel Type</option>
                      <option value="Gasoline">Gasoline</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                      {listingType === 'auction' ? 'Starting Bid' : 'Price'} *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        $
                      </span>
                      <input
                        type="text"
                        id="price"
                        name="price"
                        value={vehicleInfo.price}
                        onChange={handleChange}
                        placeholder="e.g. 45000"
                        className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={vehicleInfo.description}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell potential buyers about your vehicle's condition, history, features, and any other relevant details."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-6 py-2 rounded-lg font-medium bg-primary-800 hover:bg-primary-700 text-white transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 3: Photos */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-primary-800 mb-6">
                  Upload Photos of Your Vehicle
                </h2>
                
                <p className="text-gray-600 mb-6">
                  High-quality photos significantly increase the chances of selling your vehicle.
                  We recommend uploading at least 10 photos from different angles.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {/* Main Photo Upload */}
                  <div className="col-span-1 sm:col-span-2 md:col-span-3">
                    <label 
                      htmlFor="main-photo" 
                      className="block border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex flex-col items-center">
                        <Camera size={48} className="text-gray-400 mb-4" />
                        <span className="text-lg font-medium text-primary-800 mb-1">
                          Main Vehicle Photo
                        </span>
                        <span className="text-sm text-gray-500 mb-4">
                          This will be the featured image in your listing
                        </span>
                        <button className="px-4 py-2 bg-primary-800 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
                          Select Photo
                        </button>
                      </div>
                      <input
                        type="file"
                        id="main-photo"
                        className="hidden"
                        accept="image/*"
                      />
                    </label>
                  </div>
                  
                  {/* Additional Photos */}
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index}>
                      <label 
                        htmlFor={`photo-${index}`} 
                        className="block border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors h-full"
                      >
                        <div className="flex flex-col items-center h-full justify-center">
                          <Upload size={24} className="text-gray-400 mb-2" />
                          <span className="text-sm text-gray-500">
                            Add Photo
                          </span>
                        </div>
                        <input
                          type="file"
                          id={`photo-${index}`}
                          className="hidden"
                          accept="image/*"
                        />
                      </label>
                    </div>
                  ))}
                </div>
                
                <div className="bg-primary-50 border border-primary-100 rounded-lg p-4 mb-8">
                  <h3 className="font-medium text-primary-800 mb-2">Photo Tips:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Take photos in good lighting, preferably during daylight</li>
                    <li>• Include exterior photos from all angles</li>
                    <li>• Capture interior details including seats, dashboard, and cargo area</li>
                    <li>• Document any special features or modifications</li>
                    <li>• Include photos of the engine bay and wheels</li>
                  </ul>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={nextStep}
                    className="px-6 py-2 rounded-lg font-medium bg-primary-800 hover:bg-primary-700 text-white transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}
            
            {/* Step 4: Review & Submit */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold text-primary-800 mb-6">
                  Review & Submit Your Listing
                </h2>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-primary-800">
                      Listing Summary
                    </h3>
                    <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded font-medium">
                      {listingType === 'auction' ? 'Auction' : 'Fixed Price Sale'}
                    </span>
                  </div>
                  
                  {vehicleInfo.make && vehicleInfo.model && vehicleInfo.year && (
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      {vehicleInfo.year} {vehicleInfo.make} {vehicleInfo.model} {vehicleInfo.trim}
                    </h4>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-gray-600 text-sm">Price:</span>
                      <p className="font-semibold text-secondary-600">
                        ${vehicleInfo.price && parseInt(vehicleInfo.price).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Mileage:</span>
                      <p className="font-semibold">
                        {vehicleInfo.mileage && parseInt(vehicleInfo.mileage).toLocaleString()} miles
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Transmission:</span>
                      <p className="font-semibold">{vehicleInfo.transmission || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Fuel Type:</span>
                      <p className="font-semibold">{vehicleInfo.fuelType || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Exterior Color:</span>
                      <p className="font-semibold">{vehicleInfo.exteriorColor || 'Not specified'}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 text-sm">Interior Color:</span>
                      <p className="font-semibold">{vehicleInfo.interiorColor || 'Not specified'}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-gray-600 text-sm">Description:</span>
                    <p className="mt-1">{vehicleInfo.description || 'No description provided'}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Photos:</span>
                    <div className="flex mt-2 overflow-x-auto space-x-2 pb-2">
                      <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0">
                        <Camera size={24} className="text-gray-400" />
                      </div>
                      {/* This would show the actual uploaded photos */}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start mb-8">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    className="mt-1 mr-3"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I confirm that all information provided is accurate and I agree to the terms 
                    and conditions of AutoAuction. I understand that providing false information 
                    may result in the removal of my listing.
                  </label>
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    className="px-6 py-2 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      // Submit logic would go here
                      alert('Your listing has been submitted successfully!');
                    }}
                    className="px-6 py-2 rounded-lg font-medium bg-primary-800 hover:bg-primary-700 text-white transition-colors"
                  >
                    Submit Listing
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// Add missing components
const DollarSign: React.FC<{ size: number; className?: string }> = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const Zap: React.FC<{ size: number; className?: string }> = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

export default SellPage;