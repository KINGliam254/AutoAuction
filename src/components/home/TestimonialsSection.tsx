import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    role: 'BMW M4 Owner',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'The process of buying my M4 was seamless from start to finish. The seller was transparent, and AutoAuction handled all the paperwork professionally. I would definitely use this platform again.'
  },
  {
    id: 2,
    name: 'Rebecca Chen',
    role: 'Porsche 911 Owner',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'I was hesitant about buying a car online, but AutoAuction made it incredibly easy. The detailed photographs and history report gave me confidence. Shipping was prompt and the car arrived in perfect condition.'
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Audi RS7 Seller',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 4,
    text: 'Selling my Audi on this platform yielded a higher price than I was offered elsewhere. The auction format created healthy competition among buyers, and the transaction was smooth and secure.'
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 px-4 bg-primary-800 text-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover why thousands of car enthusiasts trust AutoAuction 
            for their automotive needs.
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-700/50 p-8 rounded-xl"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-24 h-24 rounded-full object-cover border-4 border-accent-500"
                  />
                </div>
                <div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        fill={i < testimonials[activeIndex].rating ? "#FFCE63" : "none"} 
                        className={`${i < testimonials[activeIndex].rating ? "text-accent-500" : "text-gray-400"}`}
                      />
                    ))}
                  </div>
                  <p className="italic text-lg mb-4">"{testimonials[activeIndex].text}"</p>
                  <div>
                    <h4 className="font-semibold text-xl">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-300">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? "bg-accent-500" : "bg-gray-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;