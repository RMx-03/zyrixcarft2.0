import { motion } from 'framer-motion';
import { FC } from 'react';

interface ServiceHeadingProps {
  title: string;
}

//  ServiceHeading
const ServiceHeading: FC<ServiceHeadingProps> = ({ title }) => {
  const words = title.split(' ');
  const firstWord = words[0];
  const secondWord = words[1];

  return (
    <motion.div 
      className="flex items-center mb-16 relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Services Heading */}
      <div className="flex items-center">        
        <h1 className="text-5xl font-bold text-white mr-4">{firstWord}</h1>        
        <h1 className="text-5xl font-bold text-orange-500">{secondWord}</h1>
      </div>
      
      {/* Animated line */}
      <motion.div 
        className="flex-grow ml-6 relative"
        style={{ maxWidth: '500px' }}
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Horizontal line */}
        <svg width="100%" height="2" viewBox="0 0 500 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H250" stroke="#FF6B00" strokeWidth="2" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ServiceHeading; 