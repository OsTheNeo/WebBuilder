import React from 'react';

const TallHeader = ({ data = {} }) => {
  const {
    title = 'Tall Header',
    subtitle = 'Extra height for maximum impact',
    primaryButtonText = 'Primary Action',
    secondaryButtonText = 'Secondary'
  } = data;

  return (
    <header className="w-full h-80 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-6xl font-bold mb-6 text-white">{title}</h1>
        <p className="text-2xl text-blue-200 mb-8">{subtitle}</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
            {primaryButtonText}
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </header>
  );
};

// Block metadata and structure for tree mapping
TallHeader.blockMeta = {
  id: 'header-4',
  name: 'Tall Header',
  category: 'headers',
  height: 'h-80',
  defaultData: {
    title: 'Tall Header',
    subtitle: 'Extra height for maximum impact',
    primaryButtonText: 'Primary Action',
    secondaryButtonText: 'Secondary'
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'tall-header-root',
    tag: 'header',
    label: 'Header Container',
    className: 'w-full h-80 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center px-8',
    children: [
      {
        id: 'tall-header-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'text-center text-white max-w-4xl',
        children: [
          {
            id: 'tall-header-title',
            tag: 'h1',
            label: 'Title',
            content: data.title || 'Tall Header',
            className: 'text-6xl font-bold mb-6 text-white',
            editable: true
          },
          {
            id: 'tall-header-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'Extra height for maximum impact',
            className: 'text-2xl text-blue-200 mb-8',
            editable: true
          },
          {
            id: 'tall-header-button-group',
            tag: 'div',
            label: 'Button Group',
            className: 'flex gap-4 justify-center',
            children: [
              {
                id: 'tall-header-primary-button',
                tag: 'button',
                label: 'Primary Button',
                content: data.primaryButtonText || 'Primary Action',
                className: 'px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition',
                editable: true
              },
              {
                id: 'tall-header-secondary-button',
                tag: 'button',
                label: 'Secondary Button',
                content: data.secondaryButtonText || 'Secondary',
                className: 'px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition',
                editable: true
              }
            ]
          }
        ]
      }
    ]
  })
};

export default TallHeader;
