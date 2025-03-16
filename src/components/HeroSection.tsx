
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const featureItems = [
    'SCANNING OF YOUR BODY',
    'MEASUREMENTS FOR BEST FITTING',
    'VIRTUALLY FITTING ROOM',
    'YOUR OWN WAY TO DESIGN'
  ];

  const handleTryNowClick = () => {
    navigate('/virtual-fitting-room');
  };

  return (
    <section className="relative min-h-screen w-full bg-black flex items-center overflow-hidden pt-20">
      <motion.div 
        className="container mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="md:w-1/2 relative"
          variants={itemVariants}
        >
          <motion.img
            src="/lovable-uploads/fb022c04-3e9a-4098-ad5b-b20395a0b6ef.png"
            alt="Fashion model with shopping bags"
            className="max-h-[600px] object-contain relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl -z-10"></div>
        </motion.div>

        <motion.div className="md:w-1/2 mt-10 md:mt-0 text-white">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight"
            variants={itemVariants}
          >
            Experience the future of online shopping
          </motion.h2>
          
          <motion.ul className="mt-8 space-y-2" variants={containerVariants}>
            {featureItems.map((item, index) => (
              <motion.li 
                key={index} 
                className="flex items-start" 
                variants={itemVariants}
              >
                <span className="text-blue-400 mr-2">•</span>
                <span className="text-sm md:text-base tracking-wide">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.div 
            className="mt-10"
            variants={itemVariants}
          >
            <motion.button
              className="px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTryNowClick}
            >
              <span>TRY NOW</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
    </section>
  );
};

export default HeroSection;
