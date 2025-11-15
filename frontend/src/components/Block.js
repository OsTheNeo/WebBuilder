import React from 'react';
import { motion } from 'framer-motion';
import { getColorShades } from '../data/blocksData';

const Block = ({ block, index }) => {
  const colorShades = getColorShades(block.color);
  const shadeIndex = Math.min(index % colorShades.length, colorShades.length - 1);
  const bgColor = colorShades[shadeIndex];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`w-full ${block.height} ${bgColor} rounded-lg shadow-md flex items-center justify-center border-2 border-gray-200`}
    >
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{block.name}</h3>
        <p className="text-sm text-gray-600">{block.categoryName}</p>
      </div>
    </motion.div>
  );
};

export default Block;
