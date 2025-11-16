import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageSettingsDrawer = ({ isOpen, onClose, pageSettings, onUpdate }) => {
  const [settings, setSettings] = useState(pageSettings || {
    backgroundColor: '#f3f4f6'
  });

  useEffect(() => {
    if (pageSettings) {
      setSettings(pageSettings);
    }
  }, [pageSettings]);

  const updateSetting = (key, value) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    onUpdate(newSettings);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between z-10">
              <h2 className="text-xl font-bold text-gray-800">Page Settings</h2>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-6">
              {/* Background Color */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Page Background Color</h3>
                <p className="text-xs text-gray-500 mb-3">
                  This is the background color behind all blocks. Boxed blocks will show this color on the sides.
                </p>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-gray-600 mb-2 block">Color Picker</label>
                    <input
                      type="color"
                      value={settings.backgroundColor}
                      onChange={(e) => updateSetting('backgroundColor', e.target.value)}
                      className="w-full h-12 rounded-lg border border-gray-300 cursor-pointer"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-2 block">Hex Value</label>
                    <input
                      type="text"
                      value={settings.backgroundColor}
                      onChange={(e) => updateSetting('backgroundColor', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                      placeholder="#f3f4f6"
                    />
                  </div>

                  {/* Preset Colors */}
                  <div>
                    <label className="text-xs text-gray-600 mb-2 block">Quick Presets</label>
                    <div className="grid grid-cols-5 gap-2">
                      {[
                        { name: 'White', color: '#ffffff' },
                        { name: 'Gray 50', color: '#f9fafb' },
                        { name: 'Gray 100', color: '#f3f4f6' },
                        { name: 'Gray 200', color: '#e5e7eb' },
                        { name: 'Slate', color: '#f1f5f9' },
                        { name: 'Blue 50', color: '#eff6ff' },
                        { name: 'Purple 50', color: '#faf5ff' },
                        { name: 'Pink 50', color: '#fdf2f8' },
                        { name: 'Green 50', color: '#f0fdf4' },
                        { name: 'Yellow 50', color: '#fefce8' }
                      ].map((preset) => (
                        <button
                          key={preset.color}
                          onClick={() => updateSetting('backgroundColor', preset.color)}
                          className={`h-10 rounded-lg border-2 transition-all ${
                            settings.backgroundColor === preset.color
                              ? 'border-blue-500 scale-105'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                          style={{ backgroundColor: preset.color }}
                          title={preset.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-blue-800">
                    <p className="font-semibold mb-1">How it works:</p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Page background appears behind all blocks</li>
                      <li>Full-width blocks can have their own background</li>
                      <li>Boxed blocks show page background on the sides</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PageSettingsDrawer;
