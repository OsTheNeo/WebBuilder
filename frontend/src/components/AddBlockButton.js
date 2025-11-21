import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddBlockButton = ({ onAddBlock, position = 'between' }) => {
  const [showMenu, setShowMenu] = useState(false);

  const blockTypes = [
    { id: 'text', name: 'Text', icon: 'T' },
    { id: 'menu', name: 'Menu', icon: '≡' },
    { id: 'map', name: 'Map', icon: '🗺' },
    { id: 'image', name: 'Image', icon: '□' },
    { id: 'video', name: 'Video', icon: '▶' },
    { id: 'audio', name: 'Audio', icon: '♫' },
    { id: 'button', name: 'Button', icon: '▭' },
    { id: 'icon', name: 'Icon', icon: '★' },
    { id: 'spacer', name: 'Spacer', icon: '↕' },
    { id: 'form', name: 'Form', icon: '⊞' },
    { id: 'markup', name: 'Markup', icon: '<>' },
    { id: 'embed', name: 'Embed', icon: '⊕' },
    { id: 'circletext', name: 'Circle Text', icon: '◯' },
    { id: 'slider', name: 'Slider', icon: '⊟' },
    { id: 'social', name: 'Social', icon: '⚑' },
  ];

  const handleBlockSelect = (blockType) => {
    onAddBlock(blockType);
    setShowMenu(false);
  };

  return (
    <div className="relative group my-4">
      {/* Divider line - only visible on hover */}
      <div className="absolute inset-0 flex items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-full border-t-2 border-dashed border-blue-400"></div>
      </div>

      {/* Add button - only visible on hover */}
      <div className="relative flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-8 h-8 bg-white border-2 border-blue-400 rounded-full flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-all hover:scale-110 shadow-lg"
          title="Agregar bloque"
        >
          <svg
            className={`w-5 h-5 text-blue-600 transition-transform ${showMenu ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Block type menu */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-2xl border-2 border-blue-500 p-3 z-50"
            >
              <div className="text-xs font-semibold text-gray-500 px-1 mb-2">
                Agregar bloque
              </div>
              <div className="grid grid-cols-5 gap-2">
                {blockTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleBlockSelect(type)}
                    className="flex flex-col items-center justify-center w-16 h-16 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                    title={type.name}
                  >
                    <span className="text-2xl mb-1 group-hover:scale-110 transition-transform">{type.icon}</span>
                    <span className="text-[9px] font-medium text-gray-600 group-hover:text-blue-700">{type.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddBlockButton;
