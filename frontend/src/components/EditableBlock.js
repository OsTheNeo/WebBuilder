import React from 'react';
import EditableText from './EditableText';

/**
 * EditableBlock - Wrapper component that makes block elements editable
 * Converts block data structure to editable JSX
 */
const EditableBlock = ({ blockData, onUpdate, onStyleChange, isEditing = false }) => {
  const updateField = (path, value) => {
    if (onUpdate) {
      onUpdate(path, value);
    }
  };

  const renderElement = (element, index = 0, parentPath = '') => {
    if (!element) return null;

    const elementPath = parentPath ? `${parentPath}.${index}` : `${index}`;
    const nodeId = element.id || elementPath;

    // Handle text content
    if (element.type === 'text') {
      const Tag = element.tag || 'p';

      if (isEditing) {
        return (
          <EditableText
            key={nodeId}
            tag={Tag}
            value={element.content || ''}
            onChange={(val) => updateField(`${elementPath}.content`, val)}
            className={element.className || ''}
            placeholder={element.placeholder || 'Enter text...'}
            nodeId={nodeId}
            onStyleChange={onStyleChange}
            multiline={element.multiline}
          />
        );
      }

      return React.createElement(
        Tag,
        {
          key: nodeId,
          className: element.className
        },
        element.content
      );
    }

    // Handle container elements
    if (element.type === 'container') {
      const Tag = element.tag || 'div';

      return React.createElement(
        Tag,
        {
          key: nodeId,
          className: element.className,
          style: element.style
        },
        element.children?.map((child, idx) =>
          renderElement(child, idx, elementPath)
        )
      );
    }

    // Handle image elements
    if (element.type === 'image') {
      return (
        <img
          key={nodeId}
          src={element.src || ''}
          alt={element.alt || ''}
          className={element.className}
          style={element.style}
        />
      );
    }

    // Handle button elements
    if (element.type === 'button') {
      return (
        <button
          key={nodeId}
          className={element.className}
          style={element.style}
        >
          {element.content}
        </button>
      );
    }

    return null;
  };

  return (
    <div className="w-full">
      {blockData?.structure?.map((element, index) =>
        renderElement(element, index)
      )}
    </div>
  );
};

export default EditableBlock;
