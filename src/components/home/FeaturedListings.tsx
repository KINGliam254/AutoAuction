import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cars } from '../../data/mockData';
import CarCard from '../shared/CarCard';

const FeaturedListings: React.FC = () => {
  const featuredCars = cars.filter(car => car.isFeatured).slice(0, 3);
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Featured Listings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium vehicles. 
            Each car is thoroughly inspected and comes with a detailed history report.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            to="/listings" 
            className="inline-block bg-primary-800 hover:bg-primary-700 text-white py-3 px-8 rounded-md font-medium transition-colors"
          >
            View All Listings
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedListings;