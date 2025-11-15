import React from 'react';

const MegaHeader = ({ data = {} }) => {
  const {
    title = 'Mega Header',
    subtitle = 'An impressive header section',
    buttonText = 'Get Started'
  } = data;

  return (
    <header className="w-full h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-3xl">
        <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-xl text-blue-100 mb-4">{subtitle}</p>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
          {buttonText}
        </button>
      </div>
    </header>
  );
};

// Block metadata and structure for tree mapping
MegaHeader.blockMeta = {
  id: 'header-3',
  name: 'Mega Header',
  category: 'headers',
  height: 'h-64',
  defaultData: {
    title: 'Mega Header',
    subtitle: 'An impressive header section',
    buttonText: 'Get Started'
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'mega-header-root',
    tag: 'header',
    label: 'Header Container',
    className: 'w-full h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center px-8',
    children: [
      {
        id: 'mega-header-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'text-center text-white max-w-3xl',
        children: [
          {
            id: 'mega-header-title',
            tag: 'h1',
            label: 'Title',
            content: data.title || 'Mega Header',
            className: 'text-5xl font-bold mb-4 text-white',
            editable: true
          },
          {
            id: 'mega-header-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'An impressive header section',
            className: 'text-xl text-blue-100 mb-4',
            editable: true
          },
          {
            id: 'mega-header-button',
            tag: 'button',
            label: 'CTA Button',
            content: data.buttonText || 'Get Started',
            className: 'px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition',
            editable: true
          }
        ]
      }
    ]
  })
};

export default MegaHeader;
