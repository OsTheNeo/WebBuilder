import React from 'react';

const LargeFeatures = ({ data = {} }) => {
 const {
 title = 'Powerful Features',
 subtitle = 'Everything you need to succeed',
 features = [
 { name: 'Advanced Analytics', icon: '📊', description: 'Deep insights into your data with real-time dashboards' },
 { name: 'Cloud Integration', icon: '☁️', description: 'Seamlessly connect with popular cloud services' },
 { name: 'API Access', icon: '🔌', description: 'Full REST API with comprehensive documentation' },
 { name: 'Team Collaboration', icon: '👥', description: 'Work together with powerful collaboration tools' },
 { name: 'Custom Workflows', icon: '⚙️', description: 'Build automated workflows that fit your needs' },
 { name: 'Security First', icon: '🛡️', description: 'Enterprise-grade security and compliance' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-8">
 <div className="max-w-6xl w-full">
 <div className="text-center mb-8">
 <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
 <p className="text-xl text-gray-600">{subtitle}</p>
 </div>
 <div className="grid grid-cols-3 gap-6">
 {features.map((feature, index) => (
 <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-gray-300/20 hover:bg-white/20 transition-all">
 <div className="text-4xl mb-3">{feature.icon}</div>
 <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.name}</h3>
 <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
LargeFeatures.blockMeta = {
 id: 'features-3',
 name: 'Large Features',
 category: 'features',
 height: 'h-64',
 defaultData: {
 title: 'Powerful Features',
 subtitle: 'Everything you need to succeed',
 features: [
 { name: 'Advanced Analytics', icon: '📊', description: 'Deep insights into your data with real-time dashboards' },
 { name: 'Cloud Integration', icon: '☁️', description: 'Seamlessly connect with popular cloud services' },
 { name: 'API Access', icon: '🔌', description: 'Full REST API with comprehensive documentation' },
 { name: 'Team Collaboration', icon: '👥', description: 'Work together with powerful collaboration tools' },
 { name: 'Custom Workflows', icon: '⚙️', description: 'Build automated workflows that fit your needs' },
 { name: 'Security First', icon: '🛡️', description: 'Enterprise-grade security and compliance' }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'large-features-root',
 tag: 'section',
 label: 'Features Section',
 className: 'w-full flex items-center justify-center px-8 py-8',
 children: [
 {
 id: 'large-features-container',
 tag: 'div',
 label: 'Container',
 className: 'max-w-6xl w-full',
 children: [
 {
 id: 'large-features-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'large-features-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Powerful Features',
 className: 'text-4xl font-bold text-gray-900 mb-2',
 editable: true
 },
 {
 id: 'large-features-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Everything you need to succeed',
 className: 'text-xl text-gray-600',
 editable: true
 }
 ]
 },
 {
 id: 'large-features-grid',
 tag: 'div',
 label: 'Features Grid',
 className: 'grid grid-cols-3 gap-6',
 children: (data.features || LargeFeatures.blockMeta.defaultData.features).map((feature, index) => ({
 id: `large-feature-${index}`,
 tag: 'div',
 label: `Feature ${index + 1}`,
 className: 'bg-white/10 backdrop-blur-md rounded-xl p-5 border border-gray-300/20 hover:bg-white/20 transition-all',
 children: [
 {
 id: `large-feature-icon-${index}`,
 tag: 'div',
 label: 'Icon',
 content: feature.icon,
 className: 'text-4xl mb-3',
 editable: true
 },
 {
 id: `large-feature-name-${index}`,
 tag: 'h3',
 label: 'Name',
 content: feature.name,
 className: 'font-bold text-gray-900 text-lg mb-2',
 editable: true
 },
 {
 id: `large-feature-description-${index}`,
 tag: 'p',
 label: 'Description',
 content: feature.description,
 className: 'text-sm text-gray-500 leading-relaxed',
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

export default LargeFeatures;
