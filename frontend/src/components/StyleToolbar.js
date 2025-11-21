import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StyleToolbar = ({ isVisible, targetElement, onStyleChange }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeFormats, setActiveFormats] = useState({
    bold: false,
    italic: false,
    underline: false,
  });
  const toolbarRef = useRef(null);

  useEffect(() => {
    if (isVisible && targetElement) {
      const updatePosition = () => {
        const rect = targetElement.getBoundingClientRect();
        const toolbarHeight = 60;
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

  // All Tailwind colors
  const tailwindColors = {
    slate: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    gray: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    zinc: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    neutral: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    stone: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    red: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    orange: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    amber: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    yellow: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    lime: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    green: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    emerald: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    teal: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    cyan: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    sky: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    blue: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    indigo: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    violet: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    purple: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    fuchsia: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    pink: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
    rose: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  };

  const styleGroups = {
    fontFamily: {
      label: 'Tipografía',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      ),
      options: [
        { name: 'Sans Serif', class: 'font-sans' },
        { name: 'Serif', class: 'font-serif' },
        { name: 'Mono', class: 'font-mono' },
      ],
    },
    fontSize: {
      label: 'Tamaño',
      icon: 'A',
      options: [
        { name: 'XS', class: 'text-xs' },
        { name: 'SM', class: 'text-sm' },
        { name: 'Base', class: 'text-base' },
        { name: 'LG', class: 'text-lg' },
        { name: 'XL', class: 'text-xl' },
        { name: '2XL', class: 'text-2xl' },
        { name: '3XL', class: 'text-3xl' },
        { name: '4XL', class: 'text-4xl' },
        { name: '5XL', class: 'text-5xl' },
        { name: '6XL', class: 'text-6xl' },
        { name: '7XL', class: 'text-7xl' },
        { name: '8XL', class: 'text-8xl' },
        { name: '9XL', class: 'text-9xl' },
      ],
    },
    textColor: {
      label: 'Color',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      isColorPicker: true,
    },
    bgColor: {
      label: 'Fondo',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          <path d="M7 7h10v10H7z"/>
        </svg>
      ),
      isColorPicker: true,
      isBackground: true,
    },
  };

  const toggleFormat = (format) => {
    setActiveFormats(prev => ({
      ...prev,
      [format]: !prev[format]
    }));

    const classMap = {
      bold: 'font-bold',
      italic: 'italic',
      underline: 'underline',
    };

    onStyleChange(classMap[format]);
  };

  const handleStyleClick = (styleClass) => {
    onStyleChange(styleClass);
    setOpenDropdown(null);
  };

  const toggleDropdown = (groupKey) => {
    setOpenDropdown(openDropdown === groupKey ? null : groupKey);
  };

  const handleReset = () => {
    // Reset to minimal styling - notify parent to clear custom styles
    onStyleChange('RESET_STYLES');
    setActiveFormats({
      bold: false,
      italic: false,
      underline: false,
    });
  };

  const renderColorPicker = (isBackground = false) => {
    const prefix = isBackground ? 'bg' : 'text';

    return (
      <div className="p-2 max-h-96 overflow-y-auto w-72">
        {isBackground && (
          <div className="mb-2">
            <button
              onClick={() => handleStyleClick('')}
              className="w-full text-left px-2 py-1.5 rounded hover:bg-gray-100 text-xs font-medium border border-gray-300"
            >
              Sin fondo
            </button>
          </div>
        )}
        {Object.entries(tailwindColors).map(([colorName, shades]) => (
          <div key={colorName} className="mb-2">
            <div className="grid grid-cols-11 gap-0.5">
              {shades.map((shade) => {
                const className = `${prefix}-${colorName}-${shade}`;
                return (
                  <button
                    key={shade}
                    onClick={() => handleStyleClick(className)}
                    className={`w-5 h-5 rounded border border-gray-300 hover:scale-125 transition-transform ${className}`}
                    title={`${colorName}-${shade}`}
                  />
                );
              })}
            </div>
          </div>
        ))}
        {/* Special colors */}
        <div className="mt-2">
          <div className="flex gap-1">
            <button
              onClick={() => handleStyleClick(`${prefix}-white`)}
              className={`w-5 h-5 rounded border-2 border-gray-400 hover:scale-125 transition-transform ${prefix}-white`}
              title="white"
            />
            <button
              onClick={() => handleStyleClick(`${prefix}-black`)}
              className={`w-5 h-5 rounded border border-gray-300 hover:scale-125 transition-transform ${prefix}-black`}
              title="black"
            />
          </div>
        </div>
      </div>
    );
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
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <div className="flex items-center gap-1 p-1.5">
            {/* Format Toggle Buttons: Bold, Italic, Underline */}
            <div className="flex items-center gap-0.5 border-r border-gray-300 pr-1.5 mr-1.5">
              <button
                onClick={() => toggleFormat('bold')}
                className={`px-2.5 py-1.5 hover:bg-gray-100 rounded font-bold transition-colors ${activeFormats.bold ? 'bg-blue-100 text-blue-700' : ''}`}
                title="Negrita"
              >
                B
              </button>
              <button
                onClick={() => toggleFormat('italic')}
                className={`px-2.5 py-1.5 hover:bg-gray-100 rounded italic transition-colors ${activeFormats.italic ? 'bg-blue-100 text-blue-700' : ''}`}
                title="Itálica"
              >
                I
              </button>
              <button
                onClick={() => toggleFormat('underline')}
                className={`px-2.5 py-1.5 hover:bg-gray-100 rounded underline transition-colors ${activeFormats.underline ? 'bg-blue-100 text-blue-700' : ''}`}
                title="Subrayado"
              >
                U
              </button>
            </div>

            {/* Font Family, Font Size, Colors */}
            {Object.entries(styleGroups).map(([key, group]) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(key)}
                  className="px-2.5 py-1.5 hover:bg-gray-100 rounded flex items-center gap-1 text-sm font-medium transition-colors"
                  title={group.label}
                >
                  {typeof group.icon === 'string' ? (
                    <span className="text-sm">{group.icon}</span>
                  ) : (
                    group.icon
                  )}
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
                      className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-200 min-w-[160px] z-50 max-h-[400px] overflow-y-auto"
                    >
                      {group.isColorPicker ? (
                        renderColorPicker(group.isBackground)
                      ) : (
                        <div className="p-2">
                          {group.options.map((option) => (
                            <button
                              key={option.class || 'none'}
                              onClick={() => handleStyleClick(option.class)}
                              className={`w-full text-left px-3 py-2 rounded hover:bg-blue-50 text-sm transition-colors ${option.class}`}
                            >
                              {option.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Text Alignment */}
            <div className="flex items-center gap-0.5 border-l border-gray-300 pl-1.5 ml-1.5">
              <button
                onClick={() => handleStyleClick('text-left')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Alinear a la izquierda"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => handleStyleClick('text-center')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Centrar"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 12h10M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => handleStyleClick('text-right')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Alinear a la derecha"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M10 12h10M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => handleStyleClick('text-justify')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Justificar"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Indentation */}
            <div className="flex items-center gap-0.5 border-l border-gray-300 pl-1.5 ml-1.5">
              <button
                onClick={() => handleStyleClick('pl-0')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Sin sangría"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => handleStyleClick('pl-4')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Sangría pequeña"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => handleStyleClick('pl-8')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Sangría mediana"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={() => handleStyleClick('pl-12')}
                className="px-2.5 py-1.5 hover:bg-gray-100 rounded transition-colors"
                title="Sangría grande"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 5l7 7-7 7M9 5l7 7-7 7M1 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Reset Button */}
            <div className="flex items-center border-l border-gray-300 pl-1.5 ml-1.5">
              <button
                onClick={handleReset}
                className="px-2.5 py-1.5 hover:bg-red-50 text-red-600 rounded transition-colors"
                title="Resetear estilos"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StyleToolbar;
