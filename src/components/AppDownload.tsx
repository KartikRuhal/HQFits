
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Smartphone, ArrowRight } from 'lucide-react';

const AppDownload = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="bg-black py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 relative inline-block">
            Download our app
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-blue-400"></span>
          </h2>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto glass-card rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="p-8 md:p-10 md:w-2/3">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mr-4">
                  <Smartphone className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Try on effortlessly!</h3>
              </div>
              
              <p className="text-white/80 mb-6">
                Experience virtual clothing trials with VirtualFit. Our cutting-edge AR technology brings fashion to your fingertips.
              </p>
              
              <motion.button
                className="px-6 py-2.5 bg-white text-black rounded-md font-medium flex items-center space-x-2 hover:bg-opacity-90 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
            
            <div className="md:w-1/3 relative">
              <motion.div
                className="w-full h-full min-h-[240px] relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-purple-600/20 to-cyan-600/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Mobile app" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="w-40 h-80 border-4 border-white/30 rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-sm"></div>
                    <div className="absolute top-0 left-0 right-0 h-6 bg-white/10 flex justify-center items-center">
                      <div className="w-20 h-1 bg-white/40 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
    </section>
  );
};

export default AppDownload;
