import React, { useState } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconPlus, IconTrash, IconGripVertical } from '@tabler/icons-react';

const SortableLayerItem = ({ layer, isSelected, onSelect, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: layer.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getLayerIcon = (type) => {
    switch (type) {
      case 'text':
        return 'T';
      case 'image':
        return '🖼️';
      case 'rect':
        return '▭';
      case 'video':
        return '🎬';
      default:
        return '•';
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all
        ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}
      `}
      onClick={() => onSelect(layer.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing"
      >
        <IconGripVertical className="w-4 h-4 text-gray-400" />
      </div>

      {/* Layer icon */}
      <div className="w-6 h-6 flex items-center justify-center bg-gray-600 rounded text-xs">
        {getLayerIcon(layer.type)}
      </div>

      {/* Layer name */}
      <div className="flex-1 truncate text-sm">
        {layer.type === 'text' ? layer.content : `${layer.type} ${layer.id.slice(-4)}`}
      </div>

      {/* Z-index */}
      <div className="text-xs text-gray-400">
        {layer.zIndex}
      </div>

      {/* Delete button */}
      {isHovered && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(layer.id);
          }}
          className="p-1 rounded hover:bg-red-500 transition-colors"
        >
          <IconTrash className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

const LayersPanel = ({ layers, selectedLayerId, onSelectLayer, onAddLayer, onDeleteLayer, onReorderLayers }) => {
  const [showAddMenu, setShowAddMenu] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = layers.findIndex((layer) => layer.id === active.id);
      const newIndex = layers.findIndex((layer) => layer.id === over.id);

      const newLayers = arrayMove(layers, oldIndex, newIndex).map((layer, idx) => ({
        ...layer,
        zIndex: idx + 1,
      }));

      onReorderLayers(newLayers);
    }
  };

  const layerTypes = [
    { type: 'text', label: 'Text', icon: 'T' },
    { type: 'rect', label: 'Rectangle', icon: '▭' },
    { type: 'image', label: 'Image', icon: '🖼️' },
    // { type: 'video', label: 'Video', icon: '🎬' },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-200 uppercase tracking-wide">Layers</h2>
          <div className="relative">
            <button
              onClick={() => setShowAddMenu(!showAddMenu)}
              className="p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
              title="Add Layer"
            >
              <IconPlus className="w-4 h-4" />
            </button>

            {/* Add Layer Menu */}
            {showAddMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-700 rounded-lg shadow-xl border border-gray-600 z-50">
                {layerTypes.map((layerType) => (
                  <button
                    key={layerType.type}
                    onClick={() => {
                      onAddLayer(layerType.type);
                      setShowAddMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-gray-200 hover:bg-gray-600 first:rounded-t-lg last:rounded-b-lg transition-colors flex items-center gap-2"
                  >
                    <span className="w-6 text-center">{layerType.icon}</span>
                    {layerType.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="text-xs text-gray-400">{layers.length} layer{layers.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Layers list */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {layers.length === 0 ? (
          <div className="text-center py-8 text-gray-500 text-sm">
            <p>No layers yet</p>
            <p className="text-xs mt-1">Click + to add a layer</p>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={layers.map(l => l.id)}
              strategy={verticalListSortingStrategy}
            >
              {/* Reverse to show top layers first */}
              {[...layers].reverse().map((layer) => (
                <SortableLayerItem
                  key={layer.id}
                  layer={layer}
                  isSelected={layer.id === selectedLayerId}
                  onSelect={onSelectLayer}
                  onDelete={onDeleteLayer}
                />
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>

      {/* Quick tips */}
      <div className="p-3 border-t border-gray-700 bg-gray-800/50">
        <p className="text-xs text-gray-400">
          <span className="font-semibold">Tip:</span> Drag layers to reorder Z-index
        </p>
      </div>
    </div>
  );
};

export default LayersPanel;
