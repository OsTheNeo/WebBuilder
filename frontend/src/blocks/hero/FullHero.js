import React from 'react';

const FullHero = ({ data = {} }) => {
  const {
    title = 'Transform Your Vision Into Reality',
    subtitle = 'Powerful tools and services to help you succeed',
    description = 'Join thousands of satisfied customers who have achieved their goals with our platform',
    ctaText = 'Start Free Trial',
    secondaryCtaText = 'Learn More'
  } = data;

  return (
    <section className="w-full h-80 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 flex items-center justify-center px-8">
      <div className="max-w-4xl text-center text-white space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl text-purple-100 font-medium">{subtitle}</p>
        <p className="text-lg text-purple-200 max-w-2xl mx-auto">{description}</p>
        <div className="flex gap-4 justify-center pt-4">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
            {ctaText}
          </button>
          <button className="bg-purple-600 text-white border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105">
            {secondaryCtaText}
          </button>
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
FullHero.blockMeta = {
  id: 'hero-4',
  name: 'Full Hero',
  category: 'hero',
  height: 'h-80',
  defaultData: {
    title: 'Transform Your Vision Into Reality',
    subtitle: 'Powerful tools and services to help you succeed',
    description: 'Join thousands of satisfied customers who have achieved their goals with our platform',
    ctaText: 'Start Free Trial',
    secondaryCtaText: 'Learn More'
  },
  getTree: (data = {}) => ({
    id: 'full-hero-root',
    tag: 'section',
    label: 'Hero Section',
    className: 'w-full h-80 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700 flex items-center justify-center px-8',
    children: [
      {
        id: 'full-hero-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'max-w-4xl text-center text-white space-y-6',
        children: [
          {
            id: 'full-hero-title',
            tag: 'h1',
            label: 'Title',
            content: data.title || 'Transform Your Vision Into Reality',
            className: 'text-5xl md:text-6xl font-bold leading-tight',
            editable: true
          },
          {
            id: 'full-hero-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'Powerful tools and services to help you succeed',
            className: 'text-xl md:text-2xl text-purple-100 font-medium',
            editable: true
          },
          {
            id: 'full-hero-description',
            tag: 'p',
            label: 'Description',
            content: data.description || 'Join thousands of satisfied customers who have achieved their goals with our platform',
            className: 'text-lg text-purple-200 max-w-2xl mx-auto',
            editable: true
          },
          {
            id: 'full-hero-cta-wrapper',
            tag: 'div',
            label: 'CTA Wrapper',
            className: 'flex gap-4 justify-center pt-4',
            children: [
              {
                id: 'full-hero-primary-cta',
                tag: 'button',
                label: 'Primary CTA',
                content: data.ctaText || 'Start Free Trial',
                className: 'bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg',
                editable: true
              },
              {
                id: 'full-hero-secondary-cta',
                tag: 'button',
                label: 'Secondary CTA',
                content: data.secondaryCtaText || 'Learn More',
                className: 'bg-purple-600 text-white border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105',
                editable: true
              }
            ]
          }
        ]
      }
    ]
  })
};

export default FullHero;
