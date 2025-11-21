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
  const [appliedClasses, setAppliedClasses] = useState(className);
  const editableRef = useRef(null);

  useEffect(() => {
    setContent(value);
  }, [value]);

  useEffect(() => {
    setAppliedClasses(className);
  }, [className]);

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
  };

  const handleBlur = (e) => {
    // The StyleToolbar uses preventDefault on mouseDown, so clicks on it won't trigger blur
    // We use a small delay to handle edge cases and ensure smooth UX
    setTimeout(() => {
      // Only close if we're still not focused on the editable element
      if (!editableRef.current?.contains(document.activeElement)) {
        setIsEditing(false);
        setShowToolbar(false);
        const newValue = editableRef.current?.innerText || '';
        if (newValue !== value) {
          onChange(newValue);
        }
      }
    }, 100);
  };

  const handleStyleChangeInternal = (styleClass) => {
    // Handle reset command
    if (styleClass === 'RESET_STYLES') {
      setAppliedClasses(className); // Reset to original className
      if (onStyleChange) {
        onStyleChange(nodeId, className);
      }
      return;
    }

    // Remove conflicting classes from the same category
    let currentClasses = appliedClasses.split(' ').filter(c => c);

    // Define class categories to avoid conflicts
    const classCategories = {
      textColor: /^text-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)-(\d+)?$/,
      fontSize: /^text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)$/,
      fontWeight: /^font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)$/,
      bgColor: /^bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)-(\d+)?$/,
      fontFamily: /^font-(sans|serif|mono)$/,
      textAlign: /^text-(left|center|right|justify)$/,
      listStyle: /^list-(disc|decimal|none)$/,
      padding: /^pl-\d+$/,
    };

    // Handle toggle classes (italic, underline, bold)
    const toggleClasses = ['italic', 'underline', 'font-bold'];
    if (toggleClasses.includes(styleClass)) {
      // Toggle the class
      if (currentClasses.includes(styleClass)) {
        currentClasses = currentClasses.filter(c => c !== styleClass);
      } else {
        // For bold, remove other font-weight classes first
        if (styleClass === 'font-bold') {
          currentClasses = currentClasses.filter(c => !classCategories.fontWeight.test(c));
        }
        currentClasses.push(styleClass);
      }
    } else {
      // Identify which category the new class belongs to
      let categoryToRemove = null;
      for (const [category, regex] of Object.entries(classCategories)) {
        if (regex.test(styleClass)) {
          categoryToRemove = regex;
          break;
        }
      }

      // Remove old classes from the same category
      if (categoryToRemove) {
        currentClasses = currentClasses.filter(c => !categoryToRemove.test(c));
      }

      // Add the new class if it's not empty
      if (styleClass) {
        currentClasses.push(styleClass);
      }
    }

    const newClasses = currentClasses.join(' ');
    setAppliedClasses(newClasses);

    // Notify parent component
    if (onStyleChange) {
      onStyleChange(nodeId, newClasses);
    }

    // Return focus to the editable element after applying style
    setTimeout(() => {
      if (editableRef.current && isEditing) {
        editableRef.current.focus();
      }
    }, 10);
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
        className={`${appliedClasses} ${isEditing ? 'outline-2 outline-blue-500 outline-dashed outline-offset-2' : 'cursor-text hover:bg-blue-50/30 transition-colors'} ${!content && !isEditing ? 'text-gray-400' : ''}`}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        dangerouslySetInnerHTML={{ __html: content || (isEditing ? '' : placeholder) }}
      />

      <StyleToolbar
        isVisible={showToolbar}
        targetElement={editableRef.current}
        onStyleChange={handleStyleChangeInternal}
      />
    </>
  );
};

export default EditableText;
