import React from 'react';

const XLFeatures = ({ data = {} }) => {
 const {
 title = 'Complete Feature Set',
 subtitle = 'Professional tools for modern teams',
 description = 'Discover all the features that make our platform the best choice for your business',
 features = [
 { name: 'Real-time Collaboration', icon: '🤝', description: 'Work together seamlessly with your team in real-time across all devices' },
 { name: 'Advanced Analytics', icon: '📊', description: 'Comprehensive analytics and reporting tools to track your progress' },
 { name: 'AI-Powered Insights', icon: '🧠', description: 'Leverage artificial intelligence to gain deeper insights from your data' },
 { name: 'Custom Integrations', icon: '🔗', description: 'Connect with your favorite tools through our extensive API' },
 { name: 'Enterprise Security', icon: '🔐', description: 'Bank-level encryption and compliance with industry standards' },
 { name: 'Unlimited Storage', icon: '💾', description: 'Store all your data without worrying about limits or restrictions' }
 ]
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-10">
 <div className="max-w-7xl w-full">
 <div className="text-center mb-10">
 <h2 className="text-5xl font-bold text-gray-900 mb-3">{title}</h2>
 <p className="text-2xl text-gray-600 mb-2">{subtitle}</p>
 <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
 </div>
 <div className="grid grid-cols-3 gap-6">
 {features.map((feature, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/25 hover:bg-white/25 transition-all transform hover:scale-105">
 <div className="text-5xl mb-4">{feature.icon}</div>
 <h3 className="font-bold text-gray-900 text-xl mb-3">{feature.name}</h3>
 <p className="text-gray-500 leading-relaxed">{feature.description}</p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
XLFeatures.blockMeta = {
 id: 'features-4',
 name: 'XL Features',
 category: 'features',
 height: 'h-80',
 defaultData: {
 title: 'Complete Feature Set',
 subtitle: 'Professional tools for modern teams',
 description: 'Discover all the features that make our platform the best choice for your business',
 features: [
 { name: 'Real-time Collaboration', icon: '🤝', description: 'Work together seamlessly with your team in real-time across all devices' },
 { name: 'Advanced Analytics', icon: '📊', description: 'Comprehensive analytics and reporting tools to track your progress' },
 { name: 'AI-Powered Insights', icon: '🧠', description: 'Leverage artificial intelligence to gain deeper insights from your data' },
 { name: 'Custom Integrations', icon: '🔗', description: 'Connect with your favorite tools through our extensive API' },
 { name: 'Enterprise Security', icon: '🔐', description: 'Bank-level encryption and compliance with industry standards' },
 { name: 'Unlimited Storage', icon: '💾', description: 'Store all your data without worrying about limits or restrictions' }
 ]
 },
 // Tree structure definition
 getTree: (data = {}) => ({
 id: 'xl-features-root',
 tag: 'section',
 label: 'Features Section',
 className: 'w-full flex items-center justify-center px-8 py-10',
 children: [
 {
 id: 'xl-features-container',
 tag: 'div',
 label: 'Container',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'xl-features-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-10',
 children: [
 {
 id: 'xl-features-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Complete Feature Set',
 className: 'text-5xl font-bold text-gray-900 mb-3',
 editable: true
 },
 {
 id: 'xl-features-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Professional tools for modern teams',
 className: 'text-2xl text-gray-600 mb-2',
 editable: true
 },
 {
 id: 'xl-features-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Discover all the features that make our platform the best choice for your business',
 className: 'text-lg text-gray-600 max-w-3xl mx-auto',
 editable: true
 }
 ]
 },
 {
 id: 'xl-features-grid',
 tag: 'div',
 label: 'Features Grid',
 className: 'grid grid-cols-3 gap-6',
 children: (data.features || XLFeatures.blockMeta.defaultData.features).map((feature, index) => ({
 id: `xl-feature-${index}`,
 tag: 'div',
 label: `Feature ${index + 1}`,
 className: 'bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-gray-300/25 hover:bg-white/25 transition-all transform hover:scale-105',
 children: [
 {
 id: `xl-feature-icon-${index}`,
 tag: 'div',
 label: 'Icon',
 content: feature.icon,
 className: 'text-5xl mb-4',
 editable: true
 },
 {
 id: `xl-feature-name-${index}`,
 tag: 'h3',
 label: 'Name',
 content: feature.name,
 className: 'font-bold text-gray-900 text-xl mb-3',
 editable: true
 },
 {
 id: `xl-feature-description-${index}`,
 tag: 'p',
 label: 'Description',
 content: feature.description,
 className: 'text-gray-500 leading-relaxed',
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

export default XLFeatures;
