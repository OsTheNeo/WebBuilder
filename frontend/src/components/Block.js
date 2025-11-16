import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getBlockComponent } from '../blocks';

const Block = ({
  block,
  index,
  onDelete,
  onMoveUp,
  onMoveDown,
  onEdit,
  onSettings, // New prop for settings drawer
  canMoveUp,
  canMoveDown,
  previewMode = false,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDrop
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const BlockComponent = getBlockComponent(block.id);

  // Get block configuration
  const config = block.config || {
    layout: 'boxed',
    alignment: 'center',
    padding: { top: 12, right: 8, bottom: 12, left: 8 },
    margin: { top: 0, bottom: 0 },
    background: { type: 'color', color: '#ffffff' }
  };

  // Build container classes based on configuration
  const getContainerClasses = () => {
    const classes = ['w-full'];

    // Margin
    if (config.margin.top > 0) classes.push(`mt-${config.margin.top}`);
    if (config.margin.bottom > 0) classes.push(`mb-${config.margin.bottom}`);

    return classes.join(' ');
  };

  // Build wrapper classes for boxed content
  const getWrapperClasses = () => {
    const classes = [];

    // Padding
    classes.push(`py-${config.padding.top}`);
    classes.push(`px-${config.padding.left}`);

    // Layout
    if (config.layout === 'boxed') {
      classes.push('max-w-7xl');
      if (config.alignment === 'center') classes.push('mx-auto');
      if (config.alignment === 'left') classes.push('mr-auto');
      if (config.alignment === 'right') classes.push('ml-auto');
    }

    return classes.join(' ');
  };

  // Build background styles
  const getBackgroundStyle = () => {
    const bg = config.background;
    const style = {};

    if (bg.type === 'color') {
      style.backgroundColor = bg.color;
    } else if (bg.type === 'gradient') {
      const direction = bg.gradient.direction || 'to-r';
      const from = bg.gradient.from || '#3b82f6';
      const to = bg.gradient.to || '#8b5cf6';
      const via = bg.gradient.via ? `, ${bg.gradient.via}` : '';

      // Convert Tailwind direction to CSS gradient direction
      const directionMap = {
        'to-r': 'to right',
        'to-l': 'to left',
        'to-t': 'to top',
        'to-b': 'to bottom',
        'to-br': 'to bottom right',
        'to-bl': 'to bottom left',
        'to-tr': 'to top right',
        'to-tl': 'to top left'
      };

      style.backgroundImage = `linear-gradient(${directionMap[direction] || 'to right'}, ${from}${via}, ${to})`;
    } else if (bg.type === 'pattern') {
      style.backgroundColor = bg.color || '#ffffff';
      if (bg.pattern) {
        style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cuse href='%23${bg.pattern}'/%3E%3C/svg%3E")`;
      }
    } else if (bg.type === 'image') {
      style.backgroundImage = `url(${bg.image})`;
      style.backgroundSize = 'cover';
      style.backgroundPosition = 'center';
    } else if (bg.type === 'image-overlay') {
      style.backgroundImage = `url(${bg.image})`;
      style.backgroundSize = 'cover';
      style.backgroundPosition = 'center';
      style.position = 'relative';
    }

    return style;
  };

  // Get overlay style for image-overlay type
  const getOverlayStyle = () => {
    const bg = config.background;
    if (bg.type !== 'image-overlay' || !bg.overlay.enabled) return null;

    const overlay = bg.overlay;
    const style = {
      position: 'absolute',
      inset: 0,
      opacity: overlay.opacity / 100
    };

    if (overlay.type === 'color') {
      style.backgroundColor = overlay.color;
    }

    return style;
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`relative border-2 border-gray-200 group ${getContainerClasses()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable={!previewMode}
      onDragStart={(e) => onDragStart && onDragStart(e, index)}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop && onDrop(e, index)}
      style={getBackgroundStyle()}
    >
      {/* Overlay for image-overlay background */}
      {getOverlayStyle() && <div style={getOverlayStyle()} />}

      {/* Block Content */}
      <div className={getWrapperClasses()} style={{ position: 'relative', zIndex: 1 }}>
        {BlockComponent ? (
          <BlockComponent data={block.data || {}} />
        ) : (
          <div className="py-12 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800">{block.name}</h3>
              <p className="text-sm text-gray-600">{block.categoryName}</p>
            </div>
          </div>
        )}
      </div>

      {/* Hover Controls - Only show when not in preview mode */}
      {!previewMode && isHovered && (
        <>
          {/* Top Left - Drag Handle */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-2 left-2 cursor-move bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 z-30"
            title="Drag to reorder"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </motion.div>

          {/* Top Left - Move Up/Down Buttons */}
          <div className="absolute top-2 left-14 flex gap-1 z-30">
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

          {/* Top Right - Settings, Edit and Delete Buttons */}
          <div className="absolute top-2 right-2 flex gap-2 z-30">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => onSettings && onSettings(index)}
              className="bg-white rounded-lg shadow-lg p-2 hover:bg-purple-50 transition-colors"
              title="Block settings"
            >
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onEdit}
              className="bg-white rounded-lg shadow-lg p-2 hover:bg-blue-50 transition-colors"
              title="Edit content"
            >
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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
