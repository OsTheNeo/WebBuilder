import React, { useState, useRef, useEffect } from 'react';

const EditableText = ({
  value,
  onChange,
  className = '',
  tag = 'p',
  placeholder = 'Click to edit...',
  multiline = false
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(value);
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

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    const newValue = editableRef.current?.innerText || '';
    if (newValue !== value) {
      onChange(newValue);
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
  );
};

export default EditableText;
