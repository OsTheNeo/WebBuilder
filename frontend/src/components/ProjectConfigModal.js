import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX, IconUpload, IconPalette, IconTypography } from '@tabler/icons-react';
import BlockSelector from './BlockSelector';
import { getBlockById } from '../data/blocksData';
import { getBlockComponent } from '../blocks';

const ProjectConfigModal = ({ isOpen, onClose, config, onSave }) => {
  const [formData, setFormData] = useState(config);
  const [headerSelectorOpen, setHeaderSelectorOpen] = useState(false);
  const [footerSelectorOpen, setFooterSelectorOpen] = useState(false);

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  const handleColorChange = (key, value) => {
    setFormData({
      ...formData,
      colorPalette: {
        ...formData.colorPalette,
        [key]: value
      }
    });
  };

  const fontOptions = [
    'Inter', 'Roboto', 'Open Sans', 'Lato', 'Montserrat',
    'Poppins', 'Raleway', 'Playfair Display', 'Merriweather'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && onClose()}
          >
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Project Settings</h2>
                  <p className="text-sm text-gray-500 mt-1">Configure global settings for your project</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <IconX className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {/* Project Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <IconPalette className="w-5 h-5" />
                      Project Information
                    </h3>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.projectName}
                        onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="My Web Project"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="3"
                        placeholder="A beautiful web application"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Logo
                      </label>
                      <div className="flex items-center gap-4">
                        {formData.logo ? (
                          <div className="w-24 h-24 border border-gray-300 rounded-lg overflow-hidden">
                            <img src={formData.logo} alt="Logo" className="w-full h-full object-cover" />
                          </div>
                        ) : (
                          <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                            <IconUpload className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
                          Upload Logo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Typography */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <IconTypography className="w-5 h-5" />
                      Typography
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Primary Font
                        </label>
                        <select
                          value={formData.primaryFont}
                          onChange={(e) => setFormData({ ...formData, primaryFont: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {fontOptions.map(font => (
                            <option key={font} value={font}>{font}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Secondary Font
                        </label>
                        <select
                          value={formData.secondaryFont}
                          onChange={(e) => setFormData({ ...formData, secondaryFont: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {fontOptions.map(font => (
                            <option key={font} value={font}>{font}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Color Palette */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <IconPalette className="w-5 h-5" />
                      Color Palette
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Primary Color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={formData.colorPalette.primary}
                            onChange={(e) => handleColorChange('primary', e.target.value)}
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={formData.colorPalette.primary}
                            onChange={(e) => handleColorChange('primary', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Secondary Color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={formData.colorPalette.secondary}
                            onChange={(e) => handleColorChange('secondary', e.target.value)}
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={formData.colorPalette.secondary}
                            onChange={(e) => handleColorChange('secondary', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Accent Color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={formData.colorPalette.accent}
                            onChange={(e) => handleColorChange('accent', e.target.value)}
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={formData.colorPalette.accent}
                            onChange={(e) => handleColorChange('accent', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Text Color
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="color"
                            value={formData.colorPalette.text}
                            onChange={(e) => handleColorChange('text', e.target.value)}
                            className="w-12 h-10 rounded border border-gray-300 cursor-pointer"
                          />
                          <input
                            type="text"
                            value={formData.colorPalette.text}
                            onChange={(e) => handleColorChange('text', e.target.value)}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Default Layouts */}
                  <div className="space-y-4 pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Default Layouts
                    </h3>
                    <p className="text-sm text-gray-500">
                      Select default header and footer that will be applied to all pages
                    </p>

                    {/* Default Header */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-medium text-gray-700">
                          Default Header
                        </label>
                        {formData.defaultHeader && (
                          <button
                            onClick={() => setFormData({ ...formData, defaultHeader: null })}
                            className="text-xs text-red-500 hover:text-red-700 font-medium"
                          >
                            Clear Selection
                          </button>
                        )}
                      </div>

                      {formData.defaultHeader ? (
                        <div className="space-y-3">
                          {/* Visual Preview */}
                          <div className="border-2 border-blue-200 rounded-lg overflow-hidden">
                            {(() => {
                              const BlockComponent = getBlockComponent(formData.defaultHeader);
                              return BlockComponent ? (
                                <BlockComponent data={{}} />
                              ) : (
                                <div className="bg-blue-50 p-4 text-center">
                                  <p className="text-sm font-medium text-blue-800">
                                    {formData.defaultHeader}
                                  </p>
                                </div>
                              );
                            })()}
                          </div>
                          {/* Change Button */}
                          <button
                            onClick={() => setHeaderSelectorOpen(true)}
                            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors text-sm"
                          >
                            Change Header
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setHeaderSelectorOpen(true)}
                          className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-sm text-gray-600 hover:text-blue-600 font-medium"
                        >
                          + Select Default Header
                        </button>
                      )}

                      {headerSelectorOpen && (
                        <div className="mt-4">
                          <BlockSelector
                            onSelectBlock={(block) => {
                              setFormData({ ...formData, defaultHeader: block.id });
                              setHeaderSelectorOpen(false);
                            }}
                            onClose={() => setHeaderSelectorOpen(false)}
                            filterCategory="headers"
                            hideCategories={true}
                          />
                        </div>
                      )}
                    </div>

                    {/* Default Footer */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <label className="text-sm font-medium text-gray-700">
                          Default Footer
                        </label>
                        {formData.defaultFooter && (
                          <button
                            onClick={() => setFormData({ ...formData, defaultFooter: null })}
                            className="text-xs text-red-500 hover:text-red-700 font-medium"
                          >
                            Clear Selection
                          </button>
                        )}
                      </div>

                      {formData.defaultFooter ? (
                        <div className="space-y-3">
                          {/* Visual Preview */}
                          <div className="border-2 border-blue-200 rounded-lg overflow-hidden">
                            {(() => {
                              const BlockComponent = getBlockComponent(formData.defaultFooter);
                              return BlockComponent ? (
                                <BlockComponent data={{}} />
                              ) : (
                                <div className="bg-blue-50 p-4 text-center">
                                  <p className="text-sm font-medium text-blue-800">
                                    {formData.defaultFooter}
                                  </p>
                                </div>
                              );
                            })()}
                          </div>
                          {/* Change Button */}
                          <button
                            onClick={() => setFooterSelectorOpen(true)}
                            className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors text-sm"
                          >
                            Change Footer
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setFooterSelectorOpen(true)}
                          className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-sm text-gray-600 hover:text-blue-600 font-medium"
                        >
                          + Select Default Footer
                        </button>
                      )}

                      {footerSelectorOpen && (
                        <div className="mt-4">
                          <BlockSelector
                            onSelectBlock={(block) => {
                              setFormData({ ...formData, defaultFooter: block.id });
                              setFooterSelectorOpen(false);
                            }}
                            onClose={() => setFooterSelectorOpen(false)}
                            filterCategory="footers"
                            hideCategories={true}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectConfigModal;
