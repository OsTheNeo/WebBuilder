import React from 'react';

const SmallCTA = ({ data = {} }) => {
  const {
    title = 'Ready to get started?',
    ctaText = 'Sign Up Now'
  } = data;

  return (
    <section className="w-full h-32 bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center px-8">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg">
          {ctaText}
        </button>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
SmallCTA.blockMeta = {
  id: 'cta-1',
  name: 'Small CTA',
  category: 'ctas',
  height: 'h-32',
  defaultData: {
    title: 'Ready to get started?',
    ctaText: 'Sign Up Now'
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'small-cta-root',
    tag: 'section',
    label: 'CTA Container',
    className: 'w-full h-32 bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center px-8',
    children: [
      {
        id: 'small-cta-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'flex items-center gap-6',
        children: [
          {
            id: 'small-cta-title',
            tag: 'h2',
            label: 'Title',
            content: data.title || 'Ready to get started?',
            className: 'text-2xl font-bold text-white',
            editable: true
          },
          {
            id: 'small-cta-button',
            tag: 'button',
            label: 'CTA Button',
            content: data.ctaText || 'Sign Up Now',
            className: 'bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg',
            editable: true
          }
        ]
      }
    ]
  })
};

export default SmallCTA;
