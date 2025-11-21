import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { categories, getColorShades } from '../data/blocksData';
import { getBlockComponent } from '../blocks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Button } from './ui/button';

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

  // Navigate left/right with infinite loop
  const navigateLeft = useCallback(() => {
    const newIndex = currentIndex === 0 ? filteredBlocks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, filteredBlocks.length]);

  const navigateRight = useCallback(() => {
    const newIndex = currentIndex === filteredBlocks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
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
                <Button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentIndex(0);
                  }}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  className="rounded-full"
                >
                  {cat.name}
                </Button>
              );
            })}
          </motion.div>
        )}

        {/* Slider Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative w-full"
        >
          {/* Blocks Carousel */}
          <div className="w-full">
            {(() => {
              const block = filteredBlocks[currentIndex];
              if (!block) return null;

              const colorShades = getColorShades(block.color);
              const shadeIndex = Math.min(currentIndex % colorShades.length, colorShades.length - 1);
              const bgColor = colorShades[shadeIndex];
              const BlockComponent = getBlockComponent(block.id);

              return (
                <motion.div
                  key={block.id}
                  className="w-full flex justify-center py-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full px-4">
                    <motion.div
                      className="w-full rounded-lg shadow-xl overflow-hidden border-4 border-blue-500"
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
            })()}
          </div>

          {/* Action Buttons with Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mt-6 max-w-2xl mx-auto"
          >
            {/* Left Navigation Button */}
            <button
              onClick={navigateLeft}
              className="transition-opacity hover:opacity-100 opacity-70 p-2"
              aria-label="Previous block"
            >
              <IconChevronLeft className="w-8 h-8 text-gray-600" stroke={2.5} />
            </button>

            {/* Cancel Button */}
            <Button
              onClick={onClose}
              variant="outline"
              size="lg"
            >
              Cancel
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2 items-center">
              {filteredBlocks.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all ${
                    currentIndex === index
                      ? 'w-3 h-3 bg-blue-500'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to block ${index + 1}`}
                />
              ))}
            </div>

            {/* Add Block Button */}
            <Button
              onClick={handleSelectBlock}
              size="lg"
            >
              Add Block
            </Button>

            {/* Right Navigation Button */}
            <button
              onClick={navigateRight}
              className="transition-opacity hover:opacity-100 opacity-70 p-2"
              aria-label="Next block"
            >
              <IconChevronRight className="w-8 h-8 text-gray-600" stroke={2.5} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlockSelector;
