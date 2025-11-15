import React from 'react';

const LargeHeader = ({ data = {} }) => {
  const { title = 'Large Header', subtitle = 'A more spacious header with room for content' } = data;

  return (
    <header className="w-full h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-3 text-white">{title}</h1>
        <p className="text-lg text-blue-100">{subtitle}</p>
      </div>
    </header>
  );
};

// Block metadata and structure for tree mapping
LargeHeader.blockMeta = {
  id: 'header-2',
  name: 'Large Header',
  category: 'headers',
  height: 'h-48',
  defaultData: {
    title: 'Large Header',
    subtitle: 'A more spacious header with room for content'
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'large-header-root',
    tag: 'header',
    label: 'Header Container',
    className: 'w-full h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center px-8',
    children: [
      {
        id: 'large-header-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'text-center text-white max-w-2xl',
        children: [
          {
            id: 'large-header-title',
            tag: 'h1',
            label: 'Title',
            content: data.title || 'Large Header',
            className: 'text-4xl font-bold mb-3 text-white',
            editable: true
          },
          {
            id: 'large-header-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'A more spacious header with room for content',
            className: 'text-lg text-blue-100',
            editable: true
          }
        ]
      }
    ]
  })
};

export default LargeHeader;
