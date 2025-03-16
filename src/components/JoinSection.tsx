
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, User, Store, Users } from 'lucide-react';

const OptionCard = ({ icon, title, description, buttonText }) => {
  return (
    <motion.div 
      className="flex items-center space-x-4 glass-card glass-card-hover p-4 rounded-lg w-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex-shrink-0">
        {icon}
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-white/70 mb-3">{description}</p>
        <button className="text-sm font-medium flex items-center text-blue-400 hover:text-blue-300 transition-colors">
          {buttonText} <ArrowRight className="ml-1 w-3 h-3" />
        </button>
      </div>
    </motion.div>
  );
};

const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const options = [
    {
      icon: <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
              <User className="w-6 h-6 text-blue-400" />
            </div>,
      title: "As a user",
      description: "Explore virtual clothing try-on. Shop and visualize outfits without leaving home.",
      buttonText: "Try Now"
    },
    {
      icon: <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Store className="w-6 h-6 text-purple-400" />
            </div>,
      title: "As a brand partner",
      description: "We offer boosts sales with virtual try-on, loyalty programs, and more.",
      buttonText: "Partner with us"
    },
    {
      icon: <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-green-400" />
            </div>,
      title: "Join our team",
      description: "Become part of a team shaping the future of online fashion shopping.",
      buttonText: "Join us"
    }
  ];

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
            Join HQFit
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-px bg-blue-400"></span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <OptionCard {...option} />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
    </section>
  );
};

export default JoinSection;
