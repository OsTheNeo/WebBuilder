import React, { useState, useRef, useEffect } from 'react';
import StyleToolbar from './StyleToolbar';

const EditableText = ({
  value,
  onChange,
  className = '',
  tag = 'p',
  placeholder = 'Click to edit...',
  multiline = false,
  onStyleChange,
  nodeId
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(value);
  const [showToolbar, setShowToolbar] = useState(false);
  const [toolbarPosition, setToolbarPosition] = useState({ x: 0, y: 0 });
  const editableRef = useRef(null);

  useEffect(() => {
    setContent(value);
  }, [value]);

  useEffect(() => {
    if (isEditing && editableRef.current) {
      editableRef.current.focus();
      // Select all text when entering edit mode
      const range = document.createRange();
      const selection = window.getSelection();
      range.selectNodeContents(editableRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [isEditing]);

  const handleClick = (e) => {
    setIsEditing(true);
    setShowToolbar(true);

    // Position toolbar above the element
    const rect = editableRef.current?.getBoundingClientRect();
    if (rect) {
      setToolbarPosition({
        x: rect.left,
        y: rect.top
      });
    }
  };

  const handleBlur = () => {
    // Delay to allow toolbar clicks to register
    setTimeout(() => {
      setIsEditing(false);
      setShowToolbar(false);
      const newValue = editableRef.current?.innerText || '';
      if (newValue !== value) {
        onChange(newValue);
      }
    }, 200);
  };

  const handleStyleChangeInternal = (styleClass) => {
    if (onStyleChange) {
      onStyleChange(nodeId, styleClass);
    }
  };

  const handleKeyDown = (e) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      editableRef.current?.blur();
    }
    if (e.key === 'Escape') {
      setContent(value);
      setIsEditing(false);
    }
  };

  const Tag = tag;

  return (
    <>
      <Tag
        ref={editableRef}
        className={`${className} ${isEditing ? 'outline-2 outline-blue-500 outline-dashed outline-offset-2' : 'cursor-text hover:bg-blue-50/30 transition-colors'} ${!content && !isEditing ? 'text-gray-400' : ''}`}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        dangerouslySetInnerHTML={{ __html: content || (isEditing ? '' : placeholder) }}
      />

      <StyleToolbar
        isVisible={showToolbar}
        position={toolbarPosition}
        currentStyles={className}
        onStyleChange={handleStyleChangeInternal}
      />
    </>
  );
};

export default EditableText;
