import { FaStar } from 'react-icons/fa';
import '../App.css';
import '../components/blogs/BlogStyles.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import { 
  BlogCard, 
  BlogContainer, 
  BlogHeading, 
  BlogTypewriter, 
  ViewAllButton
} from '../components';

// Blog data
const blogData = [
  {
    title: "Unlocking the Power of SEO Keyword Research: A Guide to Choosing the Right Tools",
    description: "Learn about the best SEO keyword research tools, how to evaluate them, and why choosing the right ones can make a significant difference in your content strategy.",
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "FEB 7, 2024",
    category: "GRAPHICS",
    link: "/blog/seo-keyword-research",
    isFeatured: true,
  },
  {
    title: "Empower Your SEO Strategy with Top SEO Tools: A Comprehensive Guide",
    description: "Discover the most effective SEO tools that can transform your online presence, improve your rankings, and help you make data-driven decisions for better results.",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "FEB 7, 2024",
    category: "TECH",
    link: "/blog/top-seo-tools",
    isFeatured: false,
  },
  {
    title: "Unveiling the Power of Organic Search: Why It Matters and How to Leverage It",
    description: "Explore the importance of organic search in your digital marketing strategy and learn practical techniques to improve your organic visibility for sustainable growth.",
    imageUrl: "https://images.unsplash.com/photo-1616400619175-5beda3a17896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "FEB 7, 2024",
    category: "MARKETING",
    link: "/blog/organic-search-power",
    isFeatured: true,
  },
  {
    title: "Building a Memorable Brand Identity in the Digital Age",
    description: "Discover key strategies for creating a unique brand identity that resonates with your audience and stands out in today's competitive digital landscape.",
    imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
    date: "FEB 10, 2024",
    category: "BRANDING",
    link: "/blog/brand-identity-digital-age",
    isFeatured: false,
  }
];

// Blogs page
const Blogs = () => {
  // scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-zoom');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    
    window.addEventListener('scroll', handleScroll);
    
    
    handleScroll();
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <BlogContainer>
        {/* heading */}
        <div className="mb-20 blog-heading-animate-left">
          <BlogHeading title="FEATURED BLOGS" />
        </div>
        
        {/* cards grid */}
        <motion.div 
          className="blog-grid mb-20 stagger-animation"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl}
              date={blog.date}
              category={blog.category}
              link={blog.link}
              isFeatured={blog.isFeatured}
              index={index}
            />
          ))}
        </motion.div>

        {/* view all */}
        <ViewAllButton link="/all-blogs" />

        {/* blog typewriter text */}
        <motion.div 
          className="scroll-fade-up"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <BlogTypewriter text="Learn, grow, implement — expert insights delivered to you." />
        </motion.div>
      </BlogContainer>      
    </>
  );
};

export default Blogs;
