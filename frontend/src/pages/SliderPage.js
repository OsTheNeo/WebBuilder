import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlockSelector from '../components/BlockSelector';
import { IconHome, IconPlus } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { getBlockComponent } from '../blocks';

const SliderPage = () => {
  const navigate = useNavigate();
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Load saved block from localStorage on mount
  useEffect(() => {
    const savedBlockStr = localStorage.getItem('sliderSelectedBlock');
    if (savedBlockStr) {
      try {
        const savedBlock = JSON.parse(savedBlockStr);
        setSelectedBlock(savedBlock);
      } catch (e) {
        console.error('Error loading saved block:', e);
      }
    }
  }, []);

  const handleSelectBlock = (block) => {
    setSelectedBlock(block);
    // Auto-save to localStorage
    localStorage.setItem('sliderSelectedBlock', JSON.stringify(block));
    console.log('Selected and saved block:', block);
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 py-4"
      >
        <div className="max-w-7xl mx-auto px-4">
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
                <h1 className="text-2xl font-bold text-gray-800">Slider - Header Selector</h1>
                <p className="text-sm text-gray-500">Selecciona un header para tu página</p>
              </div>
            </div>
            {selectedBlock && (
              <div className="bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Seleccionado:</span> {selectedBlock.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {/* Selected Block Preview */}
          {selectedBlock ? (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  Bloque Seleccionado
                </h2>
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <IconPlus className="w-5 h-5" />
                  Cambiar Bloque
                </button>
              </div>

              {/* Visual Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border-2 border-blue-200 rounded-lg overflow-hidden shadow-lg"
              >
                {(() => {
                  const BlockComponent = getBlockComponent(selectedBlock.id);
                  return BlockComponent ? (
                    <BlockComponent data={{}} />
                  ) : (
                    <div className="bg-blue-50 p-8 text-center">
                      <p className="text-lg font-medium text-blue-800">
                        {selectedBlock.name}
                      </p>
                    </div>
                  );
                })()}
              </motion.div>

              {/* Block Info */}
              <div className="bg-gray-50 rounded-lg p-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Nombre</p>
                  <p className="font-medium text-gray-800">{selectedBlock.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Categoría</p>
                  <p className="font-medium text-gray-800">{selectedBlock.categoryName}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                No hay bloque seleccionado
              </h2>
              <p className="text-gray-600 mb-6">
                Selecciona un header para comenzar
              </p>
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2 mx-auto"
              >
                <IconPlus className="w-5 h-5" />
                Seleccionar Bloque
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Block Selector Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <BlockSelector
            onSelectBlock={handleSelectBlock}
            onClose={() => setIsDrawerOpen(false)}
            filterCategory="headers"
            hideCategories={false}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SliderPage;
