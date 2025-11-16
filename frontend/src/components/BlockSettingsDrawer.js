import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { patternOptions } from './SvgPatterns';

const BlockSettingsDrawer = ({ isOpen, onClose, blockConfig, onUpdate }) => {
  const defaultConfig = {
    layout: 'boxed', // 'boxed' or 'full-width'
    alignment: 'center', // 'left', 'center', 'right'
    maxWidth: '7xl', // Tailwind max-width class (only for boxed layout)
    padding: { top: 12, right: 8, bottom: 12, left: 8 }, // in Tailwind units
    margin: { top: 0, bottom: 0 }, // in Tailwind units
    background: {
      type: 'color', // 'color', 'gradient', 'pattern', 'image', 'image-overlay'
      color: '#ffffff',
      gradient: {
        type: 'linear', // 'linear', 'radial'
        direction: 'to-r', // 'to-r', 'to-l', 'to-t', 'to-b', 'to-br', etc.
        from: '#3b82f6',
        via: null,
        to: '#8b5cf6'
      },
      pattern: null,
      patternColor: '#000000',
      image: '',
      overlay: {
        enabled: false,
        type: 'color', // 'color', 'gradient', 'pattern'
        color: '#000000',
        opacity: 50
      }
    }
  };

  const [config, setConfig] = useState(blockConfig || defaultConfig);

  // Update config when blockConfig prop changes
  useEffect(() => {
    if (blockConfig) {
      setConfig(blockConfig);
    } else {
      setConfig(defaultConfig);
    }
  }, [blockConfig]);

  const updateConfig = (path, value) => {
    const newConfig = { ...config };
    const keys = path.split('.');
    let current = newConfig;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const paddingOptions = [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32];
  const marginOptions = [0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32];

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
              <h2 className="text-xl font-bold text-gray-800">Block Settings</h2>
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
              {/* Layout Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Layout</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => updateConfig('layout', 'boxed')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      config.layout === 'boxed'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Boxed
                  </button>
                  <button
                    onClick={() => updateConfig('layout', 'full-width')}
                    className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                      config.layout === 'full-width'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Full Width
                  </button>
                </div>
              </div>

              {/* Alignment (only for boxed) */}
              {config.layout === 'boxed' && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Alignment</h3>
                  <div className="flex gap-2">
                    {['left', 'center', 'right'].map((align) => (
                      <button
                        key={align}
                        onClick={() => updateConfig('alignment', align)}
                        className={`flex-1 px-4 py-2 rounded-lg font-medium capitalize transition-colors ${
                          config.alignment === align
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {align}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Max Width (only for boxed) */}
              {config.layout === 'boxed' && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Max Width</h3>
                  <select
                    value={config.maxWidth}
                    onChange={(e) => updateConfig('maxWidth', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="xs">Extra Small (20rem / 320px)</option>
                    <option value="sm">Small (24rem / 384px)</option>
                    <option value="md">Medium (28rem / 448px)</option>
                    <option value="lg">Large (32rem / 512px)</option>
                    <option value="xl">Extra Large (36rem / 576px)</option>
                    <option value="2xl">2XL (42rem / 672px)</option>
                    <option value="3xl">3XL (48rem / 768px)</option>
                    <option value="4xl">4XL (56rem / 896px)</option>
                    <option value="5xl">5XL (64rem / 1024px)</option>
                    <option value="6xl">6XL (72rem / 1152px)</option>
                    <option value="7xl">7XL (80rem / 1280px)</option>
                    <option value="full">Full (100%)</option>
                  </select>
                </div>
              )}

              {/* Padding Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Padding</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Top</label>
                    <select
                      value={config.padding.top}
                      onChange={(e) => updateConfig('padding.top', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {paddingOptions.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Bottom</label>
                    <select
                      value={config.padding.bottom}
                      onChange={(e) => updateConfig('padding.bottom', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {paddingOptions.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Left</label>
                    <select
                      value={config.padding.left}
                      onChange={(e) => updateConfig('padding.left', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {paddingOptions.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Right</label>
                    <select
                      value={config.padding.right}
                      onChange={(e) => updateConfig('padding.right', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {paddingOptions.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Margin Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Margin</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Top</label>
                    <select
                      value={config.margin.top}
                      onChange={(e) => updateConfig('margin.top', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {marginOptions.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">Bottom</label>
                    <select
                      value={config.margin.bottom}
                      onChange={(e) => updateConfig('margin.bottom', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {marginOptions.map((val) => (
                        <option key={val} value={val}>{val}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Background Section */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Background</h3>

                {/* Background Type */}
                <div className="mb-4">
                  <label className="text-xs text-gray-600 mb-2 block">Type</label>
                  <select
                    value={config.background.type}
                    onChange={(e) => updateConfig('background.type', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="color">Solid Color</option>
                    <option value="gradient">Gradient</option>
                    <option value="pattern">Pattern</option>
                    <option value="image">Image</option>
                    <option value="image-overlay">Image with Overlay</option>
                  </select>
                </div>

                {/* Solid Color */}
                {config.background.type === 'color' && (
                  <div>
                    <label className="text-xs text-gray-600 mb-2 block">Color</label>
                    <input
                      type="color"
                      value={config.background.color}
                      onChange={(e) => updateConfig('background.color', e.target.value)}
                      className="w-full h-10 rounded-lg border border-gray-300"
                    />
                  </div>
                )}

                {/* Gradient */}
                {config.background.type === 'gradient' && (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-600 mb-2 block">Direction</label>
                      <select
                        value={config.background.gradient.direction}
                        onChange={(e) => updateConfig('background.gradient.direction', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      >
                        <option value="to-r">Left to Right</option>
                        <option value="to-l">Right to Left</option>
                        <option value="to-t">Bottom to Top</option>
                        <option value="to-b">Top to Bottom</option>
                        <option value="to-br">Top Left to Bottom Right</option>
                        <option value="to-bl">Top Right to Bottom Left</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-2 block">From Color</label>
                      <input
                        type="color"
                        value={config.background.gradient.from}
                        onChange={(e) => updateConfig('background.gradient.from', e.target.value)}
                        className="w-full h-10 rounded-lg border border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-2 block">To Color</label>
                      <input
                        type="color"
                        value={config.background.gradient.to}
                        onChange={(e) => updateConfig('background.gradient.to', e.target.value)}
                        className="w-full h-10 rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>
                )}

                {/* Pattern */}
                {config.background.type === 'pattern' && (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-600 mb-2 block">Pattern Style</label>
                      <select
                        value={config.background.pattern || 'pattern-dots'}
                        onChange={(e) => updateConfig('background.pattern', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      >
                        {patternOptions.map((pattern) => (
                          <option key={pattern.id} value={pattern.value}>{pattern.name}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-2 block">Background Color</label>
                      <input
                        type="color"
                        value={config.background.color}
                        onChange={(e) => updateConfig('background.color', e.target.value)}
                        className="w-full h-10 rounded-lg border border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 mb-2 block">Pattern Color</label>
                      <input
                        type="color"
                        value={config.background.patternColor}
                        onChange={(e) => updateConfig('background.patternColor', e.target.value)}
                        className="w-full h-10 rounded-lg border border-gray-300"
                      />
                    </div>
                  </div>
                )}

                {/* Image */}
                {(config.background.type === 'image' || config.background.type === 'image-overlay') && (
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-gray-600 mb-2 block">Image URL</label>
                      <input
                        type="text"
                        value={config.background.image}
                        onChange={(e) => updateConfig('background.image', e.target.value)}
                        placeholder="https://..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>

                    {/* Overlay Options */}
                    {config.background.type === 'image-overlay' && (
                      <>
                        <div>
                          <label className="text-xs text-gray-600 mb-2 block">Overlay Type</label>
                          <select
                            value={config.background.overlay.type}
                            onChange={(e) => updateConfig('background.overlay.type', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                          >
                            <option value="color">Solid Color</option>
                            <option value="gradient">Gradient</option>
                            <option value="pattern">Pattern</option>
                          </select>
                        </div>

                        {config.background.overlay.type === 'color' && (
                          <div>
                            <label className="text-xs text-gray-600 mb-2 block">Overlay Color</label>
                            <input
                              type="color"
                              value={config.background.overlay.color}
                              onChange={(e) => updateConfig('background.overlay.color', e.target.value)}
                              className="w-full h-10 rounded-lg border border-gray-300"
                            />
                          </div>
                        )}

                        <div>
                          <label className="text-xs text-gray-600 mb-2 block">Overlay Opacity: {config.background.overlay.opacity}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={config.background.overlay.opacity}
                            onChange={(e) => updateConfig('background.overlay.opacity', parseInt(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BlockSettingsDrawer;
