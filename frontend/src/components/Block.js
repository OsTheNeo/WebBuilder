import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getBlockComponent } from '../blocks';
import {
  IconSettings,
  IconReplace,
  IconX,
  IconGripVertical,
  IconChevronUp,
  IconChevronDown
} from '@tabler/icons-react';

const Block = ({
  block,
  index,
  section, // New prop to identify which section this block belongs to
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
  onDrop,
  disableDrag = false // New prop to disable drag-and-drop
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const BlockComponent = getBlockComponent(block.id);

  // Get block configuration
  const config = block.config || {
    layout: 'boxed',
    alignment: 'center',
    maxWidth: '7xl',
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
      const maxWidth = config.maxWidth || '7xl';
      classes.push(`max-w-${maxWidth}`);
      if (config.alignment === 'center') classes.push('mx-auto');
      if (config.alignment === 'left') classes.push('mr-auto');
      if (config.alignment === 'right') classes.push('ml-auto');
    }

    return classes.join(' ');
  };

  // Build background styles - applies to container or wrapper depending on layout
  const buildBackgroundStyle = () => {
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

  // Get background style for container (only for full-width)
  const getContainerBackgroundStyle = () => {
    if (config.layout === 'full-width') {
      return buildBackgroundStyle();
    }
    return {}; // Transparent for boxed layout
  };

  // Get background style for wrapper (only for boxed)
  const getWrapperBackgroundStyle = () => {
    if (config.layout === 'boxed') {
      return buildBackgroundStyle();
    }
    return {};
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
      draggable={!previewMode && !disableDrag}
      onDragStart={(e) => !disableDrag && onDragStart && onDragStart(e, index)}
      onDragEnd={!disableDrag ? onDragEnd : undefined}
      onDragOver={!disableDrag ? onDragOver : undefined}
      onDrop={(e) => !disableDrag && onDrop && onDrop(e, index)}
      style={getContainerBackgroundStyle()}
    >
      {/* Overlay for image-overlay background */}
      {getOverlayStyle() && <div style={getOverlayStyle()} />}

      {/* Block Content */}
      <div className={getWrapperClasses()} style={{ ...getWrapperBackgroundStyle(), position: 'relative', zIndex: 1 }}>
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
          {/* Top Left - Drag Handle (hidden when disableDrag is true) */}
          {!disableDrag && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-2 left-2 cursor-move bg-white rounded-lg shadow-lg p-2 hover:bg-gray-50 z-30"
              title="Drag to reorder"
            >
              <IconGripVertical className="w-5 h-5 text-gray-600" />
            </motion.div>
          )}

          {/* Top Left - Move Up/Down Buttons (hidden when disableDrag is true) */}
          {!disableDrag && (
            <div className="absolute top-2 left-14 flex gap-1 z-30">
              {canMoveUp && (
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  onClick={onMoveUp}
                  className="bg-white rounded-lg shadow-lg p-2 hover:bg-blue-50 transition-colors"
                  title="Move up"
                >
                  <IconChevronUp className="w-5 h-5 text-gray-600" />
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
                  <IconChevronDown className="w-5 h-5 text-gray-600" />
                </motion.button>
              )}
            </div>
          )}

          {/* Top Right - Settings, Edit and Delete Buttons */}
          <div className="absolute top-2 right-2 flex gap-2 z-30">
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => onSettings && onSettings(index)}
              className="bg-white rounded-lg shadow-lg p-2 hover:bg-purple-50 transition-colors"
              title="Block settings"
            >
              <IconSettings className="w-5 h-5 text-purple-600" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onEdit}
              className="bg-white rounded-lg shadow-lg p-2 hover:bg-blue-50 transition-colors"
              title="Replace block"
            >
              <IconReplace className="w-5 h-5 text-blue-600" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={onDelete}
              className="bg-white rounded-lg shadow-lg p-2 hover:bg-red-50 transition-colors"
              title="Delete block"
            >
              <IconX className="w-5 h-5 text-red-600" />
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Block;
