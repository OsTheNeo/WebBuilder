import React from 'react';

const XXLFeatures = ({ data = {} }) => {
  const {
    title = 'The Ultimate Platform',
    subtitle = 'Everything you need and more',
    description = 'Comprehensive features designed for enterprises and growing businesses',
    features = [
      { name: 'Smart Automation', icon: '🤖', description: 'Automate repetitive tasks and workflows with intelligent automation', highlight: 'Save 10+ hours/week' },
      { name: 'Global CDN', icon: '🌍', description: 'Lightning-fast content delivery worldwide with 99.99% uptime', highlight: 'Sub-50ms latency' },
      { name: 'Advanced Security', icon: '🛡️', description: 'Military-grade encryption, 2FA, and comprehensive audit logs', highlight: 'SOC 2 Certified' },
      { name: 'Team Management', icon: '👨‍💼', description: 'Granular permissions, role-based access, and team analytics', highlight: 'Unlimited users' },
      { name: 'API & Webhooks', icon: '⚡', description: 'Powerful REST API and real-time webhooks for custom integrations', highlight: '99.9% API uptime' },
      { name: 'Premium Support', icon: '🎯', description: 'Dedicated account manager and 24/7 priority support', highlight: '< 1hr response' },
      { name: 'Custom Branding', icon: '🎨', description: 'White-label solutions with full customization options', highlight: 'Your brand' },
      { name: 'Data Analytics', icon: '📈', description: 'Advanced reporting, custom dashboards, and predictive analytics', highlight: 'Real-time insights' }
    ]
  } = data;

  return (
    <section className="w-full h-96 bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100">
            {title}
          </h2>
          <p className="text-2xl text-green-100 font-semibold mb-3">{subtitle}</p>
          <p className="text-xl text-green-200 max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <div className="bg-green-900/30 text-green-100 text-xs font-bold px-2 py-1 rounded-full mb-3 inline-block">
                {feature.highlight}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{feature.name}</h3>
              <p className="text-sm text-green-50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
XXLFeatures.blockMeta = {
  id: 'features-5',
  name: 'XXL Features',
  category: 'features',
  height: 'h-96',
  defaultData: {
    title: 'The Ultimate Platform',
    subtitle: 'Everything you need and more',
    description: 'Comprehensive features designed for enterprises and growing businesses',
    features: [
      { name: 'Smart Automation', icon: '🤖', description: 'Automate repetitive tasks and workflows with intelligent automation', highlight: 'Save 10+ hours/week' },
      { name: 'Global CDN', icon: '🌍', description: 'Lightning-fast content delivery worldwide with 99.99% uptime', highlight: 'Sub-50ms latency' },
      { name: 'Advanced Security', icon: '🛡️', description: 'Military-grade encryption, 2FA, and comprehensive audit logs', highlight: 'SOC 2 Certified' },
      { name: 'Team Management', icon: '👨‍💼', description: 'Granular permissions, role-based access, and team analytics', highlight: 'Unlimited users' },
      { name: 'API & Webhooks', icon: '⚡', description: 'Powerful REST API and real-time webhooks for custom integrations', highlight: '99.9% API uptime' },
      { name: 'Premium Support', icon: '🎯', description: 'Dedicated account manager and 24/7 priority support', highlight: '< 1hr response' },
      { name: 'Custom Branding', icon: '🎨', description: 'White-label solutions with full customization options', highlight: 'Your brand' },
      { name: 'Data Analytics', icon: '📈', description: 'Advanced reporting, custom dashboards, and predictive analytics', highlight: 'Real-time insights' }
    ]
  },
  // Tree structure definition
  getTree: (data = {}) => ({
    id: 'xxl-features-root',
    tag: 'section',
    label: 'Features Section',
    className: 'w-full h-96 bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 flex items-center justify-center px-8 py-12',
    children: [
      {
        id: 'xxl-features-container',
        tag: 'div',
        label: 'Container',
        className: 'max-w-7xl w-full',
        children: [
          {
            id: 'xxl-features-header',
            tag: 'div',
            label: 'Header',
            className: 'text-center mb-12',
            children: [
              {
                id: 'xxl-features-title',
                tag: 'h2',
                label: 'Title',
                content: data.title || 'The Ultimate Platform',
                className: 'text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-100',
                editable: true
              },
              {
                id: 'xxl-features-subtitle',
                tag: 'p',
                label: 'Subtitle',
                content: data.subtitle || 'Everything you need and more',
                className: 'text-2xl text-green-100 font-semibold mb-3',
                editable: true
              },
              {
                id: 'xxl-features-description',
                tag: 'p',
                label: 'Description',
                content: data.description || 'Comprehensive features designed for enterprises and growing businesses',
                className: 'text-xl text-green-200 max-w-4xl mx-auto leading-relaxed',
                editable: true
              }
            ]
          },
          {
            id: 'xxl-features-grid',
            tag: 'div',
            label: 'Features Grid',
            className: 'grid grid-cols-4 gap-5',
            children: (data.features || XXLFeatures.blockMeta.defaultData.features).map((feature, index) => ({
              id: `xxl-feature-${index}`,
              tag: 'div',
              label: `Feature ${index + 1}`,
              className: 'bg-white/10 backdrop-blur-xl rounded-2xl p-5 border-2 border-white/30 hover:bg-white/20 transition-all transform hover:scale-105 hover:shadow-2xl',
              children: [
                {
                  id: `xxl-feature-icon-${index}`,
                  tag: 'div',
                  label: 'Icon',
                  content: feature.icon,
                  className: 'text-4xl mb-3',
                  editable: true
                },
                {
                  id: `xxl-feature-highlight-${index}`,
                  tag: 'div',
                  label: 'Highlight',
                  content: feature.highlight,
                  className: 'bg-green-900/30 text-green-100 text-xs font-bold px-2 py-1 rounded-full mb-3 inline-block',
                  editable: true
                },
                {
                  id: `xxl-feature-name-${index}`,
                  tag: 'h3',
                  label: 'Name',
                  content: feature.name,
                  className: 'font-bold text-white text-lg mb-2',
                  editable: true
                },
                {
                  id: `xxl-feature-description-${index}`,
                  tag: 'p',
                  label: 'Description',
                  content: feature.description,
                  className: 'text-sm text-green-50 leading-relaxed',
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

export default XXLFeatures;
