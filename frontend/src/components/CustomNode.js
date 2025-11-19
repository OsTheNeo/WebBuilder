import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import { IconEye, IconEyeOff, IconEdit, IconTrash, IconCheck, IconX, IconSettings } from '@tabler/icons-react';
import { getTemplateByType } from '../constants/nodeTypes';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

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
    <Card
      className={`transition-all border-2 ${
        data.enabled ? '' : 'opacity-60'
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
                <Input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="flex-1 h-8 text-sm font-semibold"
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
              <Input
                type="text"
                value={editedPath}
                onChange={(e) => setEditedPath(e.target.value)}
                placeholder="/path"
                className="w-full mt-1 h-7 text-xs"
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
            <Button
              onClick={handleSaveEdit}
              className="flex-1 bg-green-600 hover:bg-green-700 h-8 text-xs"
            >
              <IconCheck className="w-3.5 h-3.5 mr-1" />
              Save
            </Button>
            <Button
              onClick={handleCancelEdit}
              variant="outline"
              className="flex-1 h-8 text-xs"
            >
              <IconX className="w-3.5 h-3.5 mr-1" />
              Cancel
            </Button>
          </div>
        ) : (
          <>
            <div className="flex gap-1">
              <Button
                onClick={() => data.onToggleVisibility(id)}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                title={data.enabled ? 'Hide page' : 'Show page'}
              >
                {data.enabled ? (
                  <IconEye className="w-4 h-4 text-green-600" />
                ) : (
                  <IconEyeOff className="w-4 h-4 text-muted-foreground" />
                )}
              </Button>
              <Button
                onClick={() => setIsEditing(true)}
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                title="Edit page"
              >
                <IconEdit className="w-4 h-4 text-blue-600" />
              </Button>
            </div>
            <div className="flex gap-1">
              {canDelete && (
                <Button
                  onClick={() => data.onDelete(id)}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-red-50"
                  title="Delete page"
                >
                  <IconTrash className="w-4 h-4 text-red-600" />
                </Button>
              )}
              <Button
                onClick={() => data.onDesign(id)}
                className={`h-8 text-xs ${
                  isProjectConfig
                    ? 'bg-purple-500 hover:bg-purple-600'
                    : ''
                }`}
              >
                {isProjectConfig && <IconSettings className="w-3.5 h-3.5 mr-1" />}
                {isProjectConfig ? 'Configure' : 'Design'}
              </Button>
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
    </Card>
  );
};

export default CustomNode;
