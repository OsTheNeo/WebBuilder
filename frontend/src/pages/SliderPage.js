import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BlockSelector from '../components/BlockSelector';
import { IconHome } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

const SliderPage = () => {
  const navigate = useNavigate();
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleSelectBlock = (block) => {
    setSelectedBlock(block);
    console.log('Selected block:', block);
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
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Explora los Headers Disponibles
            </h2>
            <p className="text-gray-600">
              Usa las flechas o el teclado (← →) para navegar. Presiona Enter para seleccionar.
            </p>
          </div>

          {/* Block Selector - Filtered for headers only */}
          <div className="mt-8">
            <BlockSelector
              onSelectBlock={handleSelectBlock}
              onClose={() => console.log('Selector closed')}
              filterCategory="headers"
              hideCategories={false}
            />
          </div>

          {/* Selected Block Info */}
          {selectedBlock && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Bloque Seleccionado
              </h3>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Nombre:</span> {selectedBlock.name}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">ID:</span> {selectedBlock.id}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Categoría:</span> {selectedBlock.categoryName}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Altura:</span> {selectedBlock.height}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SliderPage;
