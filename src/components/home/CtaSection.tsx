import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, DollarSign } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buy a Car CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-xl p-8 text-white shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="p-4 bg-primary-600 rounded-full inline-block mb-4">
                  <Car size={28} className="text-accent-500" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Find Your Perfect Ride
                </h3>
                <p className="text-gray-300 mb-6">
                  Browse thousands of premium vehicles from verified sellers. 
                  Whether you're looking for luxury, performance, or practicality, 
                  we have the perfect car waiting for you.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    <span>Extensive vehicle selection</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    <span>Detailed history reports</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    <span>Secure buying process</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/listings" 
                  className="inline-block w-full bg-accent-500 hover:bg-accent-400 text-primary-900 font-medium py-3 rounded-lg text-center transition-colors"
                >
                  Browse Cars
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Sell Your Car CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-xl p-8 text-white shadow-lg"
          >
            <div className="flex flex-col h-full">
              <div className="mb-6">
                <div className="p-4 bg-secondary-500 rounded-full inline-block mb-4">
                  <DollarSign size={28} className="text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Sell For The Best Price
                </h3>
                <p className="text-gray-200 mb-6">
                  List your vehicle for sale or auction it to our community of serious buyers.
                  Our platform is designed to help you get the best possible price for your car.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span>Reach thousands of verified buyers</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span>No-haggle auction system</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                    <span>Transparent selling process</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <Link 
                  to="/sell" 
                  className="inline-block w-full bg-white hover:bg-gray-100 text-secondary-600 font-medium py-3 rounded-lg text-center transition-colors"
                >
                  List Your Car
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;