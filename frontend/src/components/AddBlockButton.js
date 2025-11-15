import React from 'react';
import { motion } from 'framer-motion';

const AddBlockButton = ({ onClick, isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      className="flex justify-center -my-6 relative z-10"
    >
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-12 h-12 rounded-full shadow-lg transition-all border-2 flex items-center justify-center ${
          isOpen
            ? 'bg-white border-red-400 text-red-600'
            : 'bg-white border-gray-400/60 text-gray-500'
        }`}
        style={{ backdropFilter: 'blur(8px)' }}
        aria-label={isOpen ? 'Close block selector' : 'Add block'}
      >
        <motion.span
          className="text-3xl font-light"
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
