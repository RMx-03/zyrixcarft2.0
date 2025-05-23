import { motion } from 'framer-motion';
import { FC } from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  author: string;
  index: number;
}

const BlogCard: FC<BlogCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  date, 
  author,
  index 
}) => {
  return (
    <motion.div 
      className="blog-card"
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
      <img 
        src={imageUrl} 
        alt={title} 
        className="blog-card-image"
      />
      <div className="blog-card-content">
        <div className="blog-card-date">{date} • {author}</div>
        <h3 className="blog-card-title">{title}</h3>
        <p className="blog-card-description">{description}</p>
        <a href="#" className="blog-read-more">
          Read more
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default BlogCard;