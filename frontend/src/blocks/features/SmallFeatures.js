import React from 'react';

const SmallFeatures = ({ data = {} }) => {
 const {
 title = 'Key Features',
 features = [
 { name: 'Fast', icon: '⚡' },
 { name: 'Secure', icon: '🔒' },
 { name: 'Scalable', icon: '📈' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-16">
 <div className="max-w-5xl w-full">
 <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">{title}</h2>
 <div className="flex gap-8 justify-center">
 {features.map((feature, index) => (
 <div key={index} className="flex items-center gap-2 text-gray-900">
 <span className="text-2xl">{feature.icon}</span>
 <span className="font-semibold">{feature.name}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
SmallFeatures.blockMeta = {
 id: 'features-1',
 name: 'Small Features',
 category: 'features',
 height: 'h-32',
 defaultData: {
 title: 'Key Features',
 features: [
 { name: 'Fast', icon: '⚡' },
 { name: 'Secure', icon: '🔒' },
 { name: 'Scalable', icon: '📈' }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'small-features-root',
 tag: 'section',
 label: 'Features Section',
 className: 'w-full flex items-center justify-center px-8',
 children: [
 {
 id: 'small-features-container',
 tag: 'div',
 label: 'Container',
 className: 'max-w-5xl w-full',
 children: [
 {
 id: 'small-features-title',
 tag: 'h2',
 label: 'Section Title',
 content: data.title || 'Key Features',
 className: 'text-2xl font-bold text-gray-900 text-center mb-3',
 editable: true
 },
 {
 id: 'small-features-list',
 tag: 'div',
 label: 'Features List',
 className: 'flex gap-8 justify-center',
 children: (data.features || SmallFeatures.blockMeta.defaultData.features).map((feature, index) => ({
 id: `small-feature-${index}`,
 tag: 'div',
 label: `Feature ${index + 1}`,
 className: 'flex items-center gap-2 text-gray-900',
 children: [
 {
 id: `small-feature-icon-${index}`,
 tag: 'span',
 label: 'Icon',
 content: feature.icon,
 className: 'text-2xl',
 editable: true
 },
 {
 id: `small-feature-name-${index}`,
 tag: 'span',
 label: 'Name',
 content: feature.name,
 className: 'font-semibold',
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

export default SmallFeatures;
