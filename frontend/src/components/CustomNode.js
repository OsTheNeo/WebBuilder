import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { IconEye, IconEyeOff, IconEdit, IconTrash, IconCheck, IconX, IconSettings } from '@tabler/icons-react';
import { getTemplateByType } from '../constants/nodeTypes';

const CustomNode = ({ data, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(data.label);
  const [editedPath, setEditedPath] = useState(data.path || '');

  const template = getTemplateByType(data.type);
  const nodeColor = template?.color || '#6B7280';
  const NodeIcon = template?.icon;
  const isProjectConfig = data.isProjectConfig || data.type === 'project_config';
  const canDelete = data.canDelete !== false && !data.isHome && !isProjectConfig;

  const handleSaveEdit = () => {
    if (editedName.trim()) {
      data.onUpdate(id, { label: editedName, path: editedPath });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedName(data.label);
    setEditedPath(data.path || '');
    setIsEditing(false);
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg border-2 transition-all ${
        data.enabled ? 'border-gray-200' : 'border-gray-300 opacity-60'
      }`}
      style={{
        borderColor: data.enabled ? nodeColor : '#D1D5DB',
        minWidth: '280px'
      }}
    >
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3"
        style={{ background: nodeColor }}
      />

      {/* Header */}
      <div
        className="p-3 rounded-t-lg"
        style={{
          background: `linear-gradient(135deg, ${nodeColor}15, ${nodeColor}05)`
        }}
      >
        <div className="flex items-center gap-2">
          {NodeIcon && (
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: `${nodeColor}20` }}
            >
              <NodeIcon className="w-5 h-5" style={{ color: nodeColor }} />
            </div>
          )}
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              {isEditing ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="flex-1 px-2 py-1 text-sm font-semibold border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  autoFocus
                />
              ) : (
                <h3 className="font-semibold text-gray-800 text-sm">{data.label}</h3>
              )}
              {isProjectConfig && !isEditing && (
                <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded">
                  CORE
                </span>
              )}
            </div>
            {isEditing ? (
              <input
                type="text"
                value={editedPath}
                onChange={(e) => setEditedPath(e.target.value)}
                placeholder="/path"
                className="w-full mt-1 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-xs text-gray-500 mt-0.5">{data.path || '/'}</p>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-2 flex items-center justify-between border-t border-gray-100">
        {isEditing ? (
          <div className="flex gap-1 w-full">
            <button
              onClick={handleSaveEdit}
              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-xs"
            >
              <IconCheck className="w-3.5 h-3.5" />
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="flex-1 flex items-center justify-center gap-1 px-2 py-1.5 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors text-xs"
            >
              <IconX className="w-3.5 h-3.5" />
              Cancel
            </button>
          </div>
        ) : (
          <>
            <div className="flex gap-1">
              <button
                onClick={() => data.onToggleVisibility(id)}
                className="p-1.5 rounded hover:bg-gray-100 transition-colors"
                title={data.enabled ? 'Hide page' : 'Show page'}
              >
                {data.enabled ? (
                  <IconEye className="w-4 h-4 text-green-600" />
                ) : (
                  <IconEyeOff className="w-4 h-4 text-gray-400" />
                )}
              </button>
              <button
                onClick={() => setIsEditing(true)}
                className="p-1.5 rounded hover:bg-gray-100 transition-colors"
                title="Edit page"
              >
                <IconEdit className="w-4 h-4 text-blue-600" />
              </button>
            </div>
            <div className="flex gap-1">
              {canDelete && (
                <button
                  onClick={() => data.onDelete(id)}
                  className="p-1.5 rounded hover:bg-red-50 transition-colors"
                  title="Delete page"
                >
                  <IconTrash className="w-4 h-4 text-red-600" />
                </button>
              )}
              <button
                onClick={() => data.onDesign(id)}
                className={`flex items-center gap-1 px-3 py-1.5 ${
                  isProjectConfig
                    ? 'bg-purple-500 hover:bg-purple-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white rounded transition-colors text-xs font-medium`}
              >
                {isProjectConfig && <IconSettings className="w-3.5 h-3.5" />}
                {isProjectConfig ? 'Configure' : 'Design'}
              </button>
            </div>
          </>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3"
        style={{ background: nodeColor }}
      />
    </div>
  );
};

export default CustomNode;
