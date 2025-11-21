import React, { useState } from 'react';
import { motion } from 'framer-motion';

const DataPreviewSidebar = ({ blocks, nodeStyles, isOpen, onToggle }) => {
  const [activeTab, setActiveTab] = useState('json');

  // Preparar datos como se guardarían en BD
  const prepareForDatabase = () => {
    return {
      version: '1.0',
      blocks: blocks.map(block => ({
        id: block.id,
        type: block.type,
        data: block.data,
        styles: nodeStyles[block.id] || {},
        order: blocks.indexOf(block)
      })),
      metadata: {
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        total_blocks: blocks.length
      }
    };
  };

  // Formato SQL para INSERT
  const generateSQLInsert = () => {
    const data = prepareForDatabase();
    return `-- Ejemplo de cómo guardar en MySQL/PostgreSQL
-- Tabla: page_content

INSERT INTO page_content (
  page_id,
  content_json,
  version,
  created_at,
  updated_at
) VALUES (
  1,
  '${JSON.stringify(data, null, 2).replace(/'/g, "''")}',
  '${data.version}',
  NOW(),
  NOW()
);

-- O con meta separada:
INSERT INTO page_blocks (page_id, block_order, block_type, block_data, styles)
VALUES
${blocks.map((block, index) =>
  `  (1, ${index}, '${block.type}', '${JSON.stringify(block.data).replace(/'/g, "''")}', '${JSON.stringify(nodeStyles[block.id] || {}).replace(/'/g, "''")}')`
).join(',\n')};`;
  };

  // Schema recomendado
  const getDatabaseSchema = () => {
    return `-- OPCIÓN 1: Guardar todo en JSON (como Elementor)
CREATE TABLE page_content (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  page_id BIGINT NOT NULL,
  content_json LONGTEXT NOT NULL, -- JSON completo
  version VARCHAR(10) DEFAULT '1.0',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_page_id (page_id)
);

-- OPCIÓN 2: Bloques separados (más flexible)
CREATE TABLE page_blocks (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  page_id BIGINT NOT NULL,
  block_order INT NOT NULL,
  block_type VARCHAR(50) NOT NULL,
  block_data JSON NOT NULL,
  styles JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_page_id (page_id),
  INDEX idx_block_order (page_id, block_order)
);`;
  };

  const renderContent = () => {
    const dbData = prepareForDatabase();

    switch (activeTab) {
      case 'json':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">=æ Estructura de Datos</h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {JSON.stringify(dbData, null, 2)}
              </pre>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs">
              <p className="font-semibold text-blue-900 mb-1">=¡ Cómo se guarda:</p>
              <p className="text-blue-800">
                Este JSON se guarda como un solo campo LONGTEXT o JSON en la base de datos,
                similar a como Elementor/Divi lo hacen.
              </p>
            </div>
          </div>
        );

      case 'sql':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">=¾ Query SQL de Inserción</h3>
              <pre className="bg-gray-900 text-yellow-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {generateSQLInsert()}
              </pre>
            </div>
          </div>
        );

      case 'schema':
        return (
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">=Ã Schema de Base de Datos</h3>
              <pre className="bg-gray-900 text-cyan-400 p-4 rounded-lg text-xs overflow-x-auto font-mono">
                {getDatabaseSchema()}
              </pre>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 text-xs space-y-2">
              <p className="font-semibold text-purple-900">=Ú Comparación con Elementor/Divi:</p>
              <ul className="text-purple-800 space-y-1 list-disc list-inside">
                <li><strong>Elementor:</strong> Guarda en wp_postmeta como _elementor_data (JSON serializado)</li>
                <li><strong>Divi:</strong> Guarda en post_content (shortcodes) + opciones separadas</li>
                <li><strong>Esta app:</strong> JSON puro en campo dedicado (más limpio y rápido)</li>
              </ul>
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-3xl font-bold text-blue-700">{blocks.length}</div>
                <div className="text-xs text-blue-600">Bloques totales</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-3xl font-bold text-green-700">
                  {Object.keys(nodeStyles).length}
                </div>
                <div className="text-xs text-green-600">Con estilos custom</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">=Ê Tipos de Bloques</h3>
              <div className="space-y-2">
                {Array.from(new Set(blocks.map(b => b.type))).map(type => {
                  const count = blocks.filter(b => b.type === type).length;
                  return (
                    <div key={type} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <span className="text-xs text-gray-700">{type}</span>
                      <span className="text-xs font-semibold text-gray-900">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">=¾ Tamaño estimado</h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="text-2xl font-bold text-yellow-700">
                  {(JSON.stringify(dbData).length / 1024).toFixed(2)} KB
                </div>
                <div className="text-xs text-yellow-600 mt-1">
                  Tamaño en base de datos
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={onToggle}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-blue-500 text-white px-3 py-6 rounded-l-lg shadow-lg hover:bg-blue-600 transition-all ${
          isOpen ? 'translate-x-96' : ''
        }`}
        title={isOpen ? 'Cerrar panel' : 'Ver datos guardados'}
      >
        <svg className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ x: isOpen ? 0 : 384 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed right-0 top-0 h-screen w-96 bg-white shadow-2xl z-40 overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4">
          <h2 className="text-lg font-bold">=¾ Vista de Datos</h2>
          <p className="text-xs opacity-90 mt-1">Cómo se guarda tu contenido</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50">
          {[
            { id: 'json', label: 'JSON', icon: '=Ä' },
            { id: 'sql', label: 'SQL', icon: '=¾' },
            { id: 'schema', label: 'Schema', icon: '=Ã' },
            { id: 'stats', label: 'Stats', icon: '=Ê' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-xs font-semibold transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <span className="mr-1">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {renderContent()}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-3 bg-gray-50">
          <button
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(prepareForDatabase(), null, 2));
              alert('¡JSON copiado al portapapeles!');
            }}
            className="w-full bg-blue-500 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors"
          >
            =Ë Copiar JSON
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default DataPreviewSidebar;
