import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddBlockButton from '../components/AddBlockButton';
import EditableBlock from '../components/EditableBlock';
import { BLOCK_COMPONENTS, BLOCK_INITIAL_DATA } from '../components/BlockTemplates';

const EditorPage = () => {
  const [blocks, setBlocks] = useState([
    {
      id: 'block-1',
      type: 'heading',
      data: { content: 'Mi Primer Artículo' }
    },
    {
      id: 'block-2',
      type: 'text-single',
      data: { content: 'Comienza a escribir tu contenido aquí. Puedes agregar más bloques usando el botón + que aparece entre los elementos.' }
    },
    {
      id: 'block-3',
      type: 'image-full',
      data: {
        imageUrl: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop',
        alt: 'Imagen de ejemplo'
      }
    }
  ]);

  const [nodeStyles, setNodeStyles] = useState({});

  // Agregar bloque
  const handleAddBlock = (blockType, afterBlockId) => {
    const newBlockId = `block-${Date.now()}`;
    const newBlock = {
      id: newBlockId,
      type: blockType.id,
      data: { ...BLOCK_INITIAL_DATA[blockType.id] }
    };

    setBlocks(prevBlocks => {
      if (!afterBlockId) {
        // Agregar al final
        return [...prevBlocks, newBlock];
      }

      // Insertar después de un bloque específico
      const index = prevBlocks.findIndex(b => b.id === afterBlockId);
      const newBlocks = [...prevBlocks];
      newBlocks.splice(index + 1, 0, newBlock);
      return newBlocks;
    });
  };

  // Eliminar bloque
  const handleDeleteBlock = (blockId) => {
    setBlocks(prevBlocks => prevBlocks.filter(b => b.id !== blockId));
  };

  // Actualizar datos de un bloque
  const handleBlockDataChange = (blockId, field, value) => {
    setBlocks(prevBlocks =>
      prevBlocks.map(block =>
        block.id === blockId
          ? { ...block, data: { ...block.data, [field]: value } }
          : block
      )
    );
  };

  // Manejar cambio de estilos
  const handleStyleChange = (nodeId, newClasses) => {
    setNodeStyles(prev => ({
      ...prev,
      [nodeId]: newClasses
    }));
  };

  // Renderizar un bloque
  const renderBlock = (block) => {
    const BlockComponent = BLOCK_COMPONENTS[block.type];

    if (!BlockComponent) {
      return <div>Tipo de bloque desconocido: {block.type}</div>;
    }

    return (
      <BlockComponent
        blockId={block.id}
        data={block.data}
        onChange={handleBlockDataChange}
        onStyleChange={handleStyleChange}
      />
    );
  };

  // Guardar contenido (puedes implementar esto más tarde)
  const handleSave = () => {
    console.log('Guardando...', { blocks, nodeStyles });
    alert('Contenido guardado! (Ver consola para detalles)');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200 py-3"
      >
        <div className="max-w-full mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Editor de Contenido</h1>
              <p className="text-gray-600 text-sm">
                Crea y edita tu contenido con bloques dinámicos
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Editor Content */}
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-12"
        >
          {/* Add button at the top */}
          <AddBlockButton
            onAddBlock={(blockType) => handleAddBlock(blockType, null)}
          />

          {/* Render blocks */}
          <AnimatePresence>
            {blocks.map((block, index) => (
              <React.Fragment key={block.id}>
                <EditableBlock
                  blockId={block.id}
                  onDelete={handleDeleteBlock}
                >
                  {renderBlock(block)}
                </EditableBlock>

                {/* Add button between blocks */}
                <AddBlockButton
                  onAddBlock={(blockType) => handleAddBlock(blockType, block.id)}
                />
              </React.Fragment>
            ))}
          </AnimatePresence>

          {/* Empty state */}
          {blocks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 mb-4">
                No hay bloques aún. Haz clic en el botón + para agregar contenido.
              </p>
            </div>
          )}
        </motion.div>

        {/* Helper info */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">💡 Consejos:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Haz clic en el botón <strong>+</strong> para agregar nuevos bloques</li>
            <li>• Pasa el mouse sobre un bloque para ver el botón de eliminar</li>
            <li>• Haz clic en cualquier texto para editarlo</li>
            <li>• Usa la barra de herramientas para dar formato al texto</li>
            <li>• Haz clic en "Cambiar Imagen" para reemplazar imágenes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
