
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Camera } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const VirtualFittingRoom = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const clothingItems = [
    {
      id: 1,
      name: 'Leather Jacket',
      image: '/lovable-uploads/73a44dfc-8048-4b02-9fd9-b2c537ef61dd.png',
    },
    {
      id: 2,
      name: 'White Shirt',
      image: '/lovable-uploads/73a44dfc-8048-4b02-9fd9-b2c537ef61dd.png',
    },
    {
      id: 3,
      name: 'Denim Jeans',
      image: '/lovable-uploads/73a44dfc-8048-4b02-9fd9-b2c537ef61dd.png',
    }
  ];

  return (
    <motion.div 
      className="bg-black text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Panel - Clothing Items */}
            <div className="lg:w-1/4">
              <div className="bg-zinc-900 rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-4">Clothing Items</h2>
                <div className="space-y-4">
                  {clothingItems.map((item) => (
                    <div 
                      key={item.id}
                      className={`bg-zinc-800 rounded-lg p-3 cursor-pointer transition-all duration-200 hover:bg-zinc-700 ${selectedItem === item.id ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => setSelectedItem(item.id)}
                    >
                      <div className="h-20 flex items-center justify-center bg-zinc-700 rounded mb-2">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="h-16 w-16 object-contain"
                        />
                      </div>
                      <p className="text-sm text-center">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Virtual Fitting Area */}
            <div className="lg:w-3/4">
              <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
                <div className="bg-zinc-800 rounded-lg aspect-[4/3] flex items-center justify-center p-4">
                  <div className="w-64 h-64 bg-zinc-700 rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/73a44dfc-8048-4b02-9fd9-b2c537ef61dd.png" 
                      alt="Model"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex justify-center space-x-3 mt-4">
                  <Button variant="outline" className="flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Photo
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Camera className="mr-2 h-4 w-4" />
                    Use Webcam
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default VirtualFittingRoom;
