import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AddBlockButton = ({ onAddBlock, position = 'between' }) => {
  const [showMenu, setShowMenu] = useState(false);

  const blockTypes = [
    {
      id: 'text-single',
      name: 'Texto 1 Columna',
      icon: '📝',
      description: 'Párrafo simple'
    },
    {
      id: 'text-two-column',
      name: 'Texto 2 Columnas',
      icon: '📰',
      description: 'Texto en dos columnas'
    },
    {
      id: 'image-full',
      name: 'Imagen Completa',
      icon: '🖼️',
      description: 'Imagen ancho completo'
    },
    {
      id: 'image-text-left',
      name: 'Imagen + Texto',
      icon: '◧',
      description: 'Imagen izquierda, texto derecha'
    },
    {
      id: 'image-text-right',
      name: 'Texto + Imagen',
      icon: '◨',
      description: 'Texto izquierda, imagen derecha'
    },
    {
      id: 'heading',
      name: 'Título',
      icon: 'H',
      description: 'Encabezado de sección'
    },
    {
      id: 'quote',
      name: 'Cita',
      icon: '💬',
      description: 'Bloque de cita'
    },
  ];

  const handleBlockSelect = (blockType) => {
    onAddBlock(blockType);
    setShowMenu(false);
  };

  return (
    <div className="relative group my-4">
      {/* Divider line */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="w-full border-t-2 border-dashed border-gray-300 group-hover:border-blue-400 transition-colors"></div>
      </div>

      {/* Add button */}
      <div className="relative flex justify-center">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-8 h-8 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all group-hover:scale-110 shadow-sm"
          title="Agregar bloque"
        >
          <svg
            className={`w-5 h-5 text-gray-600 transition-transform ${showMenu ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Block type menu */}
      <AnimatePresence>
        {showMenu && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-2xl border-2 border-blue-500 p-2 z-50 min-w-[280px]"
            >
              <div className="text-xs font-semibold text-gray-500 px-3 py-2">
                Agregar bloque
              </div>
              <div className="grid grid-cols-1 gap-1">
                {blockTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => handleBlockSelect(type)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-blue-50 transition-colors text-left group/item"
                  >
                    <span className="text-2xl">{type.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900 group-hover/item:text-blue-700">
                        {type.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {type.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AddBlockButton;
