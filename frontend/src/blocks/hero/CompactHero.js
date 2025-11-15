import React from 'react';

const CompactHero = ({ data = {} }) => {
  const {
    title = 'Welcome to Our Platform',
    subtitle = 'Build amazing things',
    ctaText = 'Get Started'
  } = data;

  return (
    <section className="w-full h-32 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center px-8">
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p className="text-purple-100 text-sm mb-2">{subtitle}</p>
        <button className="bg-white text-purple-600 px-4 py-1 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm">
          {ctaText}
        </button>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
CompactHero.blockMeta = {
  id: 'hero-1',
  name: 'Compact Hero',
  category: 'hero',
  height: 'h-32',
  defaultData: {
    title: 'Welcome to Our Platform',
    subtitle: 'Build amazing things',
    ctaText: 'Get Started'
  },
  getTree: (data = {}) => ({
    id: 'compact-hero-root',
    tag: 'section',
    label: 'Hero Section',
    className: 'w-full h-32 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center px-8',
    children: [
      {
        id: 'compact-hero-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'text-center text-white',
        children: [
          {
            id: 'compact-hero-title',
            tag: 'h1',
            label: 'Title',
            content: data.title || 'Welcome to Our Platform',
            className: 'text-2xl font-bold mb-1',
            editable: true
          },
          {
            id: 'compact-hero-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'Build amazing things',
            className: 'text-purple-100 text-sm mb-2',
            editable: true
          },
          {
            id: 'compact-hero-cta',
            tag: 'button',
            label: 'CTA Button',
            content: data.ctaText || 'Get Started',
            className: 'bg-white text-purple-600 px-4 py-1 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm',
            editable: true
          }
        ]
      }
    ]
  })
};

export default CompactHero;
