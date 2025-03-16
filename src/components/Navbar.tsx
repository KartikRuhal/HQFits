
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    { name: 'Product Page', path: '/product-page' },
    { name: 'Virtual Fitting Room', path: '/virtual-fitting-room' },
  ];

  // Adjust navbar color based on the current page
  const isDarkPage = location.pathname === '/';
  const textColor = isDarkPage ? 'text-white' : 'text-black';
  const bgColor = isDarkPage 
    ? (scrolled ? 'bg-black/80 backdrop-blur-md' : '') 
    : (scrolled ? 'bg-white/80 backdrop-blur-md' : '');
  const borderColor = isDarkPage 
    ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' 
    : 'bg-gradient-to-r from-transparent via-black/10 to-transparent';

  // Don't show navbar on auth page
  if (location.pathname === '/auth') {
    return null;
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-6'
      } ${bgColor}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className={`${textColor} no-underline flex items-center`}>
          <span className={`${textColor} text-xl mr-2`}>👕</span>
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">HQFits</h1>
        </Link>
        
        <div className="flex items-center">
          <nav className="hidden md:flex items-center space-x-8 mr-8">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === item.path ? 'text-blue-400' : `${textColor}/80`
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Link to="/auth">
            <Button 
              variant={isDarkPage ? "outline" : "default"} 
              size="sm" 
              className={`${isDarkPage ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}
            >
              <User size={16} className="mr-2" />
              Log In
            </Button>
          </Link>
        </div>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] ${borderColor}`}></div>
    </motion.header>
  );
};

export default Navbar;
