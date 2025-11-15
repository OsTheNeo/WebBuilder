import React from 'react';

const MediumFeatures = ({ data = {} }) => {
  const {
    title = 'Why Choose Us',
    subtitle = 'Features that make a difference',
    features = [
      { name: 'Lightning Fast', icon: '⚡', description: 'Optimized performance' },
      { name: 'Secure', icon: '🔒', description: 'Enterprise-grade security' },
      { name: 'Scalable', icon: '📈', description: 'Grows with you' },
      { name: 'Support', icon: '💬', description: '24/7 assistance' }
    ]
  } = data;

  return (
    <section className="w-full h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          <p className="text-green-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-3xl mb-1">{feature.icon}</div>
              <div className="font-bold text-white mb-1">{feature.name}</div>
              <div className="text-xs text-green-50">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
MediumFeatures.blockMeta = {
  id: 'features-2',
  name: 'Medium Features',
  category: 'features',
  height: 'h-48',
  defaultData: {
    title: 'Why Choose Us',
    subtitle: 'Features that make a difference',
    features: [
      { name: 'Lightning Fast', icon: '⚡', description: 'Optimized performance' },
      { name: 'Secure', icon: '🔒', description: 'Enterprise-grade security' },
      { name: 'Scalable', icon: '📈', description: 'Grows with you' },
      { name: 'Support', icon: '💬', description: '24/7 assistance' }
    ]
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'medium-features-root',
    tag: 'section',
    label: 'Features Section',
    className: 'w-full h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center px-8 py-6',
    children: [
      {
        id: 'medium-features-container',
        tag: 'div',
        label: 'Container',
        className: 'max-w-6xl w-full',
        children: [
          {
            id: 'medium-features-header',
            tag: 'div',
            label: 'Header',
            className: 'text-center mb-6',
            children: [
              {
                id: 'medium-features-title',
                tag: 'h2',
                label: 'Title',
                content: data.title || 'Why Choose Us',
                className: 'text-3xl font-bold text-white mb-1',
                editable: true
              },
              {
                id: 'medium-features-subtitle',
                tag: 'p',
                label: 'Subtitle',
                content: data.subtitle || 'Features that make a difference',
                className: 'text-green-100',
                editable: true
              }
            ]
          },
          {
            id: 'medium-features-grid',
            tag: 'div',
            label: 'Features Grid',
            className: 'grid grid-cols-4 gap-4',
            children: (data.features || MediumFeatures.blockMeta.defaultData.features).map((feature, index) => ({
              id: `medium-feature-${index}`,
              tag: 'div',
              label: `Feature ${index + 1}`,
              className: 'bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center',
              children: [
                {
                  id: `medium-feature-icon-${index}`,
                  tag: 'div',
                  label: 'Icon',
                  content: feature.icon,
                  className: 'text-3xl mb-1',
                  editable: true
                },
                {
                  id: `medium-feature-name-${index}`,
                  tag: 'div',
                  label: 'Name',
                  content: feature.name,
                  className: 'font-bold text-white mb-1',
                  editable: true
                },
                {
                  id: `medium-feature-description-${index}`,
                  tag: 'div',
                  label: 'Description',
                  content: feature.description,
                  className: 'text-xs text-green-50',
                  editable: true
                }
              ]
            }))
          }
        ]
      }
    ]
  })
};

export default MediumFeatures;
