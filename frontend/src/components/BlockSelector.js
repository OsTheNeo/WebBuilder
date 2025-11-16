import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { categories, getColorShades } from '../data/blocksData';
import { getBlockComponent } from '../blocks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';

const BlockSelector = ({ onSelectBlock, onClose, filterCategory, hideCategories, excludeCategories }) => {
  // Filter categories based on props
  const getAvailableCategories = () => {
    if (filterCategory) {
      // Only show the specified category
      return categories.filter(cat => cat.id === filterCategory);
    } else if (excludeCategories && excludeCategories.length > 0) {
      // Exclude specified categories
      return categories.filter(cat => !excludeCategories.includes(cat.id));
    }
    return categories;
  };

  const availableCategories = getAvailableCategories();
  const [selectedCategory, setSelectedCategory] = useState(availableCategories[0]?.id || 'hero');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  // Get all blocks or filtered by category
  const getFilteredBlocks = () => {
    const category = availableCategories.find(cat => cat.id === selectedCategory);
    return category ? category.blocks.map(block => ({
      ...block,
      categoryName: category.name,
      color: category.color
    })) : [];
  };

  const filteredBlocks = getFilteredBlocks();

  // Handle scroll navigation
  const scrollToBlock = (index) => {
    if (scrollContainerRef.current) {
      const blockWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({
        left: blockWidth * index,
        behavior: 'smooth'
      });
    }
  };

  // Navigate left/right with infinite loop
  const navigateLeft = useCallback(() => {
    const newIndex = currentIndex === 0 ? filteredBlocks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToBlock(newIndex);
  }, [currentIndex, filteredBlocks.length]);

  const navigateRight = useCallback(() => {
    const newIndex = currentIndex === filteredBlocks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToBlock(newIndex);
  }, [currentIndex, filteredBlocks.length]);

  const handleSelectBlock = useCallback(() => {
    if (filteredBlocks[currentIndex]) {
      onSelectBlock(filteredBlocks[currentIndex]);
    }
  }, [currentIndex, filteredBlocks, onSelectBlock]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') navigateLeft();
      if (e.key === 'ArrowRight') navigateRight();
      if (e.key === 'Enter') handleSelectBlock();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigateLeft, navigateRight, handleSelectBlock, onClose]);

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="w-full bg-gradient-to-b from-gray-50 to-white border-y-4 border-blue-500 overflow-hidden"
    >
      <div className="py-8 px-4">
        {/* Category Filters - Hidden if hideCategories is true */}
        {!hideCategories && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-2 mb-6 overflow-x-auto pb-2 justify-center flex-wrap"
          >
            {availableCategories.map((cat) => {
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentIndex(0);
                  }}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-500 text-white scale-105'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </motion.div>
        )}

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Buttons - Floating over carousel */}
          <button
            onClick={navigateLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:bg-white hover:scale-110 transition-all"
            aria-label="Previous block"
          >
            <IconChevronLeft className="w-7 h-7" stroke={2.5} />
          </button>

          <button
            onClick={navigateRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:bg-white hover:scale-110 transition-all"
            aria-label="Next block"
          >
            <IconChevronRight className="w-7 h-7" stroke={2.5} />
          </button>

          {/* Blocks Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {filteredBlocks.map((block, index) => {
              const colorShades = getColorShades(block.color);
              const shadeIndex = Math.min(index % colorShades.length, colorShades.length - 1);
              const bgColor = colorShades[shadeIndex];

              const BlockComponent = getBlockComponent(block.id);

              return (
                <motion.div
                  key={block.id}
                  className="flex-shrink-0 w-full flex items-center justify-center px-16 py-8 snap-center"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: currentIndex === index ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full max-w-6xl" style={{ transform: 'scale(0.85)' }}>
                    <motion.div
                      className={`w-full rounded-lg shadow-xl overflow-hidden border-4 ${
                        currentIndex === index ? 'border-blue-500' : 'border-gray-300'
                      } cursor-pointer`}
                      onClick={() => setCurrentIndex(index)}
                      whileHover={{ scale: 1.02 }}
                    >
                      {BlockComponent ? (
                        <BlockComponent data={{}} />
                      ) : (
                        <div className={`w-full ${block.height} ${bgColor} flex items-center justify-center`}>
                          <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-800">{block.name}</h3>
                            <p className="text-lg text-gray-600 mt-2">{block.categoryName}</p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Block Counter */}
          <div className="text-center mt-4 text-gray-600 font-semibold">
            {currentIndex + 1} / {filteredBlocks.length}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-4 justify-center mt-6"
          >
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSelectBlock}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Add Block
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlockSelector;
