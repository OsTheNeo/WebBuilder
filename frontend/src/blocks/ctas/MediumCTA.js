import React from 'react';

const MediumCTA = ({ data = {} }) => {
  const {
    title = 'Start Your Free Trial Today',
    subtitle = 'No credit card required. Cancel anytime.',
    ctaText = 'Get Started Free',
    secondaryCtaText = 'Talk to Sales'
  } = data;

  return (
    <section className="w-full h-48 bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center px-8 py-6">
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-3">{title}</h2>
        <p className="text-xl text-red-100 mb-6">{subtitle}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg text-lg">
            {ctaText}
          </button>
          <button className="bg-red-600 text-white border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-all transform hover:scale-105 text-lg">
            {secondaryCtaText}
          </button>
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
MediumCTA.blockMeta = {
  id: 'cta-2',
  name: 'Medium CTA',
  category: 'ctas',
  height: 'h-48',
  defaultData: {
    title: 'Start Your Free Trial Today',
    subtitle: 'No credit card required. Cancel anytime.',
    ctaText: 'Get Started Free',
    secondaryCtaText: 'Talk to Sales'
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'medium-cta-root',
    tag: 'section',
    label: 'CTA Container',
    className: 'w-full h-48 bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center px-8 py-6',
    children: [
      {
        id: 'medium-cta-wrapper',
        tag: 'div',
        label: 'Content Wrapper',
        className: 'max-w-4xl text-center',
        children: [
          {
            id: 'medium-cta-title',
            tag: 'h2',
            label: 'Title',
            content: data.title || 'Start Your Free Trial Today',
            className: 'text-4xl font-bold text-white mb-3',
            editable: true
          },
          {
            id: 'medium-cta-subtitle',
            tag: 'p',
            label: 'Subtitle',
            content: data.subtitle || 'No credit card required. Cancel anytime.',
            className: 'text-xl text-red-100 mb-6',
            editable: true
          },
          {
            id: 'medium-cta-button-group',
            tag: 'div',
            label: 'Button Group',
            className: 'flex gap-4 justify-center',
            children: [
              {
                id: 'medium-cta-primary-button',
                tag: 'button',
                label: 'Primary Button',
                content: data.ctaText || 'Get Started Free',
                className: 'bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg text-lg',
                editable: true
              },
              {
                id: 'medium-cta-secondary-button',
                tag: 'button',
                label: 'Secondary Button',
                content: data.secondaryCtaText || 'Talk to Sales',
                className: 'bg-red-600 text-white border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition-all transform hover:scale-105 text-lg',
                editable: true
              }
            ]
          }
        ]
      }
    ]
  })
};

export default MediumCTA;
