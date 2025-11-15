import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StyleToolbar = ({ isVisible, targetElement, onStyleChange }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [openDropdown, setOpenDropdown] = useState(null);
  const toolbarRef = useRef(null);

  useEffect(() => {
    if (isVisible && targetElement) {
      const updatePosition = () => {
        const rect = targetElement.getBoundingClientRect();
        const toolbarHeight = 50; // Estimated toolbar height
        const spacing = 10;

        setPosition({
          x: rect.left,
          y: rect.top - toolbarHeight - spacing,
        });
      };

      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);

      return () => {
        window.removeEventListener('scroll', updatePosition);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isVisible, targetElement]);

  const styleGroups = {
    textColor: {
      label: 'Color',
      icon: '🎨',
      options: [
        { name: 'Gray 900', class: 'text-gray-900', preview: '■' },
        { name: 'Gray 700', class: 'text-gray-700', preview: '■' },
        { name: 'Blue', class: 'text-blue-600', preview: '■' },
        { name: 'Red', class: 'text-red-600', preview: '■' },
        { name: 'Green', class: 'text-green-600', preview: '■' },
        { name: 'Purple', class: 'text-purple-600', preview: '■' },
      ],
    },
    fontSize: {
      label: 'Size',
      icon: 'A',
      options: [
        { name: 'SM', class: 'text-sm' },
        { name: 'Base', class: 'text-base' },
        { name: 'LG', class: 'text-lg' },
        { name: 'XL', class: 'text-xl' },
        { name: '2XL', class: 'text-2xl' },
        { name: '3XL', class: 'text-3xl' },
      ],
    },
    fontWeight: {
      label: 'Weight',
      icon: 'B',
      options: [
        { name: 'Normal', class: 'font-normal' },
        { name: 'Medium', class: 'font-medium' },
        { name: 'Semibold', class: 'font-semibold' },
        { name: 'Bold', class: 'font-bold' },
      ],
    },
    bgColor: {
      label: 'Background',
      icon: '⬜',
      options: [
        { name: 'None', class: '' },
        { name: 'Gray 50', class: 'bg-gray-50' },
        { name: 'Blue 50', class: 'bg-blue-50' },
        { name: 'Red 50', class: 'bg-red-50' },
        { name: 'Yellow 50', class: 'bg-yellow-50' },
      ],
    },
  };

  const handleStyleClick = (styleClass) => {
    onStyleChange(styleClass);
    setOpenDropdown(null);
  };

  const toggleDropdown = (groupKey) => {
    setOpenDropdown(openDropdown === groupKey ? null : groupKey);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={toolbarRef}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.15 }}
          className="fixed z-[100] bg-white rounded-lg shadow-2xl border-2 border-blue-500"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <div className="flex items-center gap-1 p-1">
            {Object.entries(styleGroups).map(([key, group]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="px-3 py-1.5 hover:bg-gray-100 rounded flex items-center gap-1 text-sm font-medium transition-colors"
                  title={group.label}
                >
                  <span>{group.icon}</span>
                  <span className="text-xs">{group.label}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {openDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.1 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 p-2 min-w-[160px] z-50"
                    >
                      {group.options.map((option) => (
                        <button
                          key={option.class || 'none'}
                          onClick={() => handleStyleClick(option.class)}
                          className={`w-full text-left px-3 py-2 rounded hover:bg-blue-50 text-sm transition-colors ${option.class}`}
                        >
                          {option.preview && <span className="mr-2">{option.preview}</span>}
                          {option.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StyleToolbar;
