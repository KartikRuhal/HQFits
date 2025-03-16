
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  CreditCard, 
  MapPin, 
  Save 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> }
  ];

  const helpLinks = [
    { name: 'Partner with us', icon: <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" /> },
    { name: 'Add your brand', icon: <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" /> },
    { name: 'Join as a model', icon: <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" /> }
  ];

  const infoLinks = [
    { name: 'Purchase gift card', icon: <CreditCard className="w-4 h-4 mr-2 text-blue-400" /> },
    { name: 'Explore nearby stores', icon: <MapPin className="w-4 h-4 mr-2 text-blue-400" /> },
    { name: 'Save on first purchase', icon: <Save className="w-4 h-4 mr-2 text-blue-400" /> }
  ];

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-amber-200 to-amber-600 flex items-center justify-center mb-4 overflow-hidden">
                <div className="font-bold text-black text-2xl">HQFit</div>
              </div>
            </motion.div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a 
                    href="#" 
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    {link.icon}
                    <span className="ml-2">{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get assistance</h3>
            <ul className="space-y-2">
              {helpLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a 
                    href="#" 
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Read our updates</h3>
            <ul className="space-y-2">
              {infoLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <a 
                    href="#" 
                    className="flex items-center text-white/70 hover:text-white transition-colors"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} HQFits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
