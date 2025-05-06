import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import './BlogStyles.css';

interface BlogContainerProps {
  children: ReactNode;
}

const BlogContainer: FC<BlogContainerProps> = ({ children }) => {
  return (
    <motion.div 
      className="blog-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* blog content container */}
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </motion.div>
  );
};

export default BlogContainer;