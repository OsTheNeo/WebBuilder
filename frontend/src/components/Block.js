import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getColorShades } from '../data/blocksData';

const Block = ({
  block,
  index,
  onDelete,
  onMoveUp,
  onMoveDown,
  onEdit,
  canMoveUp,
  canMoveDown,
  previewMode = false,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop
}) => {
  const [isHovered, setIsHovered] = useState(false);
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
      className={`relative w-full ${block.height} ${bgColor} flex items-center justify-center border-2 border-gray-200 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable={!previewMode}
      onDragStart={(e) => onDragStart && onDragStart(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop && onDrop(e, index)}
    >
      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800">{block.name}</h3>
        <p className="text-sm text-gray-600">{block.categoryName}</p>
      </div>

      {/* Hover Controls - Only show when not in preview mode */}
      {!previewMode && isHovered && (
        <>
          {/* Top Left - Drag Handle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-2 left-2 cursor-move bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50"
            title="Drag to reorder"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </motion.div>

          {/* Top Left - Move Up/Down Buttons */}
          <div className="absolute top-2 left-14 flex gap-1">
            {canMoveUp && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={onMoveUp}
                className="bg-white rounded-lg shadow-lg p-2 hover:bg-blue-50 transition-colors"
                title="Move up"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </motion.button>
            )}
            {canMoveDown && (
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={onMoveDown}
                className="bg-white rounded-lg shadow-lg p-2 hover:bg-blue-50 transition-colors"
                title="Move down"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            )}
          </div>

          {/* Top Right - Edit and Delete Buttons */}
          <div className="absolute top-2 right-2 flex gap-2">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onEdit}
              className="bg-white rounded-lg shadow-lg p-2 hover:bg-blue-50 transition-colors"
              title="Edit block"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onDelete}
              className="bg-white rounded-lg shadow-lg p-2 hover:bg-red-50 transition-colors"
              title="Delete block"
            >
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Block;
