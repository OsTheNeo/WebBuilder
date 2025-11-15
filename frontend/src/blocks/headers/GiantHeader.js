import React from 'react';

const GiantHeader = ({ data = {} }) => {
  const {
    title = 'Giant Header',
    subtitle = 'The ultimate header experience',
    primaryButtonText = 'Get Started Now',
    secondaryButtonText = 'Learn More'
  } = data;

  return (
    <header className="w-full h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="text-center text-white max-w-5xl relative z-10">
        <h1 className="text-7xl font-bold mb-8 text-white">{title}</h1>
        <p className="text-3xl text-blue-200 mb-10">{subtitle}</p>
        <div className="flex gap-6 justify-center">
          <button className="px-10 py-5 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition shadow-xl">
            {primaryButtonText}
          </button>
          <button className="px-10 py-5 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition">
            {secondaryButtonText}
          </button>
        </div>
      </div>
    </header>
  );
};

// Block metadata and structure for tree mapping
GiantHeader.blockMeta = {
  id: 'header-5',
  name: 'Giant Header',
  category: 'headers',
  height: 'h-96',
  defaultData: {
    title: 'Giant Header',
    subtitle: 'The ultimate header experience',
    primaryButtonText: 'Get Started Now',
    secondaryButtonText: 'Learn More'
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'giant-header-root',
    tag: 'header',
    label: 'Header Container',
    className: 'w-full h-96 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-8 relative overflow-hidden',
    children: [
      {
        id: 'giant-header-background-pattern',
        tag: 'div',
        label: 'Background Pattern',
        className: 'absolute inset-0 opacity-10',
        children: [
          {
            id: 'giant-header-pattern-grid',
            tag: 'div',
            label: 'Pattern Grid',
            className: 'absolute inset-0',
            style: {
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '32px 32px'
            }
          }
        ]
      },
      {
        id: 'giant-header-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'text-center text-white max-w-5xl relative z-10',
        children: [
          {
            id: 'giant-header-title',
            tag: 'h1',
            label: 'Title',
            content: data.title || 'Giant Header',
            className: 'text-7xl font-bold mb-8 text-white',
            editable: true
          },
          {
            id: 'giant-header-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'The ultimate header experience',
            className: 'text-3xl text-blue-200 mb-10',
            editable: true
          },
          {
            id: 'giant-header-button-group',
            tag: 'div',
            label: 'Button Group',
            className: 'flex gap-6 justify-center',
            children: [
              {
                id: 'giant-header-primary-button',
                tag: 'button',
                label: 'Primary Button',
                content: data.primaryButtonText || 'Get Started Now',
                className: 'px-10 py-5 bg-blue-500 text-white rounded-lg font-semibold text-lg hover:bg-blue-600 transition shadow-xl',
                editable: true
              },
              {
                id: 'giant-header-secondary-button',
                tag: 'button',
                label: 'Secondary Button',
                content: data.secondaryButtonText || 'Learn More',
                className: 'px-10 py-5 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition',
                editable: true
              }
            ]
          }
        ]
      }
    ]
  })
};

export default GiantHeader;
