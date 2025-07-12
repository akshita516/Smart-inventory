// src/pages/RetailSupplyChain.jsx

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/card.jsx';
import {
  Truck, Sparkles, PackageSearch, Bot, Warehouse
} from 'lucide-react';

const sections = [
  {
    title: 'Smarter Inventory Management',
    icon: <PackageSearch className="w-10 h-10 text-purple-400" />,
    description: 'AI and predictive analytics prevent overstock and shortages while tracking real-time trends.'
  },
  {
    title: 'Omnichannel Retail Experience',
    icon: <Sparkles className="w-10 h-10 text-yellow-300" />,
    description: 'Click-and-collect, real-time tracking, and hyper-local centers for seamless customer experience.'
  },
  {
    title: 'Autonomous Last-Mile Delivery',
    icon: <Truck className="w-10 h-10 text-blue-400" />,
    description: 'Drones, AI route optimization and autonomous vehicles cut costs and speed up deliveries.'
  },
  {
    title: 'AI-Powered Fulfillment Centers',
    icon: <Warehouse className="w-10 h-10 text-green-400" />,
    description: 'Smart warehouses using robotics and IoT improve efficiency, reduce waste, and adapt in real time.'
  },
  {
    title: 'Retail of the Future',
    icon: <Bot className="w-10 h-10 text-pink-500" />,
    description: 'Imagine blockchain for traceability, digital twins for planning, and edge computing for instant decisions.'
  },
];

export default function RetailSupplyChain() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-300 text-transparent bg-clip-text"
        >
          Transforming Retail Supply Chains
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-12"
        >
          From smart inventory to last-mile logistics, discover how technology is optimizing every step of the retail journey.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="hover:scale-105 transition-transform duration-300">
                <CardContent className="flex flex-col items-center text-center">
                  <div className="mb-4">{section.icon}</div>
                  <h2 className="text-xl font-semibold mb-2 text-white">{section.title}</h2>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
