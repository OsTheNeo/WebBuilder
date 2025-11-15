import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StyleToolbar = ({ isVisible, position, currentStyles, onStyleChange }) => {
  const [activeTab, setActiveTab] = useState('text');
  const toolbarRef = useRef(null);

  const styleOptions = {
    textColor: [
      { name: 'Gray 900', class: 'text-gray-900' },
      { name: 'Gray 700', class: 'text-gray-700' },
      { name: 'Gray 500', class: 'text-gray-500' },
      { name: 'Blue', class: 'text-blue-600' },
      { name: 'Red', class: 'text-red-600' },
      { name: 'Green', class: 'text-green-600' },
      { name: 'Purple', class: 'text-purple-600' },
      { name: 'Orange', class: 'text-orange-600' },
    ],
    bgColor: [
      { name: 'None', class: '' },
      { name: 'White', class: 'bg-white' },
      { name: 'Gray 50', class: 'bg-gray-50' },
      { name: 'Gray 100', class: 'bg-gray-100' },
      { name: 'Blue 50', class: 'bg-blue-50' },
      { name: 'Red 50', class: 'bg-red-50' },
      { name: 'Green 50', class: 'bg-green-50' },
      { name: 'Yellow 50', class: 'bg-yellow-50' },
    ],
    fontSize: [
      { name: 'XS', class: 'text-xs' },
      { name: 'SM', class: 'text-sm' },
      { name: 'Base', class: 'text-base' },
      { name: 'LG', class: 'text-lg' },
      { name: 'XL', class: 'text-xl' },
      { name: '2XL', class: 'text-2xl' },
      { name: '3XL', class: 'text-3xl' },
      { name: '4XL', class: 'text-4xl' },
      { name: '5XL', class: 'text-5xl' },
    ],
    fontWeight: [
      { name: 'Normal', class: 'font-normal' },
      { name: 'Medium', class: 'font-medium' },
      { name: 'Semibold', class: 'font-semibold' },
      { name: 'Bold', class: 'font-bold' },
    ],
    fontFamily: [
      { name: 'Sans', class: 'font-sans' },
      { name: 'Serif', class: 'font-serif' },
      { name: 'Mono', class: 'font-mono' },
    ],
  };

  const tabs = [
    { id: 'text', name: 'Text', icon: 'T' },
    { id: 'bg', name: 'Background', icon: '🎨' },
    { id: 'size', name: 'Size', icon: '↕' },
  ];

  const handleStyleClick = (styleClass) => {
    onStyleChange(styleClass);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={toolbarRef}
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed z-50 bg-white rounded-lg shadow-2xl border border-gray-200 p-2"
          style={{
            left: `${position.x}px`,
            top: `${position.y - 60}px`,
            minWidth: '320px',
          }}
        >
          {/* Tabs */}
          <div className="flex gap-1 mb-2 border-b border-gray-200 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-1">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Style Options */}
          <div className="max-h-64 overflow-y-auto">
            {activeTab === 'text' && (
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-2">Color</p>
                  <div className="grid grid-cols-4 gap-1">
                    {styleOptions.textColor.map((option) => (
                      <button
                        key={option.class}
                        onClick={() => handleStyleClick(option.class)}
                        className={`px-2 py-1 text-xs rounded border hover:border-blue-500 transition ${option.class}`}
                        title={option.name}
                      >
                        Aa
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-2">Weight</p>
                  <div className="grid grid-cols-4 gap-1">
                    {styleOptions.fontWeight.map((option) => (
                      <button
                        key={option.class}
                        onClick={() => handleStyleClick(option.class)}
                        className={`px-2 py-1 text-xs rounded border hover:border-blue-500 transition ${option.class}`}
                        title={option.name}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-2">Font</p>
                  <div className="grid grid-cols-3 gap-1">
                    {styleOptions.fontFamily.map((option) => (
                      <button
                        key={option.class}
                        onClick={() => handleStyleClick(option.class)}
                        className={`px-2 py-1 text-xs rounded border hover:border-blue-500 transition ${option.class}`}
                        title={option.name}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bg' && (
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-2">Background Color</p>
                <div className="grid grid-cols-4 gap-1">
                  {styleOptions.bgColor.map((option) => (
                    <button
                      key={option.class || 'none'}
                      onClick={() => handleStyleClick(option.class)}
                      className={`px-2 py-2 text-xs rounded border hover:border-blue-500 transition ${option.class}`}
                      title={option.name}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'size' && (
              <div>
                <p className="text-xs font-semibold text-gray-600 mb-2">Font Size</p>
                <div className="grid grid-cols-3 gap-1">
                  {styleOptions.fontSize.map((option) => (
                    <button
                      key={option.class}
                      onClick={() => handleStyleClick(option.class)}
                      className={`px-2 py-1 rounded border hover:border-blue-500 transition ${option.class}`}
                      title={option.name}
                    >
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StyleToolbar;
