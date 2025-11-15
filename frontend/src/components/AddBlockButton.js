import React from 'react';
import { motion } from 'framer-motion';

const AddBlockButton = ({ onClick, isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-center my-4"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-12 h-12 rounded-full shadow-lg transition-all ${
          isOpen
            ? 'bg-red-500 hover:bg-red-600'
            : 'bg-blue-500 hover:bg-blue-600'
        } text-white font-bold text-2xl flex items-center justify-center`}
        aria-label={isOpen ? 'Close block selector' : 'Add block'}
      >
        <motion.span
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
