import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { categories, getColorShades } from '../data/blocksData';
import { getBlockComponent } from '../blocks';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { Button } from './ui/button';

const BlockCarouselPicker = ({ filterCategory, selectedBlockId, onSelectBlock, label }) => {
  const category = categories.find(cat => cat.id === filterCategory);
  const blocks = category ? category.blocks : [];

  const selectedIndex = selectedBlockId
    ? blocks.findIndex(b => b.id === selectedBlockId)
    : -1;

  const [currentIndex, setCurrentIndex] = useState(selectedIndex >= 0 ? selectedIndex : 0);
  const scrollContainerRef = useRef(null);

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

  // Navigate left/right
  const navigateLeft = useCallback(() => {
    const newIndex = currentIndex === 0 ? blocks.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToBlock(newIndex);
  }, [currentIndex, blocks.length]);

  const navigateRight = useCallback(() => {
    const newIndex = currentIndex === blocks.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToBlock(newIndex);
  }, [currentIndex, blocks.length]);

  const handleSelectBlock = useCallback(() => {
    if (blocks[currentIndex]) {
      onSelectBlock(blocks[currentIndex].id);
    }
  }, [currentIndex, blocks, onSelectBlock]);

  if (!category || blocks.length === 0) {
    return (
      <div className="text-sm text-gray-500">No {filterCategory} available</div>
    );
  }

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}

      <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            onClick={navigateLeft}
            variant="outline"
            size="icon"
            type="button"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous block"
          >
            <IconChevronLeft className="w-4 h-4" stroke={2.5} />
          </Button>

          <Button
            onClick={navigateRight}
            variant="outline"
            size="icon"
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full h-8 w-8 shadow-lg hover:scale-110 transition-transform"
            aria-label="Next block"
          >
            <IconChevronRight className="w-4 h-4" stroke={2.5} />
          </Button>

          {/* Blocks Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-hidden scroll-smooth snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {blocks.map((block, index) => {
              const colorShades = getColorShades(category.color);
              const shadeIndex = Math.min(index % colorShades.length, colorShades.length - 1);
              const bgColor = colorShades[shadeIndex];

              const BlockComponent = getBlockComponent(block.id);
              const isSelected = block.id === selectedBlockId;
              const isCurrent = currentIndex === index;

              return (
                <motion.div
                  key={block.id}
                  className="flex-shrink-0 w-full flex items-center justify-center px-10 py-3 snap-center"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: isCurrent ? 1 : 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full max-w-lg" style={{ transform: 'scale(0.7)' }}>
                    <motion.div
                      className={`w-full rounded-lg shadow-md overflow-hidden border-2 ${
                        isSelected
                          ? 'border-green-500'
                          : isCurrent
                            ? 'border-blue-500'
                            : 'border-gray-300'
                      } cursor-pointer relative`}
                      onClick={() => {
                        setCurrentIndex(index);
                        scrollToBlock(index);
                      }}
                      whileHover={{ scale: 1.02 }}
                    >
                      {BlockComponent ? (
                        <BlockComponent data={{}} />
                      ) : (
                        <div className={`w-full ${block.height} ${bgColor} flex items-center justify-center`}>
                          <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-800">{block.name}</h3>
                          </div>
                        </div>
                      )}

                      {/* Selected indicator */}
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Selected
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Block Counter & Name */}
          <div className="text-center mt-2">
            <p className="text-sm font-semibold text-gray-700">
              {blocks[currentIndex]?.name}
            </p>
            <p className="text-xs text-gray-500">
              {currentIndex + 1} / {blocks.length}
            </p>
          </div>

          {/* Select Button */}
          <div className="flex justify-center mt-3">
            <Button
              onClick={handleSelectBlock}
              type="button"
              size="sm"
              disabled={selectedBlockId === blocks[currentIndex]?.id}
              className={selectedBlockId === blocks[currentIndex]?.id ? 'opacity-50' : ''}
            >
              {selectedBlockId === blocks[currentIndex]?.id ? 'Currently Selected' : 'Select This'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockCarouselPicker;
