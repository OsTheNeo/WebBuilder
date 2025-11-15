import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TreeView = ({ structure, onAddNode, onSelectNode, selectedNodeId }) => {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['root']));
  const [showAddMenu, setShowAddMenu] = useState(null);

  const componentTypes = [
    { id: 'title', name: 'Title', icon: 'H1' },
    { id: 'subtitle', name: 'Subtitle', icon: 'H2' },
    { id: 'paragraph', name: 'Paragraph', icon: 'P' },
    { id: 'quote', name: 'Quote', icon: '❝' },
    { id: 'image', name: 'Image', icon: '🖼' },
    { id: 'two-column', name: 'Two Columns', icon: '⫿' },
  ];

  const toggleNode = (nodeId) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const handleAddNode = (parentId, componentType) => {
    onAddNode(parentId, componentType);
    setShowAddMenu(null);
  };

  const renderNode = (node, depth = 0) => {
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children && node.children.length > 0;
    const isSelected = selectedNodeId === node.id;

    return (
      <div key={node.id} className="relative">
        <div
          className={`flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-all ${
            isSelected
              ? 'bg-blue-100 border-l-4 border-blue-500'
              : 'hover:bg-gray-100'
          }`}
          style={{ paddingLeft: `${depth * 20 + 12}px` }}
          onClick={() => onSelectNode(node.id)}
        >
          {/* Expand/Collapse Button */}
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(node.id);
              }}
              className="w-5 h-5 flex items-center justify-center hover:bg-gray-200 rounded"
            >
              <svg
                className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Node Icon and Label */}
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xs font-mono text-gray-500">&lt;{node.tag}&gt;</span>
            <span className="text-sm font-medium text-gray-700">{node.label}</span>
          </div>

          {/* Add Node Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowAddMenu(showAddMenu === node.id ? null : node.id);
            }}
            className="w-6 h-6 flex items-center justify-center hover:bg-blue-100 rounded text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
            title="Add child node"
          >
            <span className="text-lg font-bold">+</span>
          </button>
        </div>

        {/* Add Component Menu */}
        <AnimatePresence>
          {showAddMenu === node.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="ml-8 mb-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-2">
                <p className="text-xs text-gray-500 font-semibold mb-2 px-2">Add Component:</p>
                <div className="space-y-1">
                  {componentTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => handleAddNode(node.id, type)}
                      className="w-full flex items-center gap-3 px-3 py-2 hover:bg-blue-50 rounded transition-colors text-left"
                    >
                      <span className="text-lg">{type.icon}</span>
                      <span className="text-sm font-medium">{type.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="border-l-2 border-gray-200 ml-3">
            {node.children.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-full overflow-y-auto bg-white rounded-lg border border-gray-200 p-4">
      <div className="mb-4 pb-3 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Document Structure
        </h3>
        <p className="text-xs text-gray-500 mt-1">Click to select • + to add components</p>
      </div>

      <div className="space-y-1 group">
        {renderNode(structure)}
      </div>
    </div>
  );
};

export default TreeView;
