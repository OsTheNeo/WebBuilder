import React from 'react';
import { motion } from 'framer-motion';

const AddBlockButton = ({ onClick, isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-30 pointer-events-auto"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: isOpen ? 1 : 0.7 }}
        className={`w-10 h-10 rounded-full shadow-lg transition-all flex items-center justify-center ${
          isOpen
            ? 'bg-gray-100 text-red-500'
            : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
        }`}
        aria-label={isOpen ? 'Close block selector' : 'Add block'}
      >
        <motion.span
          className="text-4xl font-light"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </motion.button>
    </motion.div>
  );
};

export default AddBlockButton;
