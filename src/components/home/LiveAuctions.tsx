import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { auctions } from '../../data/mockData';
import AuctionCard from '../shared/AuctionCard';

const LiveAuctions: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Live Auctions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bid on exclusive vehicles from the comfort of your home. 
            New auctions are added daily with transparent bidding and verified sellers.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctions.map((auction, index) => (
            <motion.div
              key={auction.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AuctionCard auction={auction} />
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
            to="/listings?type=auction" 
            className="inline-block bg-primary-800 hover:bg-primary-700 text-white py-3 px-8 rounded-md font-medium transition-colors"
          >
            View All Auctions
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveAuctions;