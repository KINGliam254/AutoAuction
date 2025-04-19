import React from 'react';
import { motion } from 'framer-motion';
import { Search, DollarSign, PackageCheck, ThumbsUp } from 'lucide-react';

const steps = [
  {
    icon: <Search size={32} className="text-accent-500" />,
    title: 'Find Your Perfect Car',
    description: 'Browse our extensive inventory of premium vehicles or participate in exclusive auctions.'
  },
  {
    icon: <DollarSign size={32} className="text-accent-500" />,
    title: 'Make an Offer or Bid',
    description: 'Purchase instantly at the listed price or place competitive bids in our auction system.'
  },
  {
    icon: <PackageCheck size={32} className="text-accent-500" />,
    title: 'Secure Transaction',
    description: 'Our secure payment system and verification process ensures a safe purchase experience.'
  },
  {
    icon: <ThumbsUp size={32} className="text-accent-500" />,
    title: 'Drive Away Happy',
    description: 'Receive your vehicle with full documentation, history reports, and our satisfaction guarantee.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our streamlined process makes buying your dream car simple, 
            secure, and satisfying from start to finish.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md text-center relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
                    <path d="M0 6H32L32 1L40 6L32 11L32 6H0Z" fill="#FFD166" />
                  </svg>
                </div>
              )}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;