
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      number: 1,
      title: 'Choose your clothing item',
      description: 'Add to cart or try on instantly with AR technology.',
      image: 'https://images.unsplash.com/photo-1546502208-3e4d1f15b6a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgcolor: 'from-purple-800/30 to-fuchsia-600/30'
    },
    {
      number: 2,
      title: 'Preview your selected clothes virtually',
      description: 'See how they fit and match your style.',
      image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgcolor: 'from-blue-800/30 to-cyan-600/30'
    },
    {
      number: 3,
      title: 'Complete your purchase securely',
      description: 'Get ready to rock your new look!',
      image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bgcolor: 'from-gray-800/30 to-gray-600/30'
    }
  ];

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

  return (
    <section ref={ref} className="bg-black text-white py-20 relative">
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-display mb-6 relative inline-block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How it Works?
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-blue-400"></span>
          </motion.h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="step-card p-4 rounded-lg relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgcolor} opacity-50`}></div>
              <div className="relative z-10">
                <div className="overflow-hidden rounded-md mb-6 aspect-[4/3]">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number}`} 
                    className="w-full h-full object-cover transform transition duration-700 hover:scale-110"
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center mb-4">
                  <span className="text-sm font-semibold">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
    </section>
  );
};

export default HowItWorks;
