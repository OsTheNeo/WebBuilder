import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX, IconCheck } from '@tabler/icons-react';
import { getAllTemplates } from './templates';

const TemplateSelector = ({ onSelectTemplate, onClose }) => {
  const templates = getAllTemplates();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-800 rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-white">Choose a Template</h2>
              <p className="text-sm text-gray-400 mt-1">Start with a pre-designed slider template</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
            >
              <IconX className="w-6 h-6" />
            </button>
          </div>

          {/* Templates Grid */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="grid grid-cols-2 gap-6">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.02 }}
                  className="group relative bg-gray-700 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
                  onClick={() => onSelectTemplate(template)}
                >
                  {/* Thumbnail */}
                  <div className="aspect-video w-full bg-gray-900 relative overflow-hidden">
                    <img
                      src={template.thumbnail}
                      alt={template.name}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center gap-2">
                          <IconCheck className="w-5 h-5" />
                          <span className="font-semibold">Use Template</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1">{template.name}</h3>
                    <p className="text-sm text-gray-400">{template.description}</p>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Template
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Blank template option */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-6 group relative bg-gray-700 rounded-lg overflow-hidden cursor-pointer border-2 border-dashed border-gray-600 hover:border-blue-500 transition-all"
              onClick={() => onSelectTemplate(null)}
            >
              <div className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-600 flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <svg className="w-8 h-8 text-gray-400 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">Start from Scratch</h3>
                <p className="text-sm text-gray-400">Create your own slider from an empty canvas</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TemplateSelector;
