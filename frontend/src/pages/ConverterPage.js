import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconHome, IconArrowsLeftRight, IconBraces } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import HtmlJsonConverter from '../components/converter/HtmlJsonConverter';
import DataMapper from '../components/converter/DataMapper';

const ConverterPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('converter'); // 'converter' or 'mapper'

  const tabs = [
    {
      id: 'converter',
      label: 'HTML ↔ JSON',
      icon: IconArrowsLeftRight,
      description: 'Convert between HTML and JSON formats'
    },
    {
      id: 'mapper',
      label: 'Data Mapper',
      icon: IconBraces,
      description: 'Map JSON data to HTML templates'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 py-4"
      >
        <div className="max-w-[1920px] mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="p-2 rounded-lg transition-all hover:bg-gray-100 text-gray-600 hover:text-gray-800"
                title="Volver al Home"
              >
                <IconHome className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">HTML/JSON Converter & Data Mapper</h1>
                <p className="text-sm text-gray-500">
                  Convert formats and map data to templates with automatic iteration detection
                </p>
              </div>
            </div>

            {/* Tab Selector in Header */}
            <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      px-4 py-2 rounded-md transition-all flex items-center gap-2
                      ${activeTab === tab.id
                        ? 'bg-white text-blue-600 shadow-sm font-medium'
                        : 'text-gray-600 hover:text-gray-800'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 min-h-[calc(100vh-200px)]"
        >
          {/* Tab Description */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg"
          >
            <div className="flex items-center gap-3">
              {React.createElement(tabs.find(t => t.id === activeTab)?.icon || IconArrowsLeftRight, {
                className: "w-6 h-6 text-blue-600"
              })}
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h2>
                <p className="text-sm text-gray-600">
                  {tabs.find(t => t.id === activeTab)?.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab + '-content'}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            {activeTab === 'converter' ? (
              <HtmlJsonConverter />
            ) : (
              <DataMapper />
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="max-w-[1920px] mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Features & Use Cases</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* HTML ↔ JSON Converter */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <IconArrowsLeftRight className="w-5 h-5 text-blue-600" />
                HTML ↔ JSON Converter
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Bidirectional conversion:</strong> Convert HTML to structured JSON and back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Preserves everything:</strong> Attributes, classes, styles, and hierarchy maintained</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Template analysis:</strong> Perfect for understanding and manipulating HTML structures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Use cases:</strong> Component analysis, template storage, programmatic HTML generation</span>
                </li>
              </ul>
            </div>

            {/* Data Mapper */}
            <div>
              <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <IconBraces className="w-5 h-5 text-purple-600" />
                Data Mapper
              </h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Auto-iteration:</strong> Automatically detects arrays in JSON and iterates template</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Smart mapping:</strong> Suggests field mappings between template and data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Live preview:</strong> See rendered output in real-time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <span><strong>Use cases:</strong> Product grids, user lists, dynamic content from APIs, data visualization</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Guide */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-700 mb-2">Quick Guide</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-700 mb-1">HTML → JSON:</p>
                <p>Paste HTML, click "HTML → JSON" to get structured representation</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">Data Mapping:</p>
                <p>Add JSON data, create template with {`{{placeholders}}`}, click "Process Template"</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">JSON → HTML:</p>
                <p>Paste JSON structure, click "JSON → HTML" to reconstruct original HTML</p>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">Iteration Detection:</p>
                <p>Arrays in JSON are auto-detected; use "Detect Loop" to see details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConverterPage;
