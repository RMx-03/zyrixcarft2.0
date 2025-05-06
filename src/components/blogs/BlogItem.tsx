import { motion } from 'framer-motion';
import { FC } from 'react';
import './BlogStyles.css';

interface BlogItemProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  index: number;
}

const BlogItem: FC<BlogItemProps> = ({ 
  title, 
  description, 
  imageUrl, 
  date,
  author,
  index 
}) => {
  return (
    <motion.div 
      className="blog-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 20,
        duration: 0.6,
        delay: index * 0.1
      }}
    >
      <div className="blog-item-image-container">
        <img src={imageUrl} alt={title} className="blog-item-image" />
      </div>
      
      <div className="blog-item-content">
        <div className="blog-item-meta">
          <span className="blog-item-date">{date}</span>
          <span className="blog-item-author">by {author}</span>
        </div>
        
        <h3 className="blog-item-title">{title}</h3>
        
        <p className="blog-item-description">{description}</p>
        
        <a href="#" className="blog-read-more">
          Read More
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogItem;