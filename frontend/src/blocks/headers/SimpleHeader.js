import React from 'react';

const SimpleHeader = ({ data = {} }) => {
  const { title = 'Simple Header', subtitle = 'A clean and minimal header section' } = data;

  return (
    <header className="w-full h-32 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-3xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-blue-100 text-base">{subtitle}</p>
      </div>
    </header>
  );
};

// Block metadata and structure for tree mapping
SimpleHeader.blockMeta = {
  id: 'header-1',
  name: 'Simple Header',
  category: 'headers',
  height: 'h-32',
  defaultData: {
    title: 'Simple Header',
    subtitle: 'A clean and minimal header section'
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'simple-header-root',
    tag: 'header',
    label: 'Header Container',
    className: 'w-full h-32 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center px-8',
    children: [
      {
        id: 'simple-header-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'text-center text-white max-w-4xl',
        children: [
          {
            id: 'simple-header-title',
            tag: 'h1',
            label: 'Title',
            content: data.title || 'Simple Header',
            className: 'text-3xl font-bold mb-2 text-white',
            editable: true
          },
          {
            id: 'simple-header-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'A clean and minimal header section',
            className: 'text-blue-100 text-base',
            editable: true
          }
        ]
      }
    ]
  })
};

export default SimpleHeader;
