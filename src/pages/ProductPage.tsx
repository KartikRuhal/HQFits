
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ProductPage = () => {
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const topCategories = [
    {
      id: 1,
      name: "Playful Charm",
      description: "Relaxed and trendy, ideal for casual and confident looks.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 2,
      name: "Minimal Muse",
      description: "Classic reiterations, perfect blend of comfort and refined ease.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 3,
      name: "Effortless Glam",
      description: "Sleek, chic design for evenings or special stylish occasions.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 4,
      name: "Bold Basics",
      description: "Versatile and timeless outfit, perfect for everyday aesthetics.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    }
  ];

  const ourClothes = [
    {
      id: 1,
      name: "Playful Patterns",
      description: "Ready-to-wear pattern perfect for every day and casual outings.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 2,
      name: "Elegant Layers",
      description: "Modern and cozy layering looks for effortless style and comfort.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 3,
      name: "Faux Fur Luxe",
      description: "Add a touch of luxury to your most cherished midi silhouettes.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 4,
      name: "Rustic Charm",
      description: "Earthy tones and textured fabrics for bolder explorations.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    }
  ];

  const bestSelling = [
    {
      id: 1,
      name: "Chic Accessories",
      description: "Elevate your outfit with trendy handbags, scarves, belts, and more.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 2,
      name: "Designer Dresses",
      description: "Discover elegant dresses for every occasion, from casual to formal.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    },
    {
      id: 3,
      name: "Luxurious Outerwear",
      description: "Stay cozy and stylish with premium jackets, coats, and blazers.",
      image: "/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png"
    }
  ];

  const feedback = [
    {
      id: 1,
      name: "Justine Marks",
      quote: "I ordered a selection for something, and it was exactly what I wanted! The quality was great and received a lot of compliments on my outfit."
    },
    {
      id: 2,
      name: "Riya Patel",
      quote: "The sizing guidelines were exactly right, which hasn't always been my experience. The outfit I bought is now one of my favorites!"
    },
    {
      id: 3,
      name: "Nina Singh",
      quote: "I bought a designer dress for a special occasion, and it was perfect! The quality is excellent, and it fit me perfectly. I will be a repeat customer."
    }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-black">
          <img 
            src="/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png" 
            alt="Fashion model" 
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <motion.div 
            className="max-w-xl py-20"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h5 
              className="text-sm tracking-wider mb-2"
              variants={fadeIn}
            >
              LET'S REDEFINE FASHION
            </motion.h5>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              variants={fadeIn}
            >
              FUTURE
            </motion.h1>
            <motion.p 
              className="mb-8 text-sm"
              variants={fadeIn}
            >
              Effortlessly elegant. Designed to empower.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button variant="outline" className="bg-white text-black hover:bg-white/90 border-none">
                SHOP NOW
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Top Women's Wear */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-semibold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Top Women's Wear
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {topCategories.map((category) => (
              <motion.div 
                key={category.id}
                className="bg-white overflow-hidden"
                variants={fadeIn}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="bg-black text-white py-3 text-center mt-10">
          <p className="text-sm">Fashion Friday: Get up to 50% OFF today!</p>
        </div>
      </section>

      {/* Our Clothes */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-semibold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Clothes
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {ourClothes.map((item) => (
              <motion.div 
                key={item.id}
                className="overflow-hidden"
                variants={fadeIn}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Inspire Section */}
      <section className="py-16 bg-black text-white relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row">
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <h5 className="text-sm tracking-wider mb-2">SOURCE THE FUTURE</h5>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">INSPIRE</h2>
              <p className="mb-8 text-sm max-w-md">
                Modern styles crafted to inspire confidence and empowerment.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                SHOP NOW
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-end"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png" 
                alt="Fashion model" 
                className="h-80 object-cover"
              />
              <img 
                src="/lovable-uploads/a19d9f39-9dac-4f5b-9dfd-f0a435c34986.png" 
                alt="Fashion model" 
                className="h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Selling */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-semibold mb-2">Best selling</h2>
            <p className="text-gray-600">Shop into style with our handpicked collection of iconic trends</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {bestSelling.map((item) => (
              <motion.div 
                key={item.id}
                className="overflow-hidden"
                variants={fadeIn}
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feedback Corner */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-semibold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Feedback Corner
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {feedback.map((item) => (
              <motion.div 
                key={item.id}
                className="p-6 bg-white"
                variants={fadeIn}
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 italic">"{item.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductPage;
