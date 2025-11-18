import React from 'react';
import { motion } from 'framer-motion';
import { nodeTemplates } from '../constants/nodeTypes';

const NodeTemplatesSidebar = () => {
  const onDragStart = (event, template) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(template));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className="w-72 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <h2 className="text-lg font-bold text-gray-800">Page Templates</h2>
        <p className="text-xs text-gray-500 mt-1">Drag and drop to add pages</p>
      </div>

      <div className="p-4 space-y-3">
        {nodeTemplates.map((template) => {
          const IconComponent = template.icon;

          return (
            <motion.div
              key={template.id}
              draggable
              onDragStart={(e) => onDragStart(e, template)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-move bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-lg p-3 hover:border-gray-300 hover:shadow-md transition-all"
              style={{
                borderLeftColor: template.color,
                borderLeftWidth: '4px'
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ backgroundColor: `${template.color}20` }}
                >
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: template.color }}
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-semibold text-sm text-gray-800">
                    {template.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                    {template.description}
                  </p>
                  {template.defaultChildren && template.defaultChildren.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {template.defaultChildren.slice(0, 3).map((child, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600"
                        >
                          {child.name}
                        </span>
                      ))}
                      {template.defaultChildren.length > 3 && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                          +{template.defaultChildren.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="text-xs text-gray-600 space-y-2">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            <strong>Landing:</strong> Single-page marketing
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <strong>E-commerce:</strong> With cart & products
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <strong>Funnel:</strong> Multi-step conversion
          </p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            <strong>Auth:</strong> Login & registration
          </p>
        </div>
      </div>
    </div>
  );
};

export default NodeTemplatesSidebar;
