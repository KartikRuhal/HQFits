
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Product Page', path: '#' },
    { name: 'Virtual Fitting Room', path: '/virtual-fitting-room' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-black/80 backdrop-blur-md' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-white no-underline flex items-center">
          <span className="text-white text-xl mr-2">👕</span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">HQFits</h1>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                location.pathname === item.path ? 'text-blue-400' : 'text-white/80'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </motion.header>
  );
};

export default Navbar;
