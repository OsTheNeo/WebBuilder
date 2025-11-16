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
        whileHover={{ scale: 1.15, opacity: 0.75 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isOpen ? 1 : 0.5 }}
        className={`w-12 h-12 rounded-full shadow-xl transition-all border-2 flex items-center justify-center ${
          isOpen
            ? 'bg-white border-red-400 text-red-600'
            : 'bg-white/95 border-blue-400/60 text-blue-500 hover:border-blue-500 hover:bg-white'
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
